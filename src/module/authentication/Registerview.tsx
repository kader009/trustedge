'use client';
import SocialLog from '@/src/components/social/SocialLog';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registerview = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full max-w-md mx-auto bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-[#333333] dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2">
          Register yourself!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pb-6 text-center">
          Register to share and discover product reviews.
        </p>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Name
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your name"
                type="name"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 cursor-default"
                tabIndex={-1}
                aria-hidden="true"
              ></button>
            </div>
          </label>
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
              ></button>
            </div>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Profile image
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your profile image"
                type="text"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 opacity-0 cursor-default"
                tabIndex={-1}
                aria-hidden="true"
              ></button>
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
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Role
            </p>
            <div className="relative">
              <select className="form-select appearance-none flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal">
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </label>
        </div>
        <button className="flex min-w-[84px] w-full mt-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Sign up</span>
        </button>
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="shrink mx-4 text-gray-400 dark:text-gray-500 text-sm">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <SocialLog />
      </div>
    </main>
  );
};

export default Registerview;
