"use client";

import { ClassCard } from "@/components/ClassCard";
import { LoadingCard } from "@/components/LoadingCard";
import { Class } from "@/lib/types";
import { useEldenRingAPI } from "@/hooks/useEldenRingAPI";

export default function ClassesPage() {
  const { data: classes, loading, error } = useEldenRingAPI<Class>("classes");

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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
            Classes of The Lands Between
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your origin and forge your destiny. Each class offers a unique starting point 
            for your journey through the treacherous realm of Elden Ring.
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
              {classes.map((eldenClass) => (
                <ClassCard key={eldenClass.id} eldenClass={eldenClass} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 