import Link from 'next/link';

const BannerSection = () => {
  return (
    <section className="mb-8">
      <div className="w-full">
        <div
          className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.7) 100%),
              linear-gradient(to bottom, #356b6a 0%, #d9b896 70%, #f4d3b5 100%)
            `,
          }}
        >
          <div className="flex flex-col gap-4 z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
              Honest Reviews from Real People
            </h1>
            <h2 className="text-white/90 text-base font-normal leading-normal max-w-2xl mx-auto md:text-lg">
              Find, share, and discuss the best products on the single market
            </h2>
          </div>
          <Link href="/create-review">
            <button aria-label="Write a Review" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity z-10">
              Write a Review
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
