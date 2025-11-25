import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaFlag,
} from 'react-icons/fa';
import Link from 'next/link';

export default function ReviewDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock data for the review - In a real app, fetch based on params.id
  const review = {
    id: params.id,
    title: 'Incredible Sound, Unbeatable Comfort',
    author: {
      name: 'soundguy',
      avatar: 'https://i.pravatar.cc/150?u=soundguy',
      role: 'Verified Buyer',
    },
    date: 'Nov 02, 2023',
    rating: 5,
    category: 'Electronics',
    source: 'Amazon',
    sourceLink: '#',
    content: `
      <p class="mb-4">I've been using these headphones for about two weeks now, and I am absolutely blown away by the sound quality. The bass is deep and punchy without muddying the mids and highs. Whether I'm listening to classical music or heavy metal, everything sounds crystal clear.</p>
      <p class="mb-4">The noise cancellation is top-notch. I wear these on my commute, and they completely block out the sound of the train. It's like being in my own little world.</p>
      <p>Comfort is another huge plus. The ear cups are soft and don't press too hard on my ears, even after wearing them for hours. Battery life is also impressive; I've only had to charge them once since I got them.</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
    ],
    likes: 215,
    dislikes: 12,
    comments: [
      {
        id: 1,
        author: 'AudioFan99',
        avatar: 'https://i.pravatar.cc/150?u=AudioFan99',
        date: 'Nov 03, 2023',
        text: "Totally agree about the bass! It's surprising for this price point.",
      },
      {
        id: 2,
        author: 'CommuterJoe',
        avatar: 'https://i.pravatar.cc/150?u=CommuterJoe',
        date: 'Nov 04, 2023',
        text: 'How is the microphone quality for calls?',
      },
    ],
  };

  // Mock related reviews
  const relatedReviews = [
    {
      id: 3,
      category: 'Electronics',
      categoryColor: 'text-primary',
      title: 'The Smartwatch That Does It All',
      rating: 4,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3-S3_0rWgNKiMGsJ0Xjx4nfGIe6k5xHv95w-4tC2TBsuKYGbgb0u0bAWPZysdcnYbTsnHM7zdeufYK1nqhBQ16TpX2_SvO5awhoLhPzDyeRmq2mKOSzwiHAHAFpnIgy5x8OE9Sa361ZRs7r-isvjgalqlHS8g4HNxNEtO_k0omzl6pXZdZFhbXwMnT4tlv3ngjQUKAHqMT1fLb1BdsebqcquY_gLss-GIfixU2qMmxVto6YbXb8RoNbOuOhGqdrXe1UiGIah_Aw',
      author: 'techsavvy',
      date: 'Oct 25, 2023',
      likes: 121,
      comments: 18,
    },
    {
      id: 4,
      category: 'Electronics',
      categoryColor: 'text-primary',
      title: 'Best Wireless Earbuds 2023',
      rating: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
      author: 'musiclover',
      date: 'Oct 22, 2023',
      likes: 98,
      comments: 15,
    },
  ];

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
                      {review.rating}.0/5.0
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
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
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
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
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
                Related Reviews
              </h3>
              <div className="flex flex-col gap-4">
                {relatedReviews.map((related) => (
                  <div key={related.id} className="group cursor-pointer">
                    <div className="aspect-video rounded-lg overflow-hidden mb-2">
                      <img
                        src={related.imageUrl}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {related.rating}.0
                      </span>
                    </div>
                  </div>
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
