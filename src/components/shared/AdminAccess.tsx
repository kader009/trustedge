'use client';

const AdminAccess = () => {
  return (
    <div className="text-center text-sm text-gray-600 mb-6">
      <p className="font-semibold text-gray-700 mb-2 dark:text-white">Admin Demo Access</p>

      <div className="flex justify-center items-center space-x-2 mb-1">
        <span className="dark:text-white">
          Email: <span className="text-blue-600 dark:text-white">kadermolla@gmail.com</span>
        </span>
        <button
          onClick={() => navigator.clipboard.writeText('kadermolla@gmail.com')}
          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded"
        >
          Copy
        </button>
      </div>

      <div className="flex justify-center items-center space-x-2">
        <span className="dark:text-white">
          Password: <span className="text-blue-600 dark:text-white">78757278</span>
        </span>
        <button
          onClick={() => navigator.clipboard.writeText('78757278')}
          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default AdminAccess;
