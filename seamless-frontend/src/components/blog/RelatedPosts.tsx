
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type RelatedPost = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  published_at: string;
};

type RelatedPostsProps = {
  currentPostId: string;
  category: string;
  posts: RelatedPost[];
};

export function RelatedPosts({ currentPostId, category, posts }: RelatedPostsProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="bg-gray-50 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-playfair">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <CardHeader>
                <span className="text-sm font-medium text-orange-600 mb-2">
                  {post.category}
                </span>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.published_at)}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
