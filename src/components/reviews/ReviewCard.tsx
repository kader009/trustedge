import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaThumbsUp, FaUser, FaCalendar } from 'react-icons/fa';

interface ReviewCardProps {
  review: {
    _id: string;
    title: string;
    rating: number;
    productId?: {
      images?: string[];
      title?: string;
    };
    user?: {
      name: string;
      image?: string;
    };
    category?: {
      name: string;
    };
    createdAt: string;
    voteCount?: number;
  };
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const imageUrl =
    review.productId?.images?.[0] ||
    'https://via.placeholder.com/300x200?text=No+Image';

  const userName = review.user?.name || 'Anonymous';
  const categoryName = review.category?.name || 'Uncategorized';
  const voteCount = review.voteCount || 0;

  const formattedDate = new Date(review.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/reviews/${review._id}`}
      className="group bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <Image
          src={imageUrl}
          alt={review.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {categoryName}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {review.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            {review.rating}.0
          </span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          {/* Author */}
          <div className="flex items-center gap-2">
            <FaUser className="w-3 h-3" />
            <span className="truncate max-w-[120px]">{userName}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1">
            <FaCalendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Vote Count */}
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
          <FaThumbsUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {voteCount} helpful
          </span>
        </div>
      </div>
    </Link>
  );
}
