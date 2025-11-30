import { Category as CategoryType } from '@/src/types/CategoryType';

const ReviewChart = async () => {
  let categories: CategoryType[] = [];
  let reviews: any[] = [];
  let products: any[] = [];

  try {
    const [categoryRes, reviewRes, productRes] = await Promise.all([
      fetch('https://trustedge-backend.vercel.app/api/v1/category', {
        cache: 'no-store',
      }),
      fetch('https://trustedge-backend.vercel.app/api/v1/review', {
        cache: 'no-store',
      }),
      fetch('https://trustedge-backend.vercel.app/api/v1/products', {
        cache: 'no-store',
      }),
    ]);

    const categoryData = await categoryRes.json();
    const reviewData = await reviewRes.json();
    const productData = await productRes.json();

    if (categoryData.success) {
      categories = categoryData.data;
    }
    if (reviewData.success) {
      reviews = reviewData.data;
    }
    if (productData.success) {
      products = productData.data;
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">Total Reviews</p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            {reviews.length}
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">Total Products</p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            {products.length}
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">
            Product Categories
          </p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            {categories.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewChart;
