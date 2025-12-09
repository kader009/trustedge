'use client';

import {
  FaUsers,
  FaStar,
  FaChartLine,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    {
      label: 'Total Users',
      value: '0',
      change: '+12%',
      icon: FaUsers,
      color: 'bg-primary',
      href: '/dashboard/admin/users',
    },
    {
      label: 'Total Reviews',
      value: '0',
      change: '+8%',
      icon: FaStar,
      color: 'bg-primary',
      href: '/dashboard/admin/reviews',
    },
    {
      label: 'Active Today',
      value: '0',
      change: '+23%',
      icon: FaChartLine,
      color: 'bg-primary',
      href: '/dashboard/admin/analytics',
    },
    {
      label: 'Pending Reviews',
      value: '0',
      change: '-5%',
      icon: FaClock,
      color: 'bg-primary',
      href: '/dashboard/admin/pending-reviews',
    },
  ];

  const recentUsers = [
    // Placeholder - will be fetched from API
  ];

  const pendingReviews = [
    // Placeholder - will be fetched from API
  ];

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
                <span
                  className={`text-sm font-semibold ${
                    stat.change.startsWith('+')
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {stat.change}
                </span>
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
              {/* User list will be rendered here */}
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
          {pendingReviews.length === 0 ? (
            <div className="text-center py-8">
              <FaCheckCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-gray-500 dark:text-gray-400">
                No pending reviews
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Review list will be rendered here */}
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
