import Link from 'next/link';

const BannerSection = () => {
  return (
    <section className="mb-16">
      <div className="w-full">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
          data-alt="Abstract gradient background with soft teal and sand colors"
          style={{
            backgroundImage: `linear-gradient(rgba(47, 79, 79, 0.4) 0%, rgba(47, 79, 79, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC91Fgii31jjf_Wyu9n8-UvfUcryUrGRAZ956T08Lnyny4MIOqeM_0AGc7M8k0SU08wVreS8KpeWFIVklTcB4CZv4YM00xL6_lUCEs-dkYV1OkAx3LmWpwTNt6-z4aCwWGdsusOVNqGjmP3Ps2AUB50Ci3pH-F19bKNt3vY_EZ0aQsit8WedDJZJX7-tfoNk5RZCkcNmdeu1EsHmbikxsbqKE-B_2hBwghiqDv2ySPr9_Rp33FXSa9-JM43qIcfEPXfTlL6ab-KQ9c")`,
          }}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
              Honest Reviews from Real People.
            </h1>
            <h2 className="text-white/90 text-base font-normal leading-normal max-w-2xl mx-auto md:text-lg">
              Find, share, and discuss the best products on the market.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <Link href="/create-review">Write a Review</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
