"use client";

import { useState } from "react";
import { AmmoCard } from "@/components/AmmoCard";
import { LoadingCard } from "@/components/LoadingCard";
import { useEldenRingAmmo } from "@/hooks/useEldenRingAmmo";
import { Input } from "@/components/ui/input";

export default function AmmoPage() {
  const [search, setSearch] = useState("");
  const { ammos, loading, error } = useEldenRingAmmo(search);

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
            Ammunition Arsenal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stock up on arrows, bolts and other deadly ammo for your journey.
          </p>
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <Input
              placeholder="Search ammo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-background/50 border-border/50 focus:border-golden/50"
            />
          </div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ammos.map((ammo) => (
                <AmmoCard key={ammo.id} ammo={ammo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
