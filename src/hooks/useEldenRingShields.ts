import { useState, useEffect } from "react";
import { EldenRingWeapon as EldenRingShield, PaginationInfo } from "@/lib/types";

interface UseShieldsResult {
  shields: EldenRingShield[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
  categories: string[];
  loadingCategories: boolean;
}

interface UseShieldsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

export function useEldenRingShields(params: UseShieldsParams = {}): UseShieldsResult {
  const [shields, setShields] = useState<EldenRingShield[]>([]);
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
        const response = await fetch("https://eldenring.fanapis.com/api/shields?limit=1000");

        if (!response.ok) {
          throw new Error("Failed to fetch shields for categories");
        }

        const data = await response.json();

        if (data.success && data.data) {
          const uniqueCategories = Array.from(
            new Set(data.data.map((shield: EldenRingShield) => shield.category))
          ).filter(Boolean).sort() as string[];

          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching shield categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchShields = async () => {
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

        const response = await fetch(`https://eldenring.fanapis.com/api/shields?${fetchParams}`);

        if (!response.ok) {
          throw new Error("Failed to fetch shields");
        }

        const data = await response.json();

        if (data.success && data.data) {
          let filtered = data.data;
          if (category && category !== "all") {
            filtered = filtered.filter(
              (shield: EldenRingShield) => shield.category === category
            );
          }

          const shouldPaginateClient = (category && category !== "all") || !!search;
          if (shouldPaginateClient) {
            const startIndex = page * limit;
            const endIndex = startIndex + limit;
            const paginated = filtered.slice(startIndex, endIndex);
            setShields(paginated);
          } else {
            setShields(filtered);
          }

          const totalItems = (category && category !== "all") || search
            ? filtered.length
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

    fetchShields();
  }, [page, limit, category, search]);

  return {
    shields,
    loading,
    error,
    pagination,
    categories,
    loadingCategories,
  };
}
