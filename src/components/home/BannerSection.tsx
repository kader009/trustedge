import Link from 'next/link';
import {
  FaStar,
  FaClipboardList,
  FaBolt,
  FaSearch,
  FaComment,
} from 'react-icons/fa';
import { getProducts, getCategories } from '@/src/lib/api';
import { Product } from '@/src/types/ProductType';
import { Category as CategoryType } from '@/src/types/CategoryType';

function formatCount(num: number): string {
  if (num >= 10000) return `${Math.floor(num / 1000)}K+`;
  if (num >= 1000) return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K+`;
  if (num >= 100) return `${Math.floor(num / 100) * 100}+`;
  return `${num}+`;
}

const BannerSection = async () => {
  const [reviews, categories] = await Promise.all([
    getProducts() as Promise<Product[]>,
    getCategories() as Promise<CategoryType[]>,
  ]);

  const reviewCount = Array.isArray(reviews) ? reviews.length : 0;
  const categoryCount = Array.isArray(categories) ? categories.length : 0;

  // Calculate average rating from reviews
  const avgRating =
    reviewCount > 0
      ? (
          reviews.reduce(
            (sum: number, r: Product) => sum + (r.rating || 0),
            0,
          ) / reviewCount
        ).toFixed(1)
      : '0.0';
  const ratingPercent = reviewCount > 0 ? (parseFloat(avgRating) / 5) * 100 : 0;

  // Count total comments using commentCount field
  const totalComments = Array.isArray(reviews)
    ? reviews.reduce(
        (sum: number, r: Product) => sum + (r.commentCount || 0),
        0,
      )
    : 0;
  return (
    <section className="mb-8">
      <div className="flex flex-col gap-4 md:gap-5">
        {/* Top Row — 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Card 1 — Hero */}
          <div className="group relative flex flex-col gap-6 items-center justify-center p-8 md:p-10 text-center rounded-xl overflow-hidden min-h-80 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:scale-[1.02] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            <div className="flex flex-col gap-4">
              <h1 className="text-text-light dark:text-white text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl lg:text-5xl">
                Honest Reviews from Real People
              </h1>
              <h2 className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto md:text-lg">
                Find, share, and discuss the best products on the single market
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/create-review">
                <button
                  aria-label="Write a Review"
                  role="button"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                >
                  Write a Review
                </button>
              </Link>
              <Link href="/categories">
                <button
                  aria-label="Browse Categories"
                  role="button"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                >
                  Categories
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 — Platform Stats */}
          <div className="group relative flex flex-col justify-center gap-5 rounded-xl p-6 md:p-8 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:scale-[1.02] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            <h3 className="text-text-light dark:text-white text-lg font-bold">
              Platform Highlights
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaClipboardList className="text-xl" />
                </div>
                <span className="text-xl md:text-2xl font-black text-text-light dark:text-white">
                  {formatCount(reviewCount)}
                </span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Reviews
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaComment className="text-xl" />
                </div>
                <span className="text-xl md:text-2xl font-black text-text-light dark:text-white">
                  {formatCount(totalComments)}
                </span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Comments
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaStar className="text-xl" />
                </div>
                <span className="text-xl md:text-2xl font-black text-text-light dark:text-white">
                  {formatCount(categoryCount)}
                </span>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  Categories
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Card 3 — Fast & Easy */}
          <div className="group relative flex flex-col justify-center gap-4 rounded-xl p-6 md:p-8 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:scale-[1.02] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            <div className="size-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <FaBolt className="text-3xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-white text-lg font-bold">
                Fast & Easy
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Write and discover reviews in seconds with our simple interface.
              </p>
            </div>
          </div>

          {/* Card 4 — Top Rated */}
          <div className="group relative flex flex-col justify-center gap-4 rounded-xl p-6 md:p-8 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:scale-[1.02] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <FaStar className="text-3xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-white text-lg font-bold">
                {avgRating} Average
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Based on {formatCount(reviewCount)} community reviews.
              </p>
            </div>
            {/* Rating bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full"
                style={{ width: `${ratingPercent}%` }}
              />
            </div>
          </div>

          {/* Card 5 — Explore Reviews */}
          <div
            className="group relative flex flex-col justify-center gap-4 rounded-xl p-6 md:p-8 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:scale-[1.02] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]"
          >
            <div className="size-14 shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <FaSearch className="text-2xl" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-text-light dark:text-white text-lg font-bold">
                Explore Reviews
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Browse {formatCount(reviewCount)} reviews and find your next
                favorite product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
