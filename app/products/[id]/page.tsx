'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaComment,
  FaShoppingCart,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// This will be replaced with actual API call
export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [activeImage, setActiveImage] = useState(0);

  // Mock data - replace with actual API call
  const product = {
    _id: productId,
    title: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear audio with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and premium comfort padding.',
    price: 299.99,
    rating: 4.5,
    totalReviews: 128,
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800',
    ],
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Premium Comfort Padding',
      'Bluetooth 5.0',
      'Quick Charge Technology',
    ],
    purchaseLink: 'https://amazon.com/example',
    status: 'published',
  };

  const reviews = [
    {
      _id: '1',
      author: 'John Doe',
      rating: 5,
      comment: "Excellent sound quality! Best headphones I've ever owned.",
      date: '2024-12-01',
      upvotes: 24,
      downvotes: 2,
    },
    {
      _id: '2',
      author: 'Jane Smith',
      rating: 4,
      comment:
        'Great product, but a bit pricey. Worth it for the quality though.',
      date: '2024-11-28',
      upvotes: 18,
      downvotes: 1,
    },
  ];

  return (
    <div className="flex flex-1 flex-col px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Back Button */}
        <Link
          href="/reviews"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
        >
          ← Back to Reviews
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900">
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx
                      ? 'border-primary'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-black text-text-light dark:text-white mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        star <= product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {product.rating} ({product.totalReviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary mb-6">
                ${product.price}
              </p>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-6">
              {product.purchaseLink && (
                <a
                  href={product.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors"
                >
                  <FaShoppingCart /> Buy Now
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              )}
              <Link
                href="/create-review"
                className="flex items-center justify-center gap-2 px-6 h-14 rounded-lg border-2 border-primary text-primary text-base font-bold hover:bg-primary/5 transition-colors"
              >
                <FaStar /> Write Review
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black text-text-light dark:text-white">
              Customer Reviews ({product.totalReviews})
            </h2>
            <Link
              href="/create-review"
              className="px-6 h-12 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Write a Review
            </Link>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {review.author}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`text-sm ${
                            star <= review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {review.comment}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <FaThumbsUp /> {review.upvotes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    <FaThumbsDown /> {review.downvotes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <FaComment /> Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
