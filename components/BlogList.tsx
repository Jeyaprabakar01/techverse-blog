import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <section className="grid gap-x-6 gap-y-16 px-0 pt-16 pb-12 md:grid-cols-2 xl:grid-cols-3">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
}
