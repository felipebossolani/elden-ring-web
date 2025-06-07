import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface WeaponsFiltersProps {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];
  loadingCategories: boolean;
  totalItems: number;
}

export function WeaponsFilters({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  loadingCategories,
  totalItems,
}: WeaponsFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search weapons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-background/50 border-border/50 focus:border-golden/50"
        />
      </div>
      
      <div className="sm:w-48">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-background/50 border-border/50 focus:ring-golden/50">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {loadingCategories ? (
              <SelectItem value="loading" disabled>Loading...</SelectItem>
            ) : (
              categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center">
        <Badge variant="outline" className="bg-muted/50 text-foreground">
          {totalItems} weapons
        </Badge>
      </div>
    </div>
  );
} 