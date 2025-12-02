import Image from "next/image";

export default function FeaturedBlogCard() {
  return (
    <section className="flex flex-col items-center gap-6 pt-12 md:flex-row">
      <div className="relative h-57.5 w-full md:h-65 md:w-3/5 lg:h-75 xl:h-97.25">
        <Image
          src="/images/common/thumbnail-placeholder.jpg"
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="text-white md:w-2/5">
        <div className="flex items-center gap-3 opacity-60 xl:text-sm">
          <span>UI DESIGN</span>
          <span>July 2, 2021</span>
        </div>

        <h1 className="mt-3 text-2xl leading-9.5">
          Understanding color theory: the color wheel and finding complementary
          colors
        </h1>

        <p className="mt-3 text-base leading-7 opacity-60">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
      </div>
    </section>
  );
}
