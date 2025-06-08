import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EldenRingLocation } from "@/lib/types";
import Image from "next/image";

interface LocationCardProps {
  location: EldenRingLocation;
}

export function LocationCard({ location }: LocationCardProps) {
  const { name, image, description, region } = location;

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
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-golden text-background font-medieval font-semibold">
            {region}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-xl text-golden-light group-hover:text-golden transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent />
    </Card>
  );
}
