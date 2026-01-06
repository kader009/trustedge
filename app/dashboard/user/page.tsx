'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { FaStar, FaEye, FaComment, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import {
  useGetUserReviewsQuery,
  useGetUserCommentsQuery,
} from '@/src/redux/store/api/endApi';
import { StatsSkeleton } from '@/src/components/skeletons/CommonSkeletons';

export default function UserDashboard() {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { data, isLoading } = useGetUserReviewsQuery(undefined);
  const { data: commentsData, isLoading: commentsLoading } =
    useGetUserCommentsQuery(undefined);
  const totalReviews = isLoading ? '...' : data?.stats?.total || 0;
  const totalComments = commentsLoading
    ? '...'
    : commentsData?.data?.length || 0;

  const stats = [
    {
      label: 'Total Reviews',
      value: totalReviews,
      icon: FaStar,
      color: 'bg-primary',
      href: '/dashboard/user/reviews',
    },
    {
      label: 'Profile Views',
      value: '0',
      icon: FaEye,
      color: 'bg-primary',
      href: '/dashboard/user',
    },
    {
      label: 'Comments',
      value: totalComments,
      icon: FaComment,
      color: 'bg-primary',
      href: '/dashboard/user/comments',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-500 dark:text-gray-200">
          Here&apos;s what&apos;s happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      {isLoading || commentsLoading ? (
        <StatsSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Link
                key={index}
                href={stat.href}
                className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-text-light dark:text-text-dark mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  {stat.label}
                </p>
              </Link>
            );
          })}
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            Recent Activity
          </h2>
          <FaCalendar className="text-gray-400" />
        </div>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 animate-pulse bg-gray-100 dark:bg-card-dark rounded-lg"
              ></div>
            ))}
          </div>
        ) : data?.reviews && data.reviews.length > 0 ? (
          <div className="space-y-4">
            {data.reviews.slice(0, 5).map((review: any) => (
              <div
                key={review._id}
                className="flex items-center justify-between p-4 border border-gray-100 dark:border-border-dark rounded-lg hover:bg-gray-50 dark:hover:bg-card-dark transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-text-light dark:text-white truncate">
                    {review.productId?.title || 'Untitled Product'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Rated {review.rating}/5 •{' '}
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="ml-4">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                      review.status === 'approved'
                        ? 'bg-green-100 text-green-600'
                        : review.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {review.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-200 mb-4">
              No recent activity yet
            </p>
            <Link
              href="/create-review"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Write Your First Review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
