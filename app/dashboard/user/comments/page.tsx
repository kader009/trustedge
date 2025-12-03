
import { FaComment, FaReply, FaThumbsUp } from 'react-icons/fa';

export default function UserCommentsPage() {

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
          My Comments
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Comments you&apos;ve made on reviews
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500 p-3 rounded-lg text-white">
              <FaComment className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Comments
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <FaReply className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Replies Received
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <FaThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark">
                0
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Likes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-border-light dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-light dark:text-text-dark">
            All Comments
          </h2>
        </div>

        <div className="text-center py-12">
          <FaComment className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You haven&apos;t made any comments yet
          </p>
          <a
            href="/categories"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Browse Reviews
          </a>
        </div>
      </div>
    </div>
  );
}
