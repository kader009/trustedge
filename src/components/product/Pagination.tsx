interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-between border-t border-neutral-200/80 dark:border-neutral-800/80 px-4 sm:px-0 mt-12 pt-6">
      <div className="flex w-0 flex-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
      </div>
      <div className="hidden md:flex gap-1">
        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                currentPage === page
                  ? 'bg-primary/20 dark:bg-primary/30 text-primary'
                  : 'text-neutral-300 dark:text-neutral-500 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
              }`}
            >
              {page}
            </button>
          ) : (
            <span
              key={index}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-300 dark:text-neutral-500"
            >
              {page}
            </span>
          )
        )}
      </div>
      <div className="flex w-0 flex-1 justify-end">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
