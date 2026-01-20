export default function PopularPremiumReviewsSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-3 border border-transparent rounded-lg dark:border-gray-700"
        >
          {/* Image Skeleton */}
          <div className="w-16 h-16 bg-gray-200 dark:bg-card-dark rounded-lg animate-pulse shrink-0" />

          {/* Content Skeleton */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-card-dark rounded animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-200 dark:bg-card-dark rounded-full animate-pulse" />
              <div className="h-4 w-12 bg-gray-200 dark:bg-card-dark rounded animate-pulse" />
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="text-right space-y-1">
            <div className="h-5 w-12 bg-gray-200 dark:bg-card-dark rounded animate-pulse ml-auto" />
            <div className="h-3 w-8 bg-gray-200 dark:bg-card-dark rounded animate-pulse ml-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}
