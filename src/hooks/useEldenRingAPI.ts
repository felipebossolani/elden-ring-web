import { useState, useEffect } from "react";

interface UseApiResult<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useEldenRingAPI<T>(endpoint: string): UseApiResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://eldenring.fanapis.com/api/${endpoint}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${endpoint}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setData(result.data);
        } else {
          throw new Error(`Invalid response format for ${endpoint}`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
} 