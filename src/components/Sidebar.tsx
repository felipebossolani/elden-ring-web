"use client";

import { useEffect } from "react";
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
  ShieldCheck,
  X
} from "lucide-react";

const menuItems = [
  { href: "/ammo", label: "Ammo", icon: Target },
  { href: "/armors", label: "Armors", icon: Shield },
  { href: "/ashes", label: "Ashes of War", icon: FlameKindling },
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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 h-screen w-64 bg-background/95 backdrop-blur-sm border-r border-border/50 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col">
          {/* Header with Close Button for Mobile */}
          <div className="flex-shrink-0 px-6 py-4 border-b border-border/50">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
                <span className="font-medieval text-lg text-golden-light">ELDEN RING</span>
              </Link>
              
              {/* Close button for mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-muted-foreground hover:text-foreground"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Menu with Scroll */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="px-3 py-4 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href} onClick={onClose}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start space-x-3 h-10 text-foreground hover:text-golden hover:bg-golden/10 transition-colors duration-200"
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 p-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center leading-tight">
              Powered by{" "}
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
    </>
  );
} 