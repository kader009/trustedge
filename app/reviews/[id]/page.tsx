export const dynamic = 'force-dynamic';
import { FaStar, FaShare, FaFlag } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { getReviewById, getProducts, getCategories } from '@/src/lib/api';
import { notFound } from 'next/navigation';
import VotingButtons from '@/src/components/reviews/VotingButtons';
import CommentSection from '@/src/components/reviews/CommentSection';
import { Product, Category, Comment, Related } from '@/src/types/singleReview';

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let reviewData = await getReviewById(id);

  if (!reviewData) {
    const products = await getProducts(100);
    const product = products.find((p: Product) => p._id === id);

    if (!product) {
      notFound();
    }

    reviewData = {
      _id: product._id,
      productId: product,
      rating: product.rating || 5,
      review: product.description || 'Great product! Highly recommended.',
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: [],
    };
  }

  const categories = await getCategories();
  const categoryMap = new Map<string, string>();
  categories.forEach((cat: Category) => {
    categoryMap.set(cat._id, cat.name);
  });

  // Handle flat data structure or populated productId
  const product = reviewData.productId || reviewData || {};
  const categoryName = product.category || 'General';

  // Get related products from same category
  const allProducts = await getProducts(100);
  const relatedProducts = allProducts
    .filter(
      (p: Product) => p.category === product.category && p._id !== product._id
    )
    .slice(0, 2);

  const review = {
    id: reviewData._id,
    title: product.title || reviewData.title || 'Review',
    author: {
      name: reviewData.user?.name || 'Verified Buyer',
      avatar:
        reviewData.user?.image ||
        reviewData.user?.avatar ||
        '/assets/default-avatar.svg',
      role: 'Verified Buyer',
    },
    date: new Date(reviewData.createdAt || Date.now()).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }
    ),
    rating: reviewData.rating || 0,
    category: categoryName,
    source: reviewData.purchaseSource || 'TrustEdge',
    sourceLink: '#',
    description:
      product.description || reviewData.review || 'No description available.',
    images: Array.isArray(product.images) ? product.images : [],
    likes: reviewData.likes || 0,
    dislikes: 0,
    comments: Array.isArray(reviewData.comments)
      ? reviewData.comments.map((c: Comment) => ({
          id: c._id,
          author: c.user?.name || 'User',
          avatar:
            c.user?.image || c.user?.avatar || '/assets/default-avatar.svg',
          date: new Date(c.createdAt || Date.now()).toLocaleDateString(
            'en-US',
            {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }
          ),
          text: c.comment,
        }))
      : [],
  };

  const relatedReviews = relatedProducts.map((p: Product) => {
    return {
      id: p._id,
      category: categoryName,
      categoryColor: 'text-primary',
      title: p.title || 'Product',
      price: p.price || 0,
      rating: p.rating || 0,
      imageUrl: p.images
        ? p.images[0]
        : 'https://via.placeholder.com/400x300/6366f1/ffffff?text=No+Image',
    };
  });

  return (
    <div className="min-h-screen pb-12">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary dark:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/categories"
            className="hover:text-primary dark:text-white"
          >
            Reviews
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/categories?category=${review.category}`}
            className="hover:text-primary dark:text-white"
          >
            {review.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white truncate max-w-xs">
            {review.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Review Header */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {review.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {review.date}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-text-light dark:text-white mb-4">
                    {review.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {review.rating.toFixed(1)}/5.0
                    </span>
                    {product.price && (
                      <span className="ml-auto text-2xl font-bold text-primary">
                        ${Math.round(product.price)}
                      </span>
                    )}
                  </div>
                </div>
                {review.source && (
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-text-light dark:text-white mb-1">
                      Purchased at
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {review.source}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Review Content */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Product Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {review.description}
                </p>
              </div>

              {/* Images Gallery */}
              {review.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {review.images.map((imageUrl: string, index: number) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden bg-white dark:bg-card-dark"
                    >
                      <Image
                        src={imageUrl}
                        alt={`Review image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Voting Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <VotingButtons
                  reviewId={review.id}
                  initialVoteCount={review.likes}
                />
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 text-gray-500 hover:text-primary transition-colors"
                    title="Share"
                  >
                    <FaShare />
                  </button>
                  <button
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                    title="Report"
                  >
                    <FaFlag />
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <CommentSection reviewId={review.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-text-light dark:text-white mb-4">
                Related Products
              </h3>
              <div className="flex flex-col gap-4">
                {relatedReviews.map((related: Related) => (
                  <Link
                    key={related.id}
                    href={`/reviews/${related.id}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
                      <Image
                        src={related.imageUrl}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase text-primary mb-1 block">
                      {related.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {related.title}
                    </h4>
                    <p className="text-lg font-bold text-primary mb-1">
                      ${Math.round(related.price)}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {related.rating.toFixed(1)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-card-dark rounded-xl p-6 border border-primary/10">
              <h3 className="text-lg font-bold text-text-light dark:text-white mb-2">
                Write a Review
              </h3>
              <p className="text-sm text-text-light dark:text-white mb-4">
                Have you used this product? Share your experience with the
                community.
              </p>
              <Link href="/create-review">
                <button className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                  Write a Review
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
