import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "lucide-react";

interface NavigationProps {
  onMenuClick: () => void;
}

export function Navigation({ onMenuClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 lg:left-64 right-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-foreground hover:text-golden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Spacer for desktop */}
          <div className="hidden lg:block" />
          
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 
