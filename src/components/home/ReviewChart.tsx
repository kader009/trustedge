import { getAllData } from '@/src/lib/api';

const ReviewChart = async () => {
  const { products, categories, reviews } = await getAllData();

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
