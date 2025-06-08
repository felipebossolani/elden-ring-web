import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Shield, 
  Sword, 
  Users, 
  Target, 
  Gem, 
  Crown,
  Scroll,
  MapPin,
  Package,
  FlameKindling,
  User,
  Zap,
  ShieldCheck
} from "lucide-react";

const menuItems = [
  { href: "/ammo", label: "Ammo", icon: Target },
  { href: "/armors", label: "Armors", icon: Shield },
  { href: "/ashes", label: "Ashes", icon: FlameKindling },
  { href: "/bosses", label: "Bosses", icon: Crown },
  { href: "/classes", label: "Classes", icon: Users },
  { href: "/creatures", label: "Creatures", icon: Crown },
  { href: "/incantations", label: "Incantations", icon: Scroll },
  { href: "/items", label: "Items", icon: Package },
  { href: "/locations", label: "Locations", icon: MapPin },
  { href: "/npcs", label: "NPCs", icon: User },
  { href: "/shields", label: "Shields", icon: ShieldCheck },
  { href: "/sorceries", label: "Sorceries", icon: Zap },
  { href: "/talismans", label: "Talismans", icon: Gem },
  { href: "/weapons", label: "Weapons", icon: Sword },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-background/95 backdrop-blur-sm border-r border-border/50">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border/50">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medieval text-xl text-golden-light">ELDEN RING</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ScrollArea className="flex-1 px-3 py-6">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start space-x-3 h-11 text-foreground hover:text-golden hover:bg-golden/10 transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">
            Built with{" "}
            <a 
              href="https://docs.eldenring.fanapis.com/docs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors"
            >
              Elden Ring Fan API
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
} 