import Link from 'next/link';
import Image from 'next/image';

interface ReviewCardProps {
  id: number | string;
  category: string;
  categoryColor: string;
  title: string;
  rating: number;
  imageUrl: string;
  author: string;
  date: string;
  likes: number;
  commentCount: number;
  description?: string;
  product?: {
    title: string;
    price: number;
    category: string;
    image?: string;
  };
}

const ReviewCard = ({
  id,
  categoryColor,
  title,
  rating,
  imageUrl,
  commentCount,
  description,
  product,
}: ReviewCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-5 h-5 ${
            i < fullStars
              ? 'text-accent'
              : 'text-neutral-300 dark:text-neutral-500'
          }`}
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
      <div className="flex flex-col h-full bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 transition-shadow hover:shadow-lg cursor-pointer">
        <div className="relative aspect-4/3 w-full">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          {product && (
            <>
              <span
                className={`text-xs font-semibold uppercase ${categoryColor} mb-2 block`}
              >
                {product.category}
              </span>
              <span className="text-lg font-bold text-primary mb-2 block">
                $
                {Number(product.price) % 1 === 0
                  ? Number(product.price)
                  : Number(product.price).toFixed(2)}
              </span>
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2 leading-tight">
                {product.title}
              </h3>
              <div className="flex items-center gap-1 mb-3">
                {renderStars()}
              </div>
              {description && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 mt-auto">
                  {description}
                </p>
              )}
              {/* Comment Count */}
              <div className="flex items-center gap-1 mt-4 text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 text-accent"
                >
                  <path d="M18 10c0 3.314-3.582 6-8 6-.98 0-1.926-.09-2.818-.26-.31-.06-.63-.09-.95-.09-.37 0-.73.04-1.08.13l-2.13.53a1 1 0 0 1-1.22-1.22l.53-2.13c.09-.35.13-.71.13-1.08 0-.32-.03-.64-.09-.95C2.09 11.926 2 10.98 2 10c0-3.314 3.582-6 8-6s8 2.686 8 6z" />
                </svg>
                {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
