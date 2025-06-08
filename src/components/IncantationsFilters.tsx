import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface IncantationsFiltersProps {
  search: string;
  setSearch: (search: string) => void;
  totalItems: number;
}

export function IncantationsFilters({ search, setSearch, totalItems }: IncantationsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search incantations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-background/50 border-border/50 focus:border-golden/50"
        />
      </div>
      <div className="flex items-center">
        <Badge variant="outline" className="bg-muted/50 text-foreground">
          {totalItems} incantations
        </Badge>
      </div>
    </div>
  );
}
