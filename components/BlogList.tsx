import BlogCard from "./BlogCard";
import { client } from "@/sanity/client";
import { Post } from "@/types/posts";
import FeaturedBlogCard from "./FeaturedBlogCard";

const POSTS_QUERY = `*[_type == "post"] | order(postedDate desc)`;

const options = { next: { revalidate: 30 } };

export default async  function BlogList() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
  
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