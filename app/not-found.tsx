'use client';

import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark px-4">
      <div className="max-w-md w-full bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-8 text-center">
        {/* 404 Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
            <MdError className="text-primary text-3xl" />
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-6xl font-bold text-primary mb-2">404</h1>

        {/* Error Message */}
        <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaHome />
            Go Home
          </Link>
          <Link
            href="/reviews"
            className="px-6 py-3 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-text-light dark:text-text-dark font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaSearch />
            Browse Reviews
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark">
          <p className="text-sm text-text-light/70 dark:text-text-dark/70 mb-3">
            You might be interested in:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/categories"
              className="text-sm text-primary hover:underline"
            >
              Categories
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/dashboard"
              className="text-sm text-primary hover:underline"
            >
              Dashboard
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/about"
              className="text-sm text-primary hover:underline"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
