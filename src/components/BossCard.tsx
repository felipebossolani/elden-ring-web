import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Boss } from "@/lib/types";
import Image from "next/image";

interface BossCardProps {
  boss: Boss;
}

export function BossCard({ boss }: BossCardProps) {
  const { name, image, region, description, location, drops, healthPoints } = boss;

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-golden/50 hover:bg-card/90 hover:shadow-lg hover:shadow-golden/20">
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-muted/20 text-muted-foreground text-sm p-4">
            No image
          </div>
        )}
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-golden text-background font-mono">{healthPoints}</Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-lg text-golden-light group-hover:text-golden transition-colors line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
          {region} - {location}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-2">
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
        {drops.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-1">DROPS</h4>
            <div className="flex gap-1 flex-wrap">
              {drops.map((drop, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-muted/50 text-foreground text-xs font-mono"
                >
                  {drop}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
