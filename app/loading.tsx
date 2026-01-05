export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background-dark w-full max-w-[100vw] overflow-x-hidden">
      <div className="bg-white dark:bg-card-dark border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="h-6 sm:h-8 w-24 sm:w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="hidden md:flex items-center gap-6">
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>

            {/* User menu skeleton */}
            <div className="h-8 sm:h-9 w-20 sm:w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header skeleton */}
        <div className="mb-6 sm:mb-8">
          <div className="h-8 sm:h-10 w-48 sm:w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2 sm:mb-3"></div>
          <div className="h-4 sm:h-5 w-full max-w-xs sm:max-w-md bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-6 sm:h-8 w-12 sm:w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1 sm:mb-2"></div>
                  <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Cards Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6"
            >
              <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="h-5 sm:h-6 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                  <div className="h-3 sm:h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 sm:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 sm:h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white dark:bg-card-dark rounded-full shadow-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          <div className="absolute top-0 left-0 w-full h-full border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
