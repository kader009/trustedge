'use client';

import { FaCheckCircle, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import StatsCard from '@/src/components/dashboard/StatsCard';
import { adminStats } from '@/src/data/adminStats';
import {
  useGetallReviewQuery,
  useGetAllUsersQuery,
  useGetPendingReviewsQuery,
  useGetAllCommentsQuery,
} from '@/src/redux/store/api/endApi';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

interface Review {
  _id: string;
  title: string;
  user: {
    name: string;
    avatar?: string;
    image?: string;
  };
  rating: number;
  description: string;
}

export default function AdminDashboard() {
  const { data: usersData } = useGetAllUsersQuery(undefined);
  const users = usersData?.data || [];
  const { data: reviewData } = useGetallReviewQuery(undefined);
  const { data: pendingReview } = useGetPendingReviewsQuery(undefined);
  const { data: commentsData } = useGetAllCommentsQuery({
    page: 1,
    limit: 100,
  });
  const reviews = reviewData?.data || [];
  const pendingReviewsData =
    pendingReview?.data?.reviews ||
    pendingReview?.reviews ||
    (Array.isArray(pendingReview?.data) ? pendingReview.data : []);
  const comments = commentsData?.data || [];

  // Calculate pending comments (those without isApproved or isApproved = false)
  const pendingCommentsCount = comments.filter(
    (comment: any) => !comment.isApproved
  ).length;

  // Get recent 3 users
  const recentUsers = users.slice(0, 3);

  // Get recent 3 pending reviews
  const recentPendingReviews = pendingReviewsData.slice(0, 3);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your platform and monitor activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {adminStats.map((stat, index) => {
          let value = stat.value;
          if (stat.label === 'Total Users') {
            value = users.length;
          } else if (stat.label === 'Total Reviews') {
            value = reviews.length;
          } else if (stat.label === 'Pending Reviews') {
            value = pendingReviewsData.length;
          } else if (stat.label === 'Pending Comments') {
            value = pendingCommentsCount;
          }

          return (
            <StatsCard
              key={index}
              label={stat.label}
              value={value}
              icon={stat.icon}
              color={stat.color}
              href={stat.href}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Users */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Recent Users
            </h2>
            <Link
              href="/dashboard/admin/users"
              className="text-primary hover:underline text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          {recentUsers.length === 0 ? (
            <div className="text-center py-8">
              <FaUsers className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">
                No users registered yet
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentUsers.map((user: User) => (
                <div
                  key={user._id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <FaUsers className="text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {user.role}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending Reviews */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
              Pending Reviews
            </h2>
            <Link
              href="/dashboard/admin/reviews"
              className="text-primary hover:underline text-sm font-medium"
            >
              View All →
            </Link>
          </div>
          {recentPendingReviews.length === 0 ? (
            <div className="text-center py-8">
              <FaCheckCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">
                No pending reviews
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentPendingReviews.map((review: Review) => (
                <div
                  key={review._id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <FaCheckCircle className="text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {review.title || 'Review'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      By {review.user?.name || 'Unknown'}
                    </p>
                  </div>
                  <span className="text-xs text-orange-500 font-medium">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-6">
          System Status
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-primary w-5 h-5" />
              <div>
                <p className="font-semibold text-text-light dark:text-text-dark">
                  API Status
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All systems operational
                </p>
              </div>
            </div>
            <span className="text-primary font-semibold">Active</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-primary w-5 h-5" />
              <div>
                <p className="font-semibold text-text-light dark:text-text-dark">
                  Database
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connected and synced
                </p>
              </div>
            </div>
            <span className="text-primary font-semibold">Healthy</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/dashboard/admin/users"
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
        >
          Manage Users
        </Link>
        <Link
          href="/dashboard/admin/reviews"
          className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-light dark:text-text-dark font-semibold py-4 px-6 rounded-lg transition-colors text-center"
        >
          Review Management
        </Link>
        <Link
          href="/dashboard/admin/categories"
          className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-light dark:text-text-dark font-semibold py-4 px-6 rounded-lg transition-colors text-center"
        >
          View Category
        </Link>
      </div>
    </div>
  );
}
