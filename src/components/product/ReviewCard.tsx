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
  comments: number;
}

const ReviewCard = ({
  id,
  category,
  categoryColor,
  title,
  rating,
  imageUrl,
  author,
  date,
  likes,
  comments,
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
      <div className="flex flex-col h-full bg-neutral-100 dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 transition-shadow hover:shadow-lg cursor-pointer">
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
          <span
            className={`text-xs font-semibold uppercase ${categoryColor} mb-2`}
          >
            {category}
          </span>
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2 leading-tight hover:underline">
            {title}
          </h3>
          <div className="flex items-center gap-1 mb-3">{renderStars()}</div>
          <div className="mt-auto pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 flex justify-between items-center text-sm text-neutral-300 dark:text-neutral-500">
            <p>
              by @{author} on {date}
            </p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-success"
                >
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
                {likes}
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                    clipRule="evenodd"
                  />
                </svg>
                {comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
