import { useState, useEffect } from "react";
import { EldenRingIncantation, PaginationInfo } from "@/lib/types";

interface UseIncantationsResult {
  incantations: EldenRingIncantation[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
}

interface UseIncantationsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export function useEldenRingIncantations(
  params: UseIncantationsParams = {}
): UseIncantationsResult {
  const [incantations, setIncantations] = useState<EldenRingIncantation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: params.limit ?? 20,
    totalPages: 0,
  });

  const { page = 0, limit = 20, search } = params;

  useEffect(() => {
    const fetchIncantations = async () => {
      try {
        setLoading(true);
        setError(null);
        const query = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        if (search) query.append("name", search);
        const res = await fetch(
          `https://eldenring.fanapis.com/api/incantations?${query}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch incantations");
        }
        const data = await res.json();
        if (data.success && data.data) {
          setIncantations(data.data);
          const total = data.total || data.count;
          setPagination({
            currentPage: page + 1,
            totalItems: total,
            itemsPerPage: limit,
            totalPages: Math.ceil(total / limit),
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

    fetchIncantations();
  }, [page, limit, search]);

  return { incantations, loading, error, pagination };
}
