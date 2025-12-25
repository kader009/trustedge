export default function UserDashboardSkeleton() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <div className="h-8 sm:h-10 bg-gray-200 dark:bg-card-dark rounded w-64 sm:w-80 mb-2 sm:mb-3 animate-pulse"></div>
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-card-dark rounded w-72 sm:w-96 animate-pulse"></div>
      </div>

      {/* 3 Stats Cards Grid - Always in one row on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Total Reviews Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-teal-700 rounded-xl mb-3 sm:mb-4 animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 bg-white/30 rounded animate-pulse"></div>
          </div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 dark:bg-card-dark rounded w-24 sm:w-28 animate-pulse"></div>
        </div>

        {/* Profile Views Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-teal-700 rounded-xl mb-3 sm:mb-4 animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
          </div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 dark:bg-card-dark rounded w-24 sm:w-28 animate-pulse"></div>
        </div>

        {/* Comments Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-teal-700 rounded-xl mb-3 sm:mb-4 animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 bg-white/30 rounded animate-pulse"></div>
          </div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-200 dark:bg-card-dark rounded w-24 sm:w-28 animate-pulse"></div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm">
        {/* Section Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="h-6 sm:h-7 bg-gray-200 dark:bg-card-dark rounded w-32 sm:w-40 animate-pulse"></div>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 dark:bg-card-dark rounded animate-pulse"></div>
        </div>

        {/* Empty State Content */}
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6">
          <div className="h-5 sm:h-6 bg-gray-200 dark:bg-card-dark rounded w-48 sm:w-56 mb-5 sm:mb-6 animate-pulse"></div>
          <div className="h-11 sm:h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg w-48 sm:w-56 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}