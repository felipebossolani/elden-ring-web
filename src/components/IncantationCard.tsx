import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Incantation } from "@/lib/types";
import Image from "next/image";

interface IncantationCardProps {
  incantation: Incantation;
}

export function IncantationCard({ incantation }: IncantationCardProps) {
  const { name, image, description, cost, slots, effects, requires } = incantation;

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
        <div className="absolute bottom-2 left-2 flex gap-2">
          <Badge className="bg-golden text-background font-bold">
            {cost} FP
          </Badge>
          <Badge variant="outline" className="bg-background/80 text-foreground font-mono text-xs">
            {slots} slot{slots > 1 ? "s" : ""}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-lg text-golden-light group-hover:text-golden transition-colors line-clamp-1">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {effects && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">EFFECT</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{effects}</p>
          </div>
        )}
        {requires.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">REQUIRES</h4>
            <div className="flex gap-1 flex-wrap">
              {requires.map((req, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-muted/50 text-foreground text-xs font-mono"
                >
                  {req.name}: {req.amount}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
