'use client';

import { useAppSelector, useAppDispatch } from '@/src/redux/hook';
import { logout } from '@/src/redux/userAuth/userSlice';
import { RootState } from '@/src/redux/store/store';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  FaHome,
  FaUser,
  FaHeart,
  FaStar,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaComment,
  FaLock,
  FaCreditCard,
  FaTag,
  FaCheckCircle,
} from 'react-icons/fa';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!token || !user) {
      router.replace('/login');
    }
  }, [token, user, router]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully!');
    router.push('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
    { href: '/dashboard/user/comments', label: 'My Comments', icon: FaComment },
    { href: '/dashboard/user/favorites', label: 'Favorites', icon: FaHeart },
    {
      href: '/dashboard/user/payments',
      label: 'Payment History',
      icon: FaCreditCard,
    },
    {
      href: '/dashboard/user/change-password',
      label: 'Change Password',
      icon: FaLock,
    },
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
      href: '/dashboard/admin/pending-reviews',
      label: 'Pending Reviews',
      icon: FaCheckCircle,
    },
    {
      href: '/dashboard/admin/categories',
      label: 'Categories',
      icon: FaTag,
    },
    {
      href: '/dashboard/admin/comments',
      label: 'Comment Modify',
      icon: FaComment,
    },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-white p-3 rounded-lg shadow-lg"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? (
          <FaTimes className="w-5 h-5" />
        ) : (
          <FaBars className="w-5 h-5" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeSidebar}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          w-64 bg-white dark:bg-gray-900 border-r border-border-light dark:border-border-dark 
          h-screen flex flex-col
          fixed lg:sticky top-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }
        `}
        >
          {/* User Profile Section */}
          <div className="p-6 border-b border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="object-cover rounded-full w-full h-full"
                  />
                ) : (
                  <FaUser className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold text-text-light dark:text-text-dark truncate">
                  {user.name}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
              {isAdmin ? 'Admin Dashboard' : 'My Dashboard'}
            </h3>
          </div>

          {/* Scrollable Navigation */}
          <nav className="px-4 flex-1 overflow-y-auto">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeSidebar}
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

          {/* Bottom Buttons */}
          <div className="p-4 border-t border-border-light dark:border-border-dark space-y-2">
            <Link
              href="/"
              onClick={closeSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaHome className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primary hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <FaSignOutAlt className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 lg:ml-0">{children}</main>
      </div>
    </div>
  );
}
