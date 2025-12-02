import { sanityImageBuilder } from "@/lib/sanityImageBuilder";
import { client } from "@/sanity/client";
import { Post } from "@/types/posts";
import { formatDate } from "@/utils/dateUtils";
import { PortableText } from "next-sanity";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<Post>(POST_QUERY, await params, options);

  const thumbnailUrl = post.thumbnail
      ? sanityImageBuilder(post.thumbnail)?.url()
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