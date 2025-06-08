import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-64 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
} 
