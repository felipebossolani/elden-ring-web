import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Creature } from "@/lib/types";
import Image from "next/image";

interface CreatureCardProps {
  creature: Creature;
}

export function CreatureCard({ creature }: CreatureCardProps) {
  const { name, image, description, location, drops } = creature;

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-golden/50 hover:bg-card/90 hover:shadow-lg hover:shadow-golden/20">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105 p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-lg text-golden-light group-hover:text-golden transition-colors line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-2">
        <Badge variant="outline" className="bg-muted/50 text-foreground text-xs">
          {location}
        </Badge>
        {drops.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {drops.map((drop, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-golden/20 text-golden border-golden/30 text-xs"
              >
                {drop}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
