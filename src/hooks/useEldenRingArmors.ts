import { useState, useEffect } from "react";
import { Armor, PaginationInfo } from "@/lib/types";

interface UseArmorsResult {
  armors: Armor[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
  categories: string[];
  loadingCategories: boolean;
}

interface UseArmorsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

export function useEldenRingArmors(params: UseArmorsParams = {}): UseArmorsResult {
  const [armors, setArmors] = useState<Armor[]>([]);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await fetch("https://eldenring.fanapis.com/api/armors?limit=1000");
        if (!response.ok) {
          throw new Error("Failed to fetch armors for categories");
        }
        const data = await response.json();
        if (data.success && data.data) {
          const uniqueCategories = Array.from(
            new Set(data.data.map((armor: Armor) => armor.category))
          ).filter(Boolean).sort() as string[];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching armor categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchArmors = async () => {
      try {
        setLoading(true);
        setError(null);
        const shouldFetchAll = (category && category !== "all") || !!search;
        const fetchLimit = shouldFetchAll ? 1000 : limit;
        const fetchParams = new URLSearchParams({
          limit: fetchLimit.toString(),
          page: shouldFetchAll ? "0" : page.toString(),
        });
        if (search) {
          fetchParams.append("name", search);
        }
        const response = await fetch(`https://eldenring.fanapis.com/api/armors?${fetchParams}`);
        if (!response.ok) {
          throw new Error("Failed to fetch armors");
        }
        const data = await response.json();
        if (data.success && data.data) {
          let filteredArmors = data.data;
          if (category && category !== "all") {
            filteredArmors = filteredArmors.filter(
              (armor: Armor) => armor.category === category
            );
          }
          const shouldPaginateClient = (category && category !== "all") || !!search;
          if (shouldPaginateClient) {
            const startIndex = page * limit;
            const endIndex = startIndex + limit;
            const paginated = filteredArmors.slice(startIndex, endIndex);
            setArmors(paginated);
          } else {
            setArmors(filteredArmors);
          }
          const totalItems = (category && category !== "all") || search
            ? filteredArmors.length
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
    fetchArmors();
  }, [page, limit, category, search]);

  return {
    armors,
    loading,
    error,
    pagination,
    categories,
    loadingCategories,
  };
}

