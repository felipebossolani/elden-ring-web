"use client";

import { CreatureCard } from "@/components/CreatureCard";
import { LoadingCard } from "@/components/LoadingCard";
import { Creature } from "@/lib/types";
import { useEldenRingAPI } from "@/hooks/useEldenRingAPI";

export default function CreaturesPage() {
  const { data: creatures, loading, error } = useEldenRingAPI<Creature>("creatures");

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
            Creatures of The Lands Between
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encounter the beasts that roam the world and learn what spoils they may leave behind.
          </p>
        </div>
      </div>

      {/* Content */}
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
              {creatures.map((creature) => (
                <CreatureCard key={creature.id} creature={creature} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
