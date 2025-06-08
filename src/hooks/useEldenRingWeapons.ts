import { useState, useEffect } from "react";
import { Weapon, PaginationInfo } from "@/lib/types";

interface UseWeaponsResult {
  weapons: Weapon[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
  categories: string[];
  loadingCategories: boolean;
}

interface UseWeaponsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

export function useEldenRingWeapons(params: UseWeaponsParams = {}): UseWeaponsResult {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 20,
    totalPages: 0,
  });

  const { page = 0, limit = 20, category, search } = params;

  // Fetch categories once on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await fetch("https://eldenring.fanapis.com/api/weapons?limit=1000");
        
        if (!response.ok) {
          throw new Error("Failed to fetch weapons for categories");
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
          const uniqueCategories = Array.from(
            new Set(data.data.map((weapon: Weapon) => weapon.category))
          ).filter(Boolean).sort() as string[];
          
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch weapons based on parameters
  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const shouldFetchAll = (category && category !== "all") || !!search;

        // Determine request params. If filtering by category or searching,
        // fetch a large dataset so we can paginate client-side.
        const fetchLimit = shouldFetchAll ? 1000 : limit;
        const fetchParams = new URLSearchParams({
          limit: fetchLimit.toString(),
          page: shouldFetchAll ? "0" : page.toString(),
        });
        if (search) {
          fetchParams.append("name", search);
        }

        const response = await fetch(`https://eldenring.fanapis.com/api/weapons?${fetchParams}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch weapons");
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
          let filteredWeapons = data.data;

          // Filter by category client-side since API doesn't support category filter
          if (category && category !== "all") {
            filteredWeapons = filteredWeapons.filter(
              (weapon: Weapon) => weapon.category === category
            );
          }

          const shouldPaginateClient = (category && category !== "all") || !!search;

          if (shouldPaginateClient) {
            const startIndex = page * limit;
            const endIndex = startIndex + limit;
            const paginatedWeapons = filteredWeapons.slice(startIndex, endIndex);
            setWeapons(paginatedWeapons);
          } else {
            setWeapons(filteredWeapons);
          }

          const totalItems = (category && category !== "all") || search
            ? filteredWeapons.length
            : data.total || data.count;
            
          setPagination({
            currentPage: page + 1,
            totalItems,
            itemsPerPage: limit,
            totalPages: Math.ceil(totalItems / limit),
          });
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, [page, limit, category, search]);

  return { 
    weapons, 
    loading, 
    error, 
    pagination, 
    categories, 
    loadingCategories 
  };
} 