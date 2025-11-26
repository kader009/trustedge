import Link from 'next/link';
import {
  FaMobileAlt,
  FaBook,
  FaChair,
  FaTshirt,
  FaSpa,
  FaFutbol,
} from 'react-icons/fa';

const Category = () => {
  return (
    <section className="mb-16">
      <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-6">
        Explore by Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaMobileAlt className="text-3xl" />
          </div>
          <span className="font-semibold">Electronics</span>
        </Link>
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaBook className="text-3xl" />
          </div>
          <span className="font-semibold">Books</span>
        </Link>
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaChair className="text-3xl" />
          </div>
          <span className="font-semibold">Home Goods</span>
        </Link>
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaTshirt className="text-3xl" />
          </div>
          <span className="font-semibold">Apparel</span>
        </Link>
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaSpa className="text-3xl" />
          </div>
          <span className="font-semibold">Beauty</span>
        </Link>
        <Link
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="/categories"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <FaFutbol className="text-3xl" />
          </div>
          <span className="font-semibold">Sports</span>
        </Link>
      </div>
    </section>
  );
};

export default Category;
