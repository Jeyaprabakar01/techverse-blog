import Image from "next/image";

export default function SingleBlog() {
  return (
    <section className="mx-auto flex flex-col gap-6 py-24 xl:w-4/5">
      <div className="text-white">
        <div className="flex items-center justify-center gap-3 opacity-60 xl:text-sm">
          <span>UI DESIGN</span>
          <span>July 2, 2021</span>
        </div>

        <h1 className="mt-3 text-center text-2xl leading-9.5">
          Understanding color theory: the color wheel and finding complementary
          colors
        </h1>
      </div>

      <div className="relative mt-3 h-53.25 w-full md:h-102.5 lg:h-115 xl:mt-5 xl:h-130">
        <Image
          src="/images/common/thumbnail-placeholder.jpg"
          className="rounded-[0.625rem] object-cover"
          alt="thumbnail-placeholder"
          fill={true}
        />
      </div>

      <div className="mt-4 flex flex-col gap-4 px-2 text-xl leading-7 text-white md:px-14 xl:mt-6 xl:px-20">
        <p>
          Male sixth sea it a. Brought was signs female darkness signs form
          cattle land grass whose from subdue also they&apos;re their brought
          seas isn&apos;t, to day from bearing grass third midst after beginning
          man which you&apos;re. Dry, gathering beginning given made them
          evening.
        </p>

        <p>
          Have. Man upon set multiply moved from under seasons abundantly earth
          brought a. They&apos;re open moved years saw isn&apos;t morning
          darkness. Over, waters, every let wherein great were fifth saw was
          lights very our place won&apos;t and him Third fourth moving him
          whales behold. Beast second stars lights great was don&apos;t green
          give subdue his. Third given made created, they&apos;re forth god
          replenish have whales first can&apos;t light was. Herb you&apos;ll
          them beast kind divided. Were beginning fly air multiply god Yielding
          sea don&apos;t were forth.
        </p>
        <p>
          Lights dry. Thing, likeness, forth shall replenish upon abundantly our
          green. Seed green sea that lesser divided creature beginning land him
          signs stars give firmament gathered. Wherein there their morning a he
          grass. Don&apos;t made moving for them bring creature us you&apos;ll
          tree second deep good unto good may. Us yielding.
        </p>
      </div>
    </section>
  );
}
