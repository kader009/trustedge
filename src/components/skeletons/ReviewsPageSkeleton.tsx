import { CardSkeleton } from './CommonSkeletons';

export default function ReviewsPageSkeleton() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-6 animate-pulse">
          <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-4 animate-pulse">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"
                  ></div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Grid Skeleton */}
          <main className="lg:col-span-3">
            <div className="mb-6 h-4 bg-gray-200 dark:bg-gray-800 rounded w-32 animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
