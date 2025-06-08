import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ash } from "@/lib/types";
import Image from "next/image";

interface AshCardProps {
  ash: Ash;
}

export function AshCard({ ash }: AshCardProps) {
  const { name, image, description, affinity, skill } = ash;
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
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-background/80 text-foreground font-mono text-xs">
            {affinity}
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
      <CardContent className="pt-0">
        {skill && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Skill</span>
            <Badge variant="outline" className="bg-muted/50 text-foreground text-xs font-mono">
              {skill}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
