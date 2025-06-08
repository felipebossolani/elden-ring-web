import { useState, useEffect } from "react";
import { Sorcery, PaginationInfo } from "@/lib/types";

interface UseSorceriesParams {
  page?: number;
  limit?: number;
  search?: string;
}

interface UseSorceriesResult {
  sorceries: Sorcery[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
}

export function useEldenRingSorceries(params: UseSorceriesParams = {}): UseSorceriesResult {
  const { page = 0, limit = 20, search } = params;
  const [sorceries, setSorceries] = useState<Sorcery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalItems: 0,
    itemsPerPage: limit,
    totalPages: 0,
  });

  useEffect(() => {
    const fetchSorceries = async () => {
      try {
        setLoading(true);
        setError(null);
        const params = new URLSearchParams({ limit: limit.toString(), page: page.toString() });
        if (search) {
          params.append("name", search);
        }
        const response = await fetch(`https://eldenring.fanapis.com/api/sorceries?${params}`);
        if (!response.ok) {
          throw new Error("Failed to fetch sorceries");
        }
        const data = await response.json();
        if (data.success && data.data) {
          setSorceries(data.data);
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

    fetchSorceries();
  }, [page, limit, search]);

  return { sorceries, loading, error, pagination };
}
