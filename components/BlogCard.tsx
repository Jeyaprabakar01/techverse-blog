import Image from "next/image";

export default function BlogCard() {
  return (
    <section className="flex flex-col gap-6">
      <div className="relative h-53.25 w-full md:h-53.25 lg:h-55 xl:h-53.25">
        <Image
          src="/images/common/thumbnail-placeholder.jpg"
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="text-white">
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
