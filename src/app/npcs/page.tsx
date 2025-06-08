"use client";

import { useState, useEffect } from "react";
import { NPCCard } from "@/components/NPCCard";
import { LoadingCard } from "@/components/LoadingCard";
import { NpcsFilters } from "@/components/NpcsFilters";
import { NpcsPagination } from "@/components/NpcsPagination";
import { useEldenRingNPCs } from "@/hooks/useEldenRingNPCs";

export default function NpcsPage() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0); // reset when searching
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const { npcs, loading, error, pagination } = useEldenRingNPCs({
    page,
    limit: 16,
    search: debouncedSearch || undefined,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1); // convert to 0-based
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
          <h1 className="font-medieval text-4xl md:text-6xl text-golden-light mb-4">Faces of The Lands Between</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the many allies and adversaries encountered throughout your journey.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <NpcsFilters search={search} setSearch={setSearch} totalItems={pagination.totalItems} />

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : npcs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medieval text-muted-foreground mb-2">No NPCs found</h3>
              <p className="text-muted-foreground">Try adjusting your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {npcs.map((npc) => (
                  <NPCCard key={npc.id} npc={npc} />
                ))}
              </div>

              <NpcsPagination pagination={pagination} onPageChange={handlePageChange} loading={loading} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
