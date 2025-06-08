import { useState, useEffect } from "react";
import { EldenRingAmmo } from "@/lib/types";

interface UseAmmoResult {
  ammos: EldenRingAmmo[];
  loading: boolean;
  error: string | null;
}

export function useEldenRingAmmo(search: string = ""): UseAmmoResult {
  const [ammos, setAmmos] = useState<EldenRingAmmo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAmmos = async () => {
      try {
        setLoading(true);
        setError(null);
        const url = new URL("https://eldenring.fanapis.com/api/ammos");
        url.searchParams.set("limit", "1000");
        if (search) {
          url.searchParams.set("name", search);
        }
        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error("Failed to fetch ammos");
        }
        const result = await response.json();
        if (result.success && result.data) {
          setAmmos(result.data);
        } else {
          throw new Error("Invalid response format for ammos");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAmmos();
  }, [search]);

  return { ammos, loading, error };
}
