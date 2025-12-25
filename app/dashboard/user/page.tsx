'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { FaStar, FaEye, FaComment, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import {
  useGetUserReviewsQuery,
  useGetUserCommentsQuery,
} from '@/src/redux/store/api/endApi';

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

      {/* Recent Activity */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            Recent Activity
          </h2>
          <FaCalendar className="text-gray-400" />
        </div>
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
      </div>
    </div>
  );
}
