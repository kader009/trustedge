'use client';
import { useAppDispatch, useAppSelector } from '@/src/redux/hook';
import { logout } from '@/src/redux/userAuth/userSlice';
import { RootState } from '@/src/redux/store/store';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, token } = useAppSelector((state: RootState) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between whitespace-nowrap border-solid border-border-light dark:border-border-dark py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-text-light dark:text-white">
              <h1 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                <Link href="/">ReviewPortal</Link>
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-5">
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
            </nav>
          </div>

          <div className="flex-1 flex justify-center px-4">
            <label className="hidden sm:flex flex-col w-full max-w-md h-10">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-text-light/70 dark:text-text-dark/70 flex border border-border-light dark:border-border-dark bg-white dark:bg-card-dark items-center justify-center pl-3 rounded-l-lg border-r-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-white focus:outline-none focus:ring-0 border border-border-light dark:border-border-dark bg-white dark:bg-card-dark h-full placeholder:text-text-light/70 dark:placeholder:text-text-dark/70 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  placeholder="Search reviews..."
                />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-end gap-2">
            {user && token ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="hidden md:block text-sm font-medium text-text-light dark:text-text-dark">
                    {user.name}
                  </span>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-border-light dark:border-border-dark py-2 z-50">
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
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500"
                    >
                      <FaSignOutAlt className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                  <span className="truncate">
                    <Link href="/register">Sign Up</Link>
                  </span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-border-dark text-text-light dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-opacity-80 transition-colors">
                  <span className="truncate">
                    <Link href="/login">Log In</Link>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
