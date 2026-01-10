'use client';

import AdminLogin from '@/src/components/shared/AdminAccess';
import SocialLog from '@/src/components/social/SocialLog';
import { useAppDispatch, useAppSelector } from '@/src/redux/hook';
import { useLoginMutation } from '@/src/redux/store/api/endApi';
import { RootState } from '@/src/redux/store/store';
import { setEmail, setPassword } from '@/src/redux/userAuth/loginSlice';
import { setUser } from '@/src/redux/userAuth/userSlice';
import { loginSchema } from '@/src/validation/authSchema';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const Loginview = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login, { isLoading }] = useLoginMutation();
  const route = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data using Zod
    const validationResult = loginSchema.safeParse({
      email,
      password,
    });

    if (!validationResult.success) {
      // Collect and set validation errors
      const newErrors: { email?: string; password?: string } = {};
      validationResult.error.issues.forEach((error) => {
        const field = error.path[0] as 'email' | 'password';
        if (!newErrors[field]) {
          newErrors[field] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();

      // Dispatch to Redux store - setUser already expects { user, token }
      dispatch(
        setUser({
          user: response.data.user,
          token: response.data.accessToken,
        })
      );

      toast.success('Login successful!');
      route.replace(callbackUrl);
      dispatch(setEmail(''));
      dispatch(setPassword(''));
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full max-w-md mx-auto bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-text-light dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-500 dark:text-gray-200 text-sm font-normal leading-normal pb-6 text-center">
          Log in to share product reviews.
        </p>

        {/*  Admin Access Info */}
        <AdminLogin
          onDemoLogin={(email, password) => {
            dispatch(setEmail(email));
            dispatch(setPassword(password));
          }}
        />

        {/* user form */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Email Address
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </label>
          <label className="flex flex-col w-full">
            <div className="flex justify-between items-baseline pb-2">
              <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal">
                Password
              </p>
            </div>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
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
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </label>
          <button
            className="flex min-w-[84px] w-full mt-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              'Log In'
            )}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="shrink mx-4 text-gray-400 dark:text-gray-200 text-sm">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <SocialLog />
      </div>
    </main>
  );
};

export default Loginview;
