"use client";

import { LocationCard } from "@/components/LocationCard";
import { LoadingCard } from "@/components/LoadingCard";
import { Location } from "@/lib/types";
import { useEldenRingAPI } from "@/hooks/useEldenRingAPI";

export default function LocationsPage() {
  const { data: locations, loading, error } = useEldenRingAPI<Location>("locations");

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
          <h1 className="font-medieval text-4xl md:text-6xl text-golden-light mb-4">Landmarks of The Lands Between</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Journey across the vast world and discover castles, dungeons and other key locations.
          </p>
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
