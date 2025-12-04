'use client';
import { FaStar } from 'react-icons/fa';
import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAllCategoryQuery } from '@/src/redux/store/api/endApi';

export default function CreateReviewPage() {
  const { token } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();
  const { data: category } = useAllCategoryQuery([]);

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return (
    <main className="flex flex-1 justify-center py-5 px-4 sm:px-6 md:px-8">
      <div className="layout-content-container flex flex-col w-full max-w-3xl flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Create a New Review
            </p>
            <p className="text-text-light dark:text-white text-base font-normal leading-normal">
              Share your experience with the community.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 p-4 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <label className="flex flex-col w-full">
              <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                Product Name / Title
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                placeholder="e.g., The best coffee maker ever!"
              />
            </label>
            {/* Price Field */}
            <label className="flex flex-col w-full">
              <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                Price
              </p>
              <input
                type="number"
                min="0"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter price"
              />
            </label>
            {/* Category Field */}
            <label className="flex flex-col w-full">
              <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                Category
              </p>
              <select
                className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')",
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="">Select a Category</option>
                {category?.data?.map((cat: { _id: string; name: string }) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white text-base font-medium leading-tight tracking-[-0.015em] pb-2">
              Your Rating
            </h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={
                    `cursor-pointer text-4xl ` +
                    (i <= 3
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600')
                  }
                />
              ))}
            </div>
          </div>
          <label className="flex flex-col w-full">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Your Review
            </p>
            <textarea
              className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 min-h-40 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
              placeholder="Share your experience, what you liked, what you disliked..."
            ></textarea>
          </label>
          <div>
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Add Photos
            </p>
            <div className="flex items-center justify-center w-full">
              <label
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                htmlFor="dropzone-file"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  className="hidden"
                  id="dropzone-file"
                  multiple
                  type="file"
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Cancel</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Submit Review</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
