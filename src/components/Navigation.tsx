import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-medieval text-2xl text-golden-light">ELDEN RING</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="/classes">
                <Button variant="ghost" className="text-foreground hover:text-golden hover:bg-golden/10">
                  Classes
                </Button>
              </Link>
              <Link href="/weapons">
                <Button variant="ghost" className="text-foreground hover:text-golden hover:bg-golden/10">
                  Weapons
                </Button>
              </Link>
              <Link href="/creatures">
                <Button variant="ghost" className="text-foreground hover:text-golden hover:bg-golden/10">
                  Creatures
                </Button>
              </Link>
              <Button variant="ghost" disabled className="text-muted-foreground">
                Bosses
              </Button>
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center border-l border-border/30 pl-4 ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 