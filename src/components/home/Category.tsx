import { Category as CategoryType } from '@/src/types/CategoryType';
import Link from 'next/link';

const Category = async () => {
  let categories: CategoryType[] = [];

  try {
    const response = await fetch(
      'https://trustedge-backend.vercel.app/api/v1/category',
      {
        cache: 'no-store',
      }
    );
    const data = await response.json();
    if (data.success) {
      categories = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

  return (
    <section className="mb-16">
      <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-6">
        Explore by Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category._id}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              href={`/categories?category=${encodeURIComponent(category.name)}`}
            >
              <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white overflow-hidden">
                <img
                  src={
                    category.image.includes('ibb.co.com')
                      ? `https://i.ibb.co/${category.image
                          .split('/')
                          .pop()}/image.png`
                      : category.image
                  }
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-semibold">{category.name}</span>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            No categories available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Category;
