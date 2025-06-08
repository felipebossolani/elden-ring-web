import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NPC } from "@/lib/types";
import Image from "next/image";

interface NPCCardProps {
  npc: NPC;
}

export function NPCCard({ npc }: NPCCardProps) {
  const { name, image, quote, location, role } = npc;

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-golden/50 hover:bg-card/90 hover:shadow-lg hover:shadow-golden/20">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2">
          <Badge variant="outline" className="bg-muted/50 text-foreground text-xs">
            {location}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-lg text-golden-light group-hover:text-golden transition-colors line-clamp-1">
          {name}
        </CardTitle>
        {quote && (
          <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
            {quote}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        <Badge variant="outline" className="bg-muted/50 text-foreground text-xs">
          {role}
        </Badge>
      </CardContent>
    </Card>
  );
}
