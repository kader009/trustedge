'use client';

import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaHeart,
  FaStar,
  FaCog,
  FaUsers,
  FaChartBar,
  FaClipboardList,
} from 'react-icons/fa';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, token } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token || !user) {
      router.replace('/login');
    }
  }, [token, user, router]);

  if (!user || !token) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const isAdmin = user.role === 'admin';

  const userLinks = [
    { href: '/dashboard/user', label: 'Overview', icon: FaHome },
    { href: '/dashboard/user/profile', label: 'Profile', icon: FaUser },
    { href: '/dashboard/user/reviews', label: 'My Reviews', icon: FaStar },
    { href: '/dashboard/user/favorites', label: 'Favorites', icon: FaHeart },
    { href: '/dashboard/user/settings', label: 'Settings', icon: FaCog },
  ];

  const adminLinks = [
    { href: '/dashboard/admin', label: 'Overview', icon: FaHome },
    { href: '/dashboard/admin/users', label: 'Users', icon: FaUsers },
    {
      href: '/dashboard/admin/reviews',
      label: 'All Reviews',
      icon: FaClipboardList,
    },
    {
      href: '/dashboard/admin/analytics',
      label: 'Analytics',
      icon: FaChartBar,
    },
    { href: '/dashboard/admin/settings', label: 'Settings', icon: FaCog },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-900 border-r border-border-light dark:border-border-dark min-h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
              {isAdmin ? 'Admin Dashboard' : 'My Dashboard'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Welcome, {user.name}
            </p>
          </div>
          <nav className="px-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="p-4 mt-auto absolute bottom-4 left-4 right-4">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaHome className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
