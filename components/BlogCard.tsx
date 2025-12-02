import Image from "next/image";
import Link from "next/link";
import { imageUrlBuilder } from "@/lib/sanity/ImageUrlBuilder";
import { truncateText } from "@/utils/textUtils";
import { formatDate } from "@/utils/dateUtils";
import { Post } from "@/types/posts";

type BlogCardProps =  {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
   const thumbnailUrl = post.thumbnail
    ? imageUrlBuilder(post.thumbnail)?.url()
    : "/images/common/thumbnail-placeholder.jpg";

  return (
  <Link href={`/${post.slug.current}`}>
    <section className="flex flex-col gap-6">
      <div className="relative h-53.25 w-full md:h-53.25 lg:h-55 xl:h-53.25">
        <Image
          src={thumbnailUrl || "/images/common/thumbnail-placeholder.jpg"}
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="text-white">
        <div className="flex items-center gap-3 opacity-60 xl:text-sm">
          <span className="uppercase">{post.category}</span>
          <span>{formatDate(post.postedDate)}</span>
        </div>

        <h1 className="mt-3 text-2xl leading-9.5">{post.title}</h1>

        <p className="mt-3 text-base leading-7 opacity-60">
          {truncateText(post.content)}
        </p>
      </div>
    </section>
</Link>
  );
}
