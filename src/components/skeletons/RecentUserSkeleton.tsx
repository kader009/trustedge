export default function RecentUserSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {/* Header Skeleton */}
      <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>

      {/* Card Skeleton */}
      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="animate-pulse bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
      <div className="h-48 bg-gray-200 dark:bg-gray-800"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-8">
        <div className="flex items-center gap-6">
          <div className="w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
          <div className="flex-1 space-y-3">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark rounded-lg p-4 space-y-3"
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-lg shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
              <div className="flex gap-4">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-12"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
