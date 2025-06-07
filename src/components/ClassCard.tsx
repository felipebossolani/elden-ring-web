import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EldenRingClass } from "@/lib/types";
import Image from "next/image";

interface ClassCardProps {
  eldenClass: EldenRingClass;
}

export function ClassCard({ eldenClass }: ClassCardProps) {
  const { name, image, description, stats } = eldenClass;

  const statGroups = [
    { label: "Vigor", value: stats.vigor, color: "bg-red-600/20 text-red-400 border-red-600/30" },
    { label: "Mind", value: stats.mind, color: "bg-blue-600/20 text-blue-400 border-blue-600/30" },
    { label: "Endurance", value: stats.endurance, color: "bg-green-600/20 text-green-400 border-green-600/30" },
    { label: "Strength", value: stats.strength, color: "bg-orange-600/20 text-orange-400 border-orange-600/30" },
    { label: "Dexterity", value: stats.dexterity, color: "bg-yellow-600/20 text-yellow-400 border-yellow-600/30" },
    { label: "Intelligence", value: stats.intelligence, color: "bg-purple-600/20 text-purple-400 border-purple-600/30" },
    { label: "Faith", value: stats.faith, color: "bg-golden/20 text-golden border-golden/30" },
    { label: "Arcane", value: stats.arcane, color: "bg-pink-600/20 text-pink-400 border-pink-600/30" },
  ];

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
            Level {stats.level}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="font-medieval text-xl text-golden-light group-hover:text-golden transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-2">
          {statGroups.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <Badge variant="outline" className={`${stat.color} text-xs font-mono`}>
                {stat.value}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 