"use client";

import { useState, useEffect } from "react";
import { TalismanCard } from "@/components/TalismanCard";
import { LoadingCard } from "@/components/LoadingCard";
import { TalismansFilters } from "@/components/TalismansFilters";
import { TalismansPagination } from "@/components/TalismansPagination";
import { useEldenRingTalismans } from "@/hooks/useEldenRingTalismans";

export default function TalismansPage() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { talismans, loading, error, pagination } = useEldenRingTalismans({
    page,
    limit: 16,
    search: debouncedSearch || undefined,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center -mt-20 pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-medieval text-destructive mb-4">Error</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background -mt-20 pt-20">
      {/* Header */}
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-medieval text-4xl md:text-6xl text-golden-light mb-4">
            Talismans of The Lands Between
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful trinkets that grant unique abilities and enhancements to aid your journey.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Filters */}
          <TalismansFilters
            search={search}
            setSearch={setSearch}
            totalItems={pagination.totalItems}
          />

          {/* Talismans Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : talismans.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medieval text-muted-foreground mb-2">
                No talismans found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {talismans.map((talisman) => (
                  <TalismanCard key={talisman.id} talisman={talisman} />
                ))}
              </div>

              {/* Pagination */}
              <TalismansPagination
                pagination={pagination}
                onPageChange={handlePageChange}
                loading={loading}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
