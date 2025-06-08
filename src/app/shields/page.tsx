"use client";

import { useState, useEffect } from "react";
import { WeaponCard } from "@/components/WeaponCard";
import { LoadingCard } from "@/components/LoadingCard";
import { WeaponsFilters } from "@/components/WeaponsFilters";
import { WeaponsPagination } from "@/components/WeaponsPagination";
import { useEldenRingShields } from "@/hooks/useEldenRingShields";

export default function ShieldsPage() {
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0); // Reset to first page when searching
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Reset to first page when category changes
  useEffect(() => {
    setPage(0);
  }, [category]);

  const {
    shields,
    loading,
    error,
    pagination,
    categories,
    loadingCategories
  } = useEldenRingShields({
    page,
    limit: 16,
    category: category === "all" ? undefined : category,
    search: debouncedSearch || undefined,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1); // Convert to 0-based
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            Shields of The Lands Between
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find the perfect defense to weather any storm. These shields protect
            against the fiercest foes in the realm.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Filters */}
          <WeaponsFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            categories={categories}
            loadingCategories={loadingCategories}
            totalItems={pagination.totalItems}
          />

          {/* Weapons Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 16 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : shields.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medieval text-muted-foreground mb-2">
                No shields found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {shields.map((shield) => (
                  <WeaponCard key={shield.id} weapon={shield} />
                ))}
              </div>

              {/* Pagination */}
              <WeaponsPagination
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
