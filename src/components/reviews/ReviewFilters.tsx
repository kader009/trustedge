'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { ReviewFiltersProps } from '@/src/types/reviewFilterProps';

export default function ReviewFilters({
  categories,
  selectedCategory,
  selectedRating,
  selectedSort,
}: ReviewFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Reset to page 1 when filters change
    params.set('page', '1');

    router.push(`/reviews?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/reviews');
  };

  const hasActiveFilters = selectedCategory || selectedRating || selectedSort;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full mb-4 flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-border-light dark:border-border-dark px-4 py-3 rounded-lg font-semibold text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <FaFilter className="w-4 h-4" />
        Filters{' '}
        {hasActiveFilters && `(${Object.keys(searchParams.toString()).length})`}
      </button>

      {/* Filters Panel */}
      <div
        className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6 sticky top-4
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-text-light dark:text-text-dark flex items-center gap-2">
            <FaFilter className="w-5 h-5 text-primary" />
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              <FaTimes className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>

        {/* Sort By */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            value={selectedSort || 'newest'}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="rating-high">Highest Rating</option>
            <option value="rating-low">Lowest Rating</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
              <input
                type="radio"
                name="category"
                checked={!selectedCategory}
                onChange={() => handleFilterChange('category', '')}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                All Categories
              </span>
            </label>
            {categories.map((category) => (
              <label
                key={category._id}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category._id}
                  onChange={() => handleFilterChange('category', category._id)}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {category.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Minimum Rating
          </label>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating.toString()}
                  onChange={() =>
                    handleFilterChange('rating', rating.toString())
                  }
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <span key={i} className="text-gray-300 dark:text-gray-600">
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    & up
                  </span>
                </div>
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
              <input
                type="radio"
                name="rating"
                checked={!selectedRating}
                onChange={() => handleFilterChange('rating', '')}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                All Ratings
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
