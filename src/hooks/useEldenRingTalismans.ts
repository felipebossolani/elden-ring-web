import { useState, useEffect } from "react";
import { EldenRingTalisman, PaginationInfo } from "@/lib/types";

interface UseTalismansResult {
  talismans: EldenRingTalisman[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
}

interface UseTalismansParams {
  page?: number;
  limit?: number;
  search?: string;
}

export function useEldenRingTalismans(
  params: UseTalismansParams = {}
): UseTalismansResult {
  const [talismans, setTalismans] = useState<EldenRingTalisman[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: 20,
    totalPages: 0,
  });

  const { page = 0, limit = 20, search } = params;

  useEffect(() => {
    const fetchTalismans = async () => {
      try {
        setLoading(true);
        setError(null);

        const shouldFetchAll = !!search;
        const fetchLimit = shouldFetchAll ? 1000 : limit;
        const fetchParams = new URLSearchParams({
          limit: fetchLimit.toString(),
          page: shouldFetchAll ? "0" : page.toString(),
        });
        if (search) {
          fetchParams.append("name", search);
        }

        const response = await fetch(
          `https://eldenring.fanapis.com/api/talismans?${fetchParams}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch talismans");
        }

        const data = await response.json();

        if (data.success && data.data) {
          let filtered = data.data as EldenRingTalisman[];

          const shouldPaginateClient = !!search;

          if (shouldPaginateClient) {
            const startIndex = page * limit;
            const endIndex = startIndex + limit;
            filtered = filtered.slice(startIndex, endIndex);
            setTalismans(filtered);
          } else {
            setTalismans(filtered);
          }

          const totalItems = search ? data.data.length : data.total || data.count;

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

    fetchTalismans();
  }, [page, limit, search]);

  return { talismans, loading, error, pagination };
}
