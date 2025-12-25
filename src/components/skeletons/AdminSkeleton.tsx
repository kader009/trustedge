export default function AdminDashboardSkeleton() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <div className="h-8 sm:h-10 bg-gray-300 dark:bg-card-dark rounded w-56 sm:w-64 mb-2 sm:mb-3 animate-pulse"></div>
        <div className="h-5 sm:h-6 bg-gray-200 dark:bg-card-dark rounded w-64 sm:w-80 animate-pulse"></div>
      </div>

      {/* 4 Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
        {/* Total Users Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-teal-700 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 animate-pulse"></div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-8 sm:w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-300 dark:bg-gray-600 rounded w-20 sm:w-24 animate-pulse"></div>
        </div>

        {/* Total Reviews Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-card-dark rounded-xl sm:rounded-2xl mb-4 sm:mb-5 animate-pulse"></div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-10 sm:w-12 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-300 dark:bg-card-dark rounded w-24 sm:w-28 animate-pulse"></div>
        </div>

        {/* Pending Reviews Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-card-dark rounded-xl sm:rounded-2xl mb-4 sm:mb-5 animate-pulse"></div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-8 sm:w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-300 dark:bg-card-dark rounded w-28 sm:w-32 animate-pulse"></div>
        </div>

        {/* Pending Comments Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-600 dark:bg-card-dark rounded-xl sm:rounded-2xl mb-4 sm:mb-5 animate-pulse"></div>
          <div className="h-8 sm:h-9 bg-gray-200 dark:bg-card-dark rounded w-8 sm:w-10 mb-2 sm:mb-3 animate-pulse"></div>
          <div className="h-4 sm:h-5 bg-gray-300 dark:bg-card-dark rounded w-32 sm:w-36 animate-pulse"></div>
        </div>
      </div>

      {/* Two Column Section - Recent Users & Pending Reviews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
        {/* Recent Users Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <div className="h-6 sm:h-7 bg-gray-300 dark:bg-card-dark rounded w-28 sm:w-32 animate-pulse"></div>
            <div className="h-5 bg-teal-600/20 dark:bg-card-dark rounded w-20 sm:w-24 animate-pulse"></div>
          </div>

          {/* User List Items */}
          <div className="space-y-4 sm:space-y-5">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4 flex-1">
                  {/* Avatar */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gray-200 dark:bg-card-dark rounded-full shrink-0 animate-pulse"></div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="h-4 sm:h-5 bg-gray-300 dark:bg-card-dark rounded w-28 sm:w-32 mb-2 animate-pulse"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 dark:bg-card-dark rounded w-36 sm:w-40 animate-pulse"></div>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="h-6 sm:h-7 bg-gray-200 dark:bg-card-dark rounded-full w-14 sm:w-16 shrink-0 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Reviews Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <div className="h-6 sm:h-7 bg-gray-300 dark:bg-card-dark rounded w-32 sm:w-40 animate-pulse"></div>
            <div className="h-5 bg-teal-600/20 dark:bg-card-dark rounded w-20 sm:w-24 animate-pulse"></div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-12 sm:py-16">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 dark:bg-card-dark rounded-full mb-4 sm:mb-5 animate-pulse"></div>
            <div className="h-5 sm:h-6 bg-gray-200 dark:bg-card-dark rounded w-40 sm:w-48 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* System Status Card */}
      <div className="bg-white dark:bg-card-dark rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
        {/* Header */}
        <div className="h-6 sm:h-7 bg-gray-300 dark:bg-card-dark rounded w-28 sm:w-36 mb-5 sm:mb-6 animate-pulse"></div>

        {/* Status Item */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-teal-50/50 dark:bg-card-dark rounded-xl">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Status Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-teal-600 dark:bg-card-dark rounded-full shrink-0 animate-pulse"></div>

            {/* Status Info */}
            <div>
              <div className="h-5 sm:h-6 bg-gray-300 dark:bg-card-dark rounded w-20 sm:w-24 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-card-dark rounded w-36 sm:w-44 animate-pulse"></div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="h-6 sm:h-7 bg-teal-600/20 dark:bg-card-dark rounded-full w-14 sm:w-16 shrink-0 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
