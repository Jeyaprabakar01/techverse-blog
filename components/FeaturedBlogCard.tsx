import { sanityImageBuilder } from "@/lib/sanityImageBuilder";
import { Post } from "@/types/posts";
import { formatDate } from "@/utils/dateUtils";
import { truncateText } from "@/utils/textUtils";
import Image from "next/image";
import Link from "next/link";

type FeaturedBlogCardProps = {
  post: Post;
};

export default function FeaturedBlogCard({post}: FeaturedBlogCardProps) {

    const thumbnailUrl = post.thumbnail
    ? sanityImageBuilder(post.thumbnail)?.url()
    : "/images/common/thumbnail-placeholder.jpg";

  return (
    <Link href={`/${post.slug.current}`}>
    <section className="flex flex-col items-center gap-6 md:flex-row">
      <div className="relative h-57.5 w-full md:h-65 md:w-3/5 lg:h-75 xl:h-97.25">
        <Image
          src={thumbnailUrl || "/images/common/thumbnail-placeholder.jpg"}
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="text-white md:w-2/5">
        <div className="flex items-center gap-3 opacity-60 xl:text-sm">
            <span className="uppercase">{post.category}</span>
            <span>{formatDate(post.postedDate)}</span>
        </div>

        <h1 className="mt-3 text-2xl leading-9.5">
         {post.title}
        </h1>

        <p className="mt-3 text-base leading-7 opacity-60">
         {truncateText(post.content)}
        </p>
      </div>
    </section>
  </Link>
  );
}
