import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Armor } from "@/lib/types";

interface ArmorCardProps {
  armor: Armor;
}

export function ArmorCard({ armor }: ArmorCardProps) {
  const { name, image, description, category, weight, dmgNegation, resistance } = armor;

  const physical = dmgNegation.find((d) => d.name === "Phy")?.amount ?? 0;
  const poise = resistance.find((r) => r.name === "Poise")?.amount ?? 0;

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
        <div className="absolute top-2 left-2">
          <Badge variant="outline" className="bg-muted/50 text-foreground">
            {category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-background/80 text-foreground font-mono text-xs">
            {weight}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2 flex gap-2">
          <Badge className="bg-golden text-background font-bold">
            {physical} PHY
          </Badge>
          {poise > 0 && (
            <Badge variant="outline" className="bg-green-600/20 text-green-400 border-green-600/30">
              {poise} POISE
            </Badge>
          )}
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
    </Card>
  );
}

