'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHeart, FaStar, FaTrash } from 'react-icons/fa';
import { toast } from 'sonner';
import Image from 'next/image';

interface Favorite {
  id: string;
  reviewId: string;
  title: string;
  rating: number;
  category: string;
  image?: string;
  addedAt: string;
}

export default function UserFavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('userFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('userFavorites', JSON.stringify(updatedFavorites));
    toast.success('Removed from favorites');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Favorites
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Products and reviews you&apos;ve saved
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaHeart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {favorites.length}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Favorites
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-lg text-white">
              <FaStar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                {
                  favorites.filter(
                    (fav) =>
                      new Date(fav.addedAt).getTime() >
                      Date.now() - 7 * 24 * 60 * 60 * 1000
                  ).length
                }
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Added This Week
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Favorites List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            All Favorites
          </h2>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              You haven&apos;t added any favorites yet
            </p>
            <Link
              href="/reviews"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Browse Reviews
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {favorite.image && (
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                    <Image
                      src={favorite.image}
                      alt={favorite.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {favorite.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${
                            i < favorite.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/reviews/${favorite.reviewId}`}
                    className="text-gray-900 dark:text-white font-bold hover:text-primary transition-colors line-clamp-2"
                  >
                    {favorite.title}
                  </Link>

                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                    Added {new Date(favorite.addedAt).toLocaleDateString()}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <Link
                      href={`/reviews/${favorite.reviewId}`}
                      className="flex-1 text-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Review
                    </Link>
                    <button
                      onClick={() => removeFavorite(favorite.id)}
                      className="px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                      title="Remove from favorites"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Note */}
      {favorites.length > 0 && (
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-blue-800 dark:text-blue-300 text-sm">
            <strong>Note:</strong> Favorites are stored locally in your browser.
            They will be available across sessions on this device.
          </p>
        </div>
      )}
    </div>
  );
}
