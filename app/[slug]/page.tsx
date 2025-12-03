import Image from "next/image";
import { PortableText } from "next-sanity";
import { getPost, getPosts } from "@/lib/sanity/posts";
import { imageUrlBuilder } from "@/lib/sanity/ImageUrlBuilder";
import { formatDate } from "@/utils/dateUtils";

export async function generateStaticParams() {

  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const thumbnailUrl = post.thumbnail
      ? imageUrlBuilder(post.thumbnail)?.url()
      : "/images/common/thumbnail-placeholder.jpg";

  return (
    <section className="mx-auto flex flex-col gap-6 py-24 xl:w-4/5">
      <div className="text-white">
        <div className="flex items-center justify-center gap-3 opacity-60 xl:text-sm">
          <span className="uppercase">{post.category}</span>
          <span>{formatDate(post.postedDate)}</span>
        </div>

        <h1 className="mt-3 text-center text-2xl leading-9.5">
          {post.title}
        </h1>
      </div>

      <div className="relative mt-3 h-53.25 w-full md:h-102.5 lg:h-115 xl:mt-5 xl:h-130">
        <Image
          src={thumbnailUrl || "/images/common/thumbnail-placeholder.jpg"}
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="mt-4 px-2 flex flex-col gap-2 text-xl leading-7 text-white md:px-14 xl:mt-6 xl:px-20">
        <PortableText value={post.content} /> 
      </div>

    </section>
  );
}