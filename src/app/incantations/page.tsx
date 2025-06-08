"use client";

import { useState, useEffect } from "react";
import { IncantationCard } from "@/components/IncantationCard";
import { LoadingCard } from "@/components/LoadingCard";
import { IncantationsFilters } from "@/components/IncantationsFilters";
import { WeaponsPagination } from "@/components/WeaponsPagination";
import { useEldenRingIncantations } from "@/hooks/useEldenRingIncantations";

export default function IncantationsPage() {
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

  const { incantations, loading, error, pagination } = useEldenRingIncantations({
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
      <div className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="font-medieval text-4xl md:text-6xl text-golden-light mb-4">
            Sacred Incantations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Harness the power of faith to unleash miraculous spells upon your foes.
          </p>
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <IncantationsFilters
            search={search}
            setSearch={setSearch}
            totalItems={pagination.totalItems}
          />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : incantations.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medieval text-muted-foreground mb-2">
                No incantations found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {incantations.map((inc) => (
                  <IncantationCard key={inc.id} incantation={inc} />
                ))}
              </div>
              <WeaponsPagination
                pagination={pagination}
                onPageChange={handlePageChange}
                loading={loading}
                itemLabel="incantations"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
