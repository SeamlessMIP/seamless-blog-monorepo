
import React from "react";
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "./BlogPostCard";

interface BlogPostGridProps {
  posts: Array<{
    id: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    slug: string;
    heroImage?: string;
    subheading?: string;
  }>;
  formatDate: (date: string) => string;
  onResetFilters: () => void;
}

export function BlogPostGrid({ posts, formatDate, onResetFilters }: BlogPostGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-700">No blog posts found matching your criteria.</p>
        <Button 
          variant="outline" 
          className="mt-4 border-orange-300 text-orange-600 hover:bg-orange-50"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} formatDate={formatDate} />
      ))}
    </div>
  );
}
