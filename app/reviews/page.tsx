import { getReviews, getCategories } from '@/src/lib/api';
import ReviewCard from '@/src/components/reviews/ReviewCard';
import ReviewFilters from '@/src/components/reviews/ReviewFilters';
import SearchBar from '@/src/components/reviews/SearchBar';
import Pagination from '@/src/components/shared/Pagination';
import { FaStar } from 'react-icons/fa';
import { ReviewData, SearchParams } from '@/src/types/searchParams';

export default async function AllReviewsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const categories = await getCategories();

  const { reviews, pagination } = await getReviews({
    page: params.page ? Number(params.page) : 1,
    limit: 12,
    category: params.category,
    rating: params.rating ? Number(params.rating) : undefined,
    search: params.search,
    sort: params.sort || 'newest',
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-2 flex items-center gap-2">
            <FaStar className="text-primary" />
            All Reviews
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Discover authentic product reviews from our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar initialSearch={params.search} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <ReviewFilters
              categories={categories}
              selectedCategory={params.category}
              selectedRating={params.rating}
              selectedSort={params.sort}
            />
          </aside>

          {/* Reviews Grid */}
          <main className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {reviews.length} of {pagination.total || 0} reviews
              </p>
            </div>

            {/* Reviews List */}
            {reviews.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review: unknown) => {
                    const reviewData = review as ReviewData;
                    return (
                      <ReviewCard key={reviewData._id} review={reviewData} />
                    );
                  })}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <Pagination
                    currentPage={pagination.page || 1}
                    totalPages={pagination.totalPages || 1}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <FaStar className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  No reviews found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
