export default function Loading() {
  return (
    <section className="mx-auto flex flex-col gap-6 py-24 xl:w-4/5 animate-pulse">
      <div className="flex items-center justify-center gap-3 opacity-30">
        <div className="h-4 w-24 rounded bg-gray-700"></div>
        <div className="h-4 w-20 rounded bg-gray-700"></div>
      </div>

      <div className="mt-3 flex justify-center">
        <div className="h-7 w-3/4 rounded bg-gray-700"></div>
      </div>

      <div className="relative mt-5 h-64 w-full rounded-lg bg-gray-700 md:h-96 lg:h-110"></div>

      <div className="mt-4 flex flex-col gap-3 px-2 md:px-14 xl:px-20">
        <div className="h-5 w-full rounded bg-gray-700"></div>
        <div className="h-5 w-5/6 rounded bg-gray-700"></div>
        <div className="h-5 w-4/5 rounded bg-gray-700"></div>
        <div className="h-5 w-full rounded bg-gray-700"></div>
        <div className="h-5 w-3/4 rounded bg-gray-700"></div>
      </div>
    </section>
  );
}