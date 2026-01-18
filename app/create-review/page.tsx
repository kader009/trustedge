'use client';
import { FaStar } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect } from 'react';
import {
  useAllCategoryQuery,
  usePostProductMutation,
} from '@/src/redux/store/api/endApi';
import {
  setTitle,
  setPrice,
  setCategory,
  setDescription,
  setImages,
  setRatings,
  setPurchaseSource,
} from '@/src/redux/store/features/productSlice';
import { toast } from 'sonner';

export default function CreateReviewPage() {
  const { token } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();
  const { data: categoryData } = useAllCategoryQuery([]);
  const {
    category,
    description,
    price,
    images,
    ratings,
    title,
    purchaseSource,
  } = useAppSelector((state: RootState) => state.product);
  const dispatch = useAppDispatch();
  const [postProduct, { isLoading }] = usePostProductMutation();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const productData = {
      title,
      price,
      category,
      description,
      images,
      rating: ratings,
      purchaseSource,
    };
    try {
      await postProduct(productData).unwrap();
      toast.success('Review submitted successfully! wait for admin approval.');

      dispatch(setTitle(''));
      dispatch(setPrice(0));
      dispatch(setCategory(''));
      dispatch(setDescription(''));
      dispatch(setImages([]));
      dispatch(setRatings(0));
      dispatch(setPurchaseSource(''));

      // Redirect to user reviews dashboard
      // setTimeout(() => {
      //   router.push('/dashboard/user/reviews');
      // }, 1500);
    } catch (error) {
      console.error(error);
      toast.error('something went wrong');
    }
  };

  return (
    <main className="flex flex-1 justify-center mx-4">
      <div className="layout-content-container flex flex-col w-full max-w-3xl flex-1">
        <div className="flex flex-wrap justify-between p-4">
          <div className="flex min-w-72 flex-col">
            <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-1">
              Create a New Review
            </p>
            <p className="text-text-light dark:text-white text-base font-normal leading-normal">
              Share your experience with the community.
            </p>
          </div>
        </div>
        <form
          className="flex flex-col gap-8 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 mt-4 mb-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <label className="flex flex-col w-full">
              <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                Product Title
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                placeholder="e.g., The best coffee maker ever!"
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
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
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                placeholder="Enter price"
                value={price}
                onChange={(e) => dispatch(setPrice(Number(e.target.value)))}
              />
            </label>
            {/* Category Field */}
            <label className="flex flex-col w-full">
              <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
                Category
              </p>
              <select
                className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
                value={category}
                onChange={(e) => dispatch(setCategory(e.target.value))}
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')",
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="">Select a Category</option>
                {categoryData?.data?.map(
                  (cat: { _id: string; name: string }) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  )
                )}
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
                    `cursor-pointer text-4xl transition-colors ` +
                    (i <= ratings
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600')
                  }
                  onClick={() => dispatch(setRatings(i))}
                />
              ))}
            </div>
          </div>
          <label className="flex flex-col w-full">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Your Review
            </p>
            <textarea
              className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark min-h-40 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
              placeholder="Share your experience, what you liked, what you disliked..."
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
            ></textarea>
          </label>
          <label className="flex flex-col w-full">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Add Photo URLs (comma separated)
            </p>
            <input
              type="text"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
              placeholder="e.g., https://example.com/image1.jpg, https://example.com/image2.jpg"
              value={images.join(', ')}
              onChange={(e) => {
                const urls = e.target.value
                  .split(',')
                  .map((url) => url.trim())
                  .filter((url) => url.length > 0);
                dispatch(setImages(urls));
              }}
            />
          </label>

          {/* Product Name */}
          <label className="flex flex-col w-full">
            <p className="text-gray-900 dark:text-white text-base font-medium leading-normal pb-2">
              Purchase Source Name
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] text-base font-normal leading-normal"
              placeholder="e.g., Amazon, ebay or others store.."
              value={purchaseSource}
              onChange={(e) => dispatch(setPurchaseSource(e.target.value))}
            />
          </label>

          <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-bold leading-normal tracking-[0.015em]">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
