import { useState, useEffect } from "react";
import { EldenRingNPC, PaginationInfo } from "@/lib/types";

interface UseNPCsParams {
  page?: number;
  limit?: number;
  search?: string;
}

interface UseNPCsResult {
  npcs: EldenRingNPC[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
}

export function useEldenRingNPCs(params: UseNPCsParams = {}): UseNPCsResult {
  const { page = 0, limit = 20, search } = params;

  const [npcs, setNpcs] = useState<EldenRingNPC[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: limit,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchNPCs = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          limit: limit.toString(),
          page: page.toString(),
        });
        if (search) {
          params.append("name", search);
        }

        const response = await fetch(`https://eldenring.fanapis.com/api/npcs?${params}`);

        if (!response.ok) {
          throw new Error("Failed to fetch NPCs");
        }

        const data = await response.json();

        if (data.success && data.data) {
          setNpcs(data.data);
          const totalItems = data.total || data.count;
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

    fetchNPCs();
  }, [page, limit, search]);

  return {
    npcs,
    loading,
    error,
    pagination,
  };
}
