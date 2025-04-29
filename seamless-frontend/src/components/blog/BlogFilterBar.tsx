
import React from "react";
import { Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface BlogFilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  categories: string[];
}

export function BlogFilterBar({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  categories
}: BlogFilterBarProps) {
  return (
    <section className="bg-white rounded-lg shadow-md p-4 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-orange-600" />
          <span className="text-gray-700 font-medium">Filter by:</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <div className="w-full md:w-64">
            <Select 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="border-orange-200 focus:ring-orange-200">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <ToggleGroup 
            type="single" 
            value={sortOrder}
            onValueChange={(value) => value && setSortOrder(value)}
            className="border rounded-md"
          >
            <ToggleGroupItem 
              value="newest" 
              className="px-3 py-2 text-sm"
              aria-label="Sort by newest"
            >
              Newest
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="oldest" 
              className="px-3 py-2 text-sm"
              aria-label="Sort by oldest"
            >
              Oldest
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  );
}
