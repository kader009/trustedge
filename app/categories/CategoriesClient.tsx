'use client';

import { useState } from 'react';
import FilterSidebar from '@/src/components/product/FilterSidebar';
import Pagination from '@/src/components/product/Pagination';
import ReviewCard from '@/src/components/product/ReviewCard';

interface CategoriesClientProps {
  reviews: any[];
}

export default function CategoriesClient({ reviews }: CategoriesClientProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar />

          <div className="flex-1">
            {/* Page Heading and Search */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <p className="text-text-light dark:text-white text-4xl font-black tracking-[-0.033em] min-w-72">
                All Product Reviews
              </p>
              <div className="w-full md:max-w-xs">
                <label className="flex flex-col h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-neutral-300 dark:text-neutral-500 flex bg-neutral-100 dark:bg-neutral-900 items-center justify-center pl-4 rounded-l-lg border-y border-l border-neutral-200/80 dark:border-neutral-800/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-neutral-800 dark:text-neutral-100 focus:outline-0  border-y border-r border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 h-full placeholder:text-neutral-300 dark:placeholder:text-neutral-500 pl-2 text-base font-normal leading-normal"
                      placeholder="Search reviews..."
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center gap-2 px-4 py-3 mb-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80">
              <div className="flex gap-2 items-center">
                <p className="text-sm text-neutral-300 dark:text-neutral-500">
                  Sort by:
                </p>
                <select className="form-select bg-transparent border-0 rounded-lg p-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary/50">
                  <option>Most Popular</option>
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'text-neutral-800 dark:text-neutral-100 bg-primary/20 dark:bg-primary/30'
                      : 'text-neutral-300 dark:text-neutral-500 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'text-neutral-800 dark:text-neutral-100 bg-primary/20 dark:bg-primary/30'
                      : 'text-neutral-300 dark:text-neutral-500 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}
