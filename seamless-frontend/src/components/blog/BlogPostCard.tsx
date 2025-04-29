
import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "@/components/ui/image";

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    category: string;
    date: string;
    excerpt: string;
    slug: string;
    heroImage?: string;
    subheading?: string;
  };
  formatDate: (date: string) => string;
}

export function BlogPostCard({ post, formatDate }: BlogPostCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      key={post.id} 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      {post.heroImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-orange-100 text-orange-800 text-xs font-medium rounded px-2.5 py-0.5">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(post.date)}
          </div>
        </div>
        <CardTitle className="text-xl font-bold hover:text-orange-600 transition-colors">
          {post.title}
        </CardTitle>
        {post.subheading && (
          <p className="text-sm text-gray-600 mt-1">{post.subheading}</p>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-700">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="text-orange-600 p-0 hover:text-orange-700 hover:bg-transparent flex items-center"
          onClick={() => navigate(`/blog/${post.slug}`)}
        >
          Read More
          <Tag className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
