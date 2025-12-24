export function AdminDashboardSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-card-dark p-6">
      {/* Admin Header */}
      <div className="mb-8">
        <div className="h-9 bg-white dark:bg-card-dark rounded w-64 mb-2 animate-pulse" />
        <div className="h-5 bg-white dark:bg-card-dark rounded w-80 animate-pulse" />
      </div>

      {/* Admin: 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-teal-100 dark:bg-card-dark rounded-lg mb-4 animate-pulse" />
            <div className="h-8 bg-white dark:bg-card-dark rounded w-12 mb-2 animate-pulse" />
            <div className="h-5 bg-white dark:bg-card-dark rounded w-32 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Admin: Two Column Section (Recent Users + Pending Reviews) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="h-7 bg-white dark:bg-card-dark rounded w-32 animate-pulse" />
            <div className="h-5 bg-white dark:bg-card-dark rounded w-20 animate-pulse" />
          </div>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between py-4 border-t">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white dark:bg-card-dark rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-white dark:bg-card-dark rounded w-32 animate-pulse" />
                  <div className="h-3 bg-white dark:bg-card-dark rounded w-40 animate-pulse" />
                </div>
              </div>
              <div className="h-6 bg-white dark:bg-card-dark rounded w-16 animate-pulse" />
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="h-7 bg-white dark:bg-card-dark rounded w-40 animate-pulse" />
            <div className="h-5 bg-white dark:bg-card-dark rounded w-20 animate-pulse" />
          </div>
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-white dark:bg-card-dark rounded-full mb-4 animate-pulse" />
            <div className="h-5 bg-white dark:bg-card-dark rounded w-48 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Admin: System Status */}
      <div className="bg-white dark:bg-card-dark rounded-lg p-6 shadow-sm">
        <div className="h-7 bg-white dark:bg-card-dark rounded w-36 mb-6 animate-pulse" />
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="h-5 bg-white dark:bg-card-dark rounded w-24 animate-pulse" />
              <div className="h-4 bg-white dark:bg-card-dark rounded w-40 animate-pulse" />
            </div>
          </div>
          <div className="h-6 bg-white dark:bg-card-dark rounded w-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
