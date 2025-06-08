import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Weapon } from "@/lib/types";
import Image from "next/image";

interface WeaponCardProps {
  weapon: Weapon;
}

export function WeaponCard({ weapon }: WeaponCardProps) {
  const { name, image, description, attack, scalesWith, requiredAttributes, category, weight } = weapon;

  const physicalAttack = attack.find(stat => stat.name === "Phy")?.amount || 0;
  const criticalAttack = attack.find(stat => stat.name === "Crit")?.amount || 100;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Dagger": "bg-violet-600/20 text-violet-400 border-violet-600/30",
      "Straight Sword": "bg-blue-600/20 text-blue-400 border-blue-600/30",
      "Greatsword": "bg-red-600/20 text-red-400 border-red-600/30",
      "Colossal Sword": "bg-red-800/20 text-red-300 border-red-800/30",
      "Curved Sword": "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
      "Curved Greatsword": "bg-cyan-800/20 text-cyan-300 border-cyan-800/30",
      "Katana": "bg-purple-600/20 text-purple-400 border-purple-600/30",
      "Twinblade": "bg-pink-600/20 text-pink-400 border-pink-600/30",
      "Thrusting Sword": "bg-indigo-600/20 text-indigo-400 border-indigo-600/30",
      "Heavy Thrusting Sword": "bg-indigo-800/20 text-indigo-300 border-indigo-800/30",
      "Axe": "bg-orange-600/20 text-orange-400 border-orange-600/30",
      "Greataxe": "bg-orange-800/20 text-orange-300 border-orange-800/30",
      "Hammer": "bg-yellow-600/20 text-yellow-400 border-yellow-600/30",
      "Great Hammer": "bg-yellow-800/20 text-yellow-300 border-yellow-800/30",
      "Flail": "bg-amber-600/20 text-amber-400 border-amber-600/30",
      "Spear": "bg-green-600/20 text-green-400 border-green-600/30",
      "Great Spear": "bg-green-800/20 text-green-300 border-green-800/30",
      "Halberd": "bg-emerald-600/20 text-emerald-400 border-emerald-600/30",
      "Reaper": "bg-gray-600/20 text-gray-400 border-gray-600/30",
      "Whip": "bg-rose-600/20 text-rose-400 border-rose-600/30",
      "Fist": "bg-stone-600/20 text-stone-400 border-stone-600/30",
      "Claw": "bg-zinc-600/20 text-zinc-400 border-zinc-600/30",
      "Colossal Weapon": "bg-slate-600/20 text-slate-400 border-slate-600/30",
      "Torch": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    };
    return colors[category] || "bg-gray-600/20 text-gray-400 border-gray-600/30";
  };

  const getScalingColor = (scaling: string) => {
    const colors: Record<string, string> = {
      "S": "bg-golden text-background",
      "A": "bg-green-600 text-white",
      "B": "bg-blue-600 text-white",
      "C": "bg-orange-600 text-white",
      "D": "bg-red-600 text-white",
      "E": "bg-gray-600 text-white",
      "-": "bg-gray-400 text-white",
    };
    return colors[scaling] || "bg-gray-500 text-white";
  };

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
        
        {/* Category and Weight */}
        <div className="absolute top-2 left-2">
          <Badge variant="outline" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-background/80 text-foreground font-mono text-xs">
            {weight}
          </Badge>
        </div>

        {/* Attack stats */}
        <div className="absolute bottom-2 left-2 flex gap-2">
          <Badge className="bg-golden text-background font-bold">
            {physicalAttack} ATK
          </Badge>
          {criticalAttack !== 100 && (
            <Badge variant="outline" className="bg-red-600/20 text-red-400 border-red-600/30">
              {criticalAttack} CRIT
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
      
      <CardContent className="pt-0 space-y-3">
        {/* Scaling */}
        {scalesWith.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">SCALING</h4>
            <div className="flex gap-1 flex-wrap">
              {scalesWith.map((scale, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={`${getScalingColor(scale.scaling)} text-xs font-mono border-0`}
                >
                  {scale.name}: {scale.scaling}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Requirements */}
        {requiredAttributes.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">REQUIREMENTS</h4>
            <div className="flex gap-1 flex-wrap">
              {requiredAttributes.map((req, index) => (
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