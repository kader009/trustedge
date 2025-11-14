const ReviewChart = () => {
  return (
    <section className="mx-4 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">Total Reviews</p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            12,500
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">Registered Users</p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            8,200
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
          <p className="text-base font-medium leading-normal">Product Categories</p>
          <p className="tracking-light text-3xl font-bold leading-tight text-primary">
            25
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewChart;
