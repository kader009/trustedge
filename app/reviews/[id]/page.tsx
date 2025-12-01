import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaFlag,
} from 'react-icons/fa';
import Link from 'next/link';
import {
  getReviewById,
  getReviews,
  getProducts,
  getCategories,
} from '@/src/lib/api';
import { notFound } from 'next/navigation';

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let reviewData = await getReviewById(id);

  // Fallback: If review not found, try to get product data
  if (!reviewData) {
    const products = await getProducts(100); // Fetch more products
    const product = products.find((p: any) => p._id === id);

    if (!product) {
      notFound();
    }

    // Create a mock review from product data
    reviewData = {
      _id: product._id,
      productId: product,
      user: {
        name: 'Verified Buyer',
        avatar: null,
      },
      rating: product.rating || 5,
      review: product.description || 'Great product! Highly recommended.',
      createdAt: new Date().toISOString(),
      likes: Math.floor(Math.random() * 200) + 50,
      comments: [],
    };
  }

  // Fetch categories to map category IDs to names
  const categories = await getCategories();
  const categoryMap = new Map();
  categories.forEach((cat: any) => {
    categoryMap.set(cat._id, cat.name);
  });

  const product = reviewData.productId || {};
  const categoryName =
    categoryMap.get(product.category) || product.category || 'General';

  // Get related products from same category
  const allProducts = await getProducts(100);
  const relatedProducts = allProducts
    .filter(
      (p: any) => p.category === product.category && p._id !== product._id
    )
    .slice(0, 2);

  // Helper to get image
  const getProductImage = (prod: any) => {
    if (prod.images && prod.images.length > 0) {
      const originalImage = prod.images[0];
      if (originalImage.includes('ibb.co')) {
        const imageId = originalImage.split('/').pop();
        return `https://i.ibb.co/${imageId}/image.png`;
      }
      return originalImage;
    }
    return 'https://via.placeholder.com/400x300/6366f1/ffffff?text=No+Image';
  };

  const review = {
    id: reviewData._id,
    title: product.title || 'Review',
    author: {
      name: reviewData.user?.name || 'Anonymous',
      avatar:
        reviewData.user?.avatar ||
        `https://ui-avatars.com/api/?name=${reviewData.user?.name || 'User'}`,
      role: 'Verified Buyer',
    },
    date: new Date(reviewData.createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    rating: reviewData.rating || 0,
    category: categoryName,
    source: 'TrustEdge',
    sourceLink: '#',
    content: `<p>${reviewData.review || ''}</p>`,
    images: product.images
      ? product.images.map((img: string) => {
          if (img.includes('ibb.co')) {
            const imageId = img.split('/').pop();
            return `https://i.ibb.co/${imageId}/image.png`;
          }
          return img;
        })
      : [],
    likes: reviewData.likes || 0,
    dislikes: 0,
    comments:
      reviewData.comments?.map((c: any, index: number) => ({
        id: index,
        author: c.user?.name || 'User',
        avatar: `https://ui-avatars.com/api/?name=${c.user?.name || 'User'}`,
        date: new Date(c.createdAt || Date.now()).toLocaleDateString(),
        text: c.comment,
      })) || [],
  };

  const relatedReviews = relatedProducts.map((p: any) => {
    return {
      id: p._id,
      category: categoryName,
      categoryColor: 'text-primary',
      title: p.title || 'Product',
      price: p.price || 0,
      rating: p.rating || 0,
      imageUrl: getProductImage(p),
    };
  });

  return (
    <div className="min-h-screen dark:bg-gray-900 pb-12">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-primary">
            Reviews
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/categories?category=${review.category}`}
            className="hover:text-primary"
          >
            {review.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white truncate max-w-xs">
            {review.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Review Header */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {review.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {review.date}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
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
                  </div>
                </div>
                {review.source && (
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Purchased at
                    </p>
                    <a
                      href={review.sourceLink}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      {review.source}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <img
                  src={review.author.avatar}
                  alt={review.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {review.author.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.author.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: review.content }}
              />

              {/* Images Gallery */}
              {review.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {review.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900"
                    >
                      <img
                        src={img}
                        alt={`Review image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    <FaThumbsUp />
                    <span className="font-medium">{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors">
                    <FaThumbsDown />
                    <span className="font-medium">{review.dislikes}</span>
                  </button>
                </div>
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
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Comments ({review.comments.length})
              </h3>

              {/* Comment Form */}
              <div className="flex gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" />
                <div className="flex-1">
                  <textarea
                    placeholder="Add a comment..."
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none h-24"
                  />
                  <div className="flex justify-end mt-2">
                    <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {review.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {comment.author}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="text-xs font-medium text-gray-500 hover:text-primary">
                          Reply
                        </button>
                        <button className="text-xs font-medium text-gray-500 hover:text-primary">
                          Like
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Related Products
              </h3>
              <div className="flex flex-col gap-4">
                {relatedReviews.map((related) => (
                  <Link
                    key={related.id}
                    href={`/reviews/${related.id}`}
                    className="group cursor-pointer block"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-2">
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase text-primary mb-1 block">
                      {related.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {related.title}
                    </h4>
                    <p className="text-lg font-bold text-primary mb-1">
                      ${related.price.toFixed(2)}
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

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Write a Review
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Have you used this product? Share your experience with the
                community.
              </p>
              <Link href="/create-review">
                <button className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
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
