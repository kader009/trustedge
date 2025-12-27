import { MdVerifiedUser, MdThumbUp, MdStars } from 'react-icons/md';

const WhyChooseUs = () => {
  return (
    <div className="w-full mb-8">
      <div>
        <div className="flex flex-wrap flex-col gap-4 mb-4 text-center md:text-left">
          <h1 className=" text-2xl md:text-3xl font-bold leading-tight tracking-tight">
            Why Trust Us?
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            We prioritize transparency and authenticity in every review posted
            on our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6">
          <div className="group relative flex flex-col gap-6 rounded-lg p-8 hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(73,230,25,0.1)] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MdVerifiedUser className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-text-light text-xl font-bold dark:text-white">
                Verified Reviews
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Trust authentic experiences from verified purchasers only. We
                manually vet high-impact reviews.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-lg p-8 hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(73,230,25,0.1)] bg-white dark:bg-card-dark">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MdThumbUp className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-text-light text-xl font-bold dark:text-white">
                Community Voting
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Help others decide by voting on the most helpful reviews.
                Quality rises to the top.
              </p>
            </div>
          </div>
          <div className="group relative flex flex-col gap-6 rounded-lg p-8 hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(73,230,25,0.1)] bg-white dark:bg-card-dark">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MdStars className="text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-text-light text-xl font-bold dark:text-white">
                Premium Insights
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Access expert reviews and deep-dive analysis on top products
                from industry leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
