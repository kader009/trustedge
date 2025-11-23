'use client';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full max-w-md mx-auto bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-[#333333] dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pb-6 text-center">
          Log in to share and discover product reviews.
        </p>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Email Address
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your email"
                type="email"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 cursor-default"
                tabIndex={-1}
                aria-hidden="true"
              >
                {/* Empty button for layout match */}
              </button>
            </div>
          </label>
          <label className="flex flex-col w-full">
            <div className="flex justify-between items-baseline pb-2">
              <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal">
                Password
              </p>
            </div>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 hover:text-primary"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <FaEye className="text-xl" />
                ) : (
                  <FaEyeSlash className="text-xl" />
                )}
              </button>
            </div>
          </label>
        </div>
        <button className="flex min-w-[84px] w-full mt-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Log In</span>
        </button>
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="shrink mx-4 text-gray-400 dark:text-gray-500 text-sm">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg h-12 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-[#333333] dark:text-white text-sm font-medium leading-normal hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg h-12 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-[#333333] dark:text-white text-sm font-medium leading-normal hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Github
          </button>
        </div>
      </div>
    </main>
  );
}
