export default function CategoriesPageSkeleton() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-6 animate-pulse">
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-border-light dark:border-border-dark">
                <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-48"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-40"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-800"></div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
