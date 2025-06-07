import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function LoadingCard() {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm animate-pulse">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-4 left-4">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-5 w-8 rounded-full" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 