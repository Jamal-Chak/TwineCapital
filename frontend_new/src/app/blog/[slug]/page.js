import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import BlogPostContent from "./BlogPostContent";

// Generate static paths for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
        return {
            title: "Post Not Found | TwineCapital Blog",
        };
    }
    
    return {
        title: `${post.title} | TwineCapital Blog`,
        description: post.excerpt,
        keywords: [post.category, "TwineCapital", "business", "accounting", "fintech", "AI"],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            tags: [post.category],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post) {
        notFound();
    }
    
    return <BlogPostContent post={post} />;
}
