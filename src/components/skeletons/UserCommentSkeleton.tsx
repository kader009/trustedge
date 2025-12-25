export default function UserCommentSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 animate-pulse bg-white dark:bg-card-dark"
        >
          {/* User Info Header Skeleton */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-3 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              {/* Review Title & Date Skeleton */}
              <div className="flex items-center gap-2 mb-2">
                <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>

              {/* Comment Text Skeleton */}
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
