const Category = () => {
  return (
    <section className="mb-16">
      <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-6">
        Explore by Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">
              phone_iphone
            </span>
          </div>
          <span className="font-semibold">Electronics</span>
        </a>
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">
              menu_book
            </span>
          </div>
          <span className="font-semibold">Books</span>
        </a>
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">chair</span>
          </div>
          <span className="font-semibold">Home Goods</span>
        </a>
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">styler</span>
          </div>
          <span className="font-semibold">Apparel</span>
        </a>
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">auto_fix</span>
          </div>
          <span className="font-semibold">Beauty</span>
        </a>
        <a
          className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <span className="material-symbols-outlined text-3xl">
              sports_soccer
            </span>
          </div>
          <span className="font-semibold">Sports</span>
        </a>
      </div>
    </section>
  );
};

export default Category;
