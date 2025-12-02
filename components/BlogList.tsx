import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";
import { getPosts } from "@/lib/sanity/posts";

export default async  function BlogList() {
  const posts = await getPosts()
  
  return (
    <section className="py-12 flex flex-col gap-16">

    <FeaturedBlogCard post={posts[0]}/>

    <section className="grid gap-x-6 gap-y-16 px-0 md:grid-cols-2 xl:grid-cols-3">
       {posts.slice(1).map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </section>

    </section>
   
  );
}