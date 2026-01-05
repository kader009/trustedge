'use client';
import {
  useGetallReviewQuery,
  useGetPremiumReviewsQuery,
  useGetPendingReviewsQuery,
  useGetAllUsersQuery,
} from '@/src/redux/store/api/endApi';
import {
  FaChartLine,
  FaDollarSign,
  FaStar,
  FaUsers,
  FaFileAlt,
  FaCrown,
} from 'react-icons/fa';
import Image from 'next/image';
import { IReview } from '@/src/types/common';

export default function AnalyticsPage() {
  const { data: allReviewsData } = useGetallReviewQuery(undefined);
  const { data: premiumReviewsData } = useGetPremiumReviewsQuery(undefined);
  const { data: pendingReviewsData } = useGetPendingReviewsQuery(undefined);
  const { data: usersData } = useGetAllUsersQuery(undefined);

  const reviews = allReviewsData?.data || [];
  const premiumReviews = premiumReviewsData?.data || [];
  const pendingReviews = pendingReviewsData?.data || [];
  const users = usersData?.data || [];

  // Calculate Real Earnings based on review.price
  const estimatedValue = premiumReviews.reduce(
    (acc: number, review: IReview) => {
      return acc + (Number(review.price) || 0); // Use real price or 0
    },
    0
  );

  // Popular Premium Reviews (Sorted by rating)
  const popularPremium = [...premiumReviews]
    .sort((a: IReview, b: IReview) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  const getCategoryLabel = (cat: unknown) =>
    typeof cat === 'string'
      ? cat
      : cat && typeof cat === 'object' && 'name' in (cat as object)
      ? (cat as { name?: string }).name
      : undefined;

  return (
    <div className="flex flex-1 flex-col px-2 lg:px-4 py-8 max-w-full mx-auto w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-text-light dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Overview of platform performance, content stats, and premium
          engagement.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FaUsers className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-text-light/60 dark:text-gray-400">
              Total Users
            </span>
          </div>
          <p className="text-3xl font-bold text-text-light dark:text-white">
            {users.length}
          </p>
          <div className="mt-2 text-sm text-primary flex items-center gap-1">
            <FaChartLine />
            <span>Active Community</span>
          </div>
        </div>

        {/* Total Reviews */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FaFileAlt className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-text-light/60 dark:text-gray-400">
              Published Reviews
            </span>
          </div>
          <p className="text-3xl font-bold text-text-light dark:text-white">
            {reviews.length}
          </p>
          <div className="mt-2 text-sm text-text-light/60 dark:text-gray-400">
            {pendingReviews.length} pending approval
          </div>
        </div>

        {/* Premium Content */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FaCrown className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-text-light/60 dark:text-gray-400">
              Premium Reviews
            </span>
          </div>
          <p className="text-3xl font-bold text-text-light dark:text-white">
            {premiumReviews.length}
          </p>
          <div className="mt-2 text-sm text-primary">High quality content</div>
        </div>

        {/* Potential Value */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FaDollarSign className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-text-light/60 dark:text-gray-400">
              Content Value
            </span>
          </div>
          <p className="text-3xl font-bold text-text-light dark:text-text-dark">
            ${estimatedValue}
          </p>
          <div className="mt-2 text-xs text-text-light/60 dark:text-gray-500">
            *Total value of potential premium unlocks
          </div>
        </div>
      </div>

      {/* Charts / Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Premium Reviews */}
        <div className="lg:col-span-2 bg-white dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-xl font-bold text-text-light dark:text-white mb-6">
            Popular Premium Reviews
          </h2>
          <div className="space-y-4">
            {popularPremium.length > 0 ? (
              popularPremium.map((review: IReview) => (
                <div
                  key={review._id}
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gray-200 dark:bg-card-dark rounded-lg overflow-hidden shrink-0 relative">
                    {review.images?.[0] ? (
                      <Image
                        src={review.images[0]}
                        alt={review.title || ''}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        No img
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-light dark:text-white truncate">
                      {review.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-card-dark rounded-full text-text-light/80 dark:text-gray-300">
                        {getCategoryLabel(review.category) || 'Category'}
                      </span>
                      <div className="flex items-center text-primary text-sm">
                        <FaStar className="mr-1" /> {review.rating || 0}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-primary">
                      ${review.price || 0}
                    </span>
                    <span className="text-xs text-text-light/60 dark:text-gray-400">
                      Price
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No premium reviews found.
              </div>
            )}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-xl font-bold text-text-light dark:text-white mb-6">
            Platform Health
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-light/60 dark:text-gray-400">
                  System Status
                </span>
                <span className="text-primary font-medium">Operational</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-card-dark rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-light/60 dark:text-gray-400">
                  Review Approval Rate
                </span>
                <span className="text-primary font-medium">
                  {reviews.length > 0
                    ? Math.round(
                        (reviews.length /
                          (reviews.length + pendingReviews.length)) *
                          100
                      )
                    : 0}
                  %
                </span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-card-dark rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{
                    width: `${
                      reviews.length > 0
                        ? (reviews.length /
                            (reviews.length + pendingReviews.length)) *
                          100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-text-light dark:text-white mb-2">
              Need Help?
            </h4>
            <p className="text-sm text-text-light/60 dark:text-gray-400">
              Check the developer documentation for API usage and integration
              guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
