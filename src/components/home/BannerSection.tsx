import Link from 'next/link';

const BannerSection = () => {
  return (
    <section className="mb-8">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
        style={{
          backgroundImage: `
              linear-gradient(rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.7) 100%),
              linear-gradient(to bottom, #356b6a 0%, #d9b896 70%, #f4d3b5 100%)
            `,
        }}
      >
        <div className="flex flex-col gap-4 mt-2">
          <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
            Honest Reviews from Real People
          </h1>
          <h2 className="text-white/90 text-base font-normal leading-normal max-w-2xl mx-auto md:text-lg">
            Find, share, and discuss the best products on the single market
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <Link href="/create-review">
            <button
              aria-label="Write a Review"
              role="button"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              Write a Review
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
