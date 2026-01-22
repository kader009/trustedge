'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hook';
import { logout } from '@/src/redux/userAuth/userSlice';
import { RootState } from '@/src/redux/store/store';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'sonner';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state: RootState) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = async () => {
    dispatch(logout());
    setShowDropdown(false);
    setShowMobileMenu(false);
    toast.success('Logged out successfully!');
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
              role="button"
            >
              <FaBars className="w-6 h-6 text-text-light dark:text-text-dark" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3 text-text-light dark:text-white shrink-0">
              <h1 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                <Link href="/">ReviewPortal</Link>
              </h1>
            </div>

            {/* Desktop Navigation - centered */}
            <nav className="hidden md:flex items-center gap-5 flex-1 justify-center">
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="/about-us"
              >
                About Us
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="/categories"
              >
                Categories
              </Link>
              {user && token && (
                <>
                  <Link
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="/create-review"
                  >
                    Write a Review
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2 shrink-0">
              {user && token ? (
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="User menu"
                    role="button"
                  >
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="hidden lg:block text-sm font-medium text-text-light dark:text-text-dark cursor-pointer">
                      {user.name}
                    </span>
                  </button>
                  {showDropdown && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowDropdown(false)}
                      />
                      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-card-dark rounded-lg shadow-lg border border-border-light dark:border-border-dark py-2 z-50">
                        <div className="px-4 py-3 border-b border-border-light dark:border-border-dark">
                          <p className="font-semibold text-text-light dark:text-text-dark truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-200 truncate">
                            {user.email}
                          </p>
                        </div>
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-text-light dark:text-text-dark"
                          onClick={() => setShowDropdown(false)}
                        >
                          <FaUser className="w-4 h-4" />
                          <span>Dashboard</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-primary cursor-pointer"
                          aria-label="Logout"
                          role="button"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar - Slides from Left */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl z-50 md:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          showMobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <h2 className="text-lg font-bold text-text-light dark:text-text-dark">
            Menu
          </h2>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
            role="button"
          >
            <FaTimes className="w-5 h-5 text-text-light dark:text-text-dark" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          <Link
            className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="/"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="/about-us"
            onClick={() => setShowMobileMenu(false)}
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="/categories"
            onClick={() => setShowMobileMenu(false)}
          >
            Categories
          </Link>
          {user && token && (
            <>
              <Link
                className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="/create-review"
                onClick={() => setShowMobileMenu(false)}
              >
                Write a Review
              </Link>
              <Link
                className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href="/dashboard"
                onClick={() => setShowMobileMenu(false)}
              >
                Dashboard
              </Link>
            </>
          )}
        </nav>

        {user && token ? (
          <div className="p-4 border-t border-border-light dark:border-border-dark mt-auto">
            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-text-light dark:text-text-dark truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:opacity-90 text-white rounded-lg transition-opacity font-medium"
              aria-label="Logout"
              role="button"
            >
              <FaSignOutAlt className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="p-4 border-t border-border-light dark:border-border-dark mt-auto">
            <Link
              href="/login"
              className="w-full flex items-center justify-center py-3 px-4 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
              onClick={() => setShowMobileMenu(false)}
            >
              Log In
            </Link>
          </div>
        )}
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;
