'use client';
import SocialLog from '@/src/components/social/SocialLog';
import { useAppDispatch, useAppSelector } from '@/src/redux/hook';
import { useSignUpMutation } from '@/src/redux/store/api/endApi';
import { RootState } from '@/src/redux/store/store';
import {
  setName,
  setEmail,
  setPassword,
  setImage,
  setRole,
} from '@/src/redux/userAuth/registerSlice';
import { registerSchema } from '@/src/validation/authSchema';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const Registerview = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    image?: string;
    role?: string;
  }>({});
  const dispatch = useAppDispatch();
  const { name, email, image, password, role } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data using Zod
    const validationResult = registerSchema.safeParse({
      name,
      email,
      password,
      image,
      role,
    });

    if (!validationResult.success) {
      // Collect and set validation errors
      const newErrors: {
        name?: string;
        email?: string;
        password?: string;
        image?: string;
        role?: string;
      } = {};
      validationResult.error.issues.forEach((error) => {
        const field = error.path[0] as
          | 'name'
          | 'email'
          | 'password'
          | 'image'
          | 'role';
        if (!newErrors[field]) {
          newErrors[field] = error.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    try {
      const user = await signUp({
        name,
        email,
        image,
        password,
        role,
      });
      console.log(user);
      toast.success('Registration successful!');
      router.replace('/login');

      dispatch(setName(''));
      dispatch(setEmail(''));
      dispatch(setImage(''));
      dispatch(setPassword(''));
      dispatch(setRole(''));
    } catch (error) {
      console.log(error);
      toast.error('Registration failed. Please try again.');
    }
  };
  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col w-full max-w-md mx-auto bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
        <h1 className="text-[#333333] dark:text-white tracking-tight text-2xl font-bold leading-tight text-center pb-2">
          Register yourself!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pb-6 text-center">
          Register to share and discover product reviews.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Name
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                placeholder="Enter your name"
                type="name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
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
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
                value={image}
                onChange={(e) => dispatch(setImage(e.target.value))}
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-xs mt-1">{errors.image}</p>
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
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
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
          <label className="flex flex-col w-full">
            <p className="text-[#333333] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
              Role
            </p>
            <div className="relative">
              <select
                className="form-select appearance-none flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-4 pr-10 text-base font-normal leading-normal"
                value={role}
                onChange={(e) => dispatch(setRole(e.target.value))}
              >
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role}</p>
            )}
          </label>
          <button
            className="flex min-w-[84px] w-full mt-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            type="submit"
          >
            Sign up
          </button>
        </form>
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
