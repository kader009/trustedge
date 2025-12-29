import Image from 'next/image';
import Link from 'next/link';
import { FaTag, FaComment } from 'react-icons/fa';
import { ProductCardProps } from '@/src/types/ProductType';

const ProductCard = ({
  id,
  title,
  rating,
  review,
  image,
  price,
  commentCount,
  tags,
  isFavorite = false,
}: ProductCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
            fill="url(#half-star)"
          />
        </svg>
      );
    }

    // Fill remaining with empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-slate-300"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <Link href={`/reviews/${id}`} className="block h-full">
      <div className="relative flex flex-col rounded-xl overflow-hidden border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm hover:shadow-lg transition-shadow cursor-pointer h-full">
        {isFavorite && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
            <span>Favorite</span>
          </div>
        )}
        <Image
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
          width={400}
          height={192}
          loading='lazy'
        />
        <div className="p-4 flex flex-col grow">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>

          {/* Rating & Price Row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="flex text-secondary">{renderStars()}</div>
              <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
            </div>
            <span className="text-lg font-bold text-primary">${price}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-text-light/80 dark:text-text-dark/80 line-clamp-2 mb-3 grow">
            {review}
          </p>

          {/* Footer: Reviews Count & Tags */}
          <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
            {/* Reviews Count */}
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <FaComment className="w-3 h-3 text-yellow-500" />
              <span>
                {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
              </span>
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    <FaTag className="w-2 h-2" />
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs text-gray-500">
                    +{tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
