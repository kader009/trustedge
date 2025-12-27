'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FilterSidebarClientProps } from '@/src/types/filterSidebarClient';

export default function FilterSidebarClient({
  categories,
}: FilterSidebarClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Initialize state from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedCategories(categoryParam.split(','));
    } else {
      setSelectedCategories([]);
    }

    const ratingParam = searchParams.get('rating');
    if (ratingParam) {
      setSelectedRating(Number(ratingParam));
    } else {
      setSelectedRating(null);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryName)) {
        return prev.filter((c) => c !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating((prev) => (prev === rating ? null : rating));
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','));
    } else {
      params.delete('category');
    }

    if (selectedRating) {
      params.set('rating', selectedRating.toString());
    } else {
      params.delete('rating');
    }

    router.push(`/categories?${params.toString()}`);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedRating(null);
    router.push('/categories');
  };

  return (
    <aside className="w-full lg:w-64 xl:w-72 shrink-0">
      <div className="sticky top-24 space-y-6">
        <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
          Filters
        </h3>

        {/* Categories Filter */}
        <div className="space-y-3">
          <h4 className="font-semibold text-text-light dark:text-text-dark">
            Categories
          </h4>
          <div className="space-y-2 text-sm">
            {categories.length > 0 ? (
              categories.map((category) => (
                <label
                  key={category._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    className="form-checkbox rounded text-primary focus:ring-primary/50"
                    type="checkbox"
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  <span>{category.name}</span>
                </label>
              ))
            ) : (
              <p className="text-sm text-neutral-500">
                No categories available
              </p>
            )}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="space-y-3">
          <h4 className="font-semibold text-text-light dark:text-white">
            Filter by Rating
          </h4>
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`flex items-center gap-1 w-full text-left p-1 rounded hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 ${
                  selectedRating === rating
                    ? 'bg-primary/20 dark:bg-primary/30'
                    : ''
                }`}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 ${
                      i < rating
                        ? 'text-accent'
                        : 'text-neutral-300 dark:text-neutral-500'
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="text-sm ml-1">
                  {rating === 5 ? '5 stars' : `${rating} stars & up`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <button
            onClick={applyFilters}
            className="flex-1 min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em]"
          >
            Apply Filters
          </button>
          <button
            onClick={resetFilters}
            className="flex-1 min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-neutral-200 dark:bg-neutral-800 text-text-light dark:text-white text-sm font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
}
