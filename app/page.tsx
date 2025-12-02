import BlogList from "@/components/BlogList";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";

export default function Home() {
  return (
    <>
      <main>
        <FeaturedBlogCard />
        <BlogList />
      </main>
    </>
  );
}

