'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { FaStar, FaHeart, FaEye, FaComment, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';

export default function UserDashboard() {
  const { user } = useAppSelector((state: RootState) => state.user);

  const stats = [
    {
      label: 'Total Reviews',
      value: '0',
      icon: FaStar,
      color: 'bg-blue-500',
      href: '/dashboard/user/reviews',
    },
    {
      label: 'Favorites',
      value: '0',
      icon: FaHeart,
      color: 'bg-red-500',
      href: '/dashboard/user/favorites',
    },
    {
      label: 'Profile Views',
      value: '0',
      icon: FaEye,
      color: 'bg-green-500',
      href: '/dashboard/user/profile-views',
    },
    {
      label: 'Comments',
      value: '0',
      icon: FaComment,
      color: 'bg-purple-500',
      href: '/dashboard/user/comments',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Here&apos;s what&apos;s happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              href={stat.href}
              className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            Recent Activity
          </h2>
          <FaCalendar className="text-gray-400" />
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No recent activity yet
          </p>
          <a
            href="/create-review"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Write Your First Review
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <a
              href="/create-review"
              className="block w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
            >
              Write a Review
            </a>
            <a
              href="/categories"
              className="block w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-light dark:text-text-dark font-medium py-3 px-4 rounded-lg transition-colors text-center"
            >
              Browse Products
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
            Profile Completion
          </h3>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Profile Status
              </span>
              <span className="text-sm font-semibold text-primary">60%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Complete your profile to unlock all features
          </p>
          <a
            href="/dashboard/user/profile"
            className="text-primary hover:underline text-sm font-medium"
          >
            Complete Profile →
          </a>
        </div>
      </div>
    </div>
  );
}
