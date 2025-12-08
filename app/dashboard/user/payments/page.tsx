'use client';
import {
  FaReceipt,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaCreditCard,
} from 'react-icons/fa';

interface Payment {
  _id: string;
  reviewId: string;
  reviewTitle: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: string;
  transactionId: string;
  date: string;
}

export default function PaymentHistoryPage() {
  // Mock data - replace with actual API call when payment system is implemented
  const payments: Payment[] = [
    {
      _id: '1',
      reviewId: 'rev123',
      reviewTitle: 'Premium Review: Best Laptop 2024',
      amount: 5.99,
      status: 'completed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-2024-001',
      date: '2024-12-05T10:30:00Z',
    },
    {
      _id: '2',
      reviewId: 'rev456',
      reviewTitle: 'Premium Review: Top Gaming Mouse',
      amount: 3.99,
      status: 'completed',
      paymentMethod: 'PayPal',
      transactionId: 'TXN-2024-002',
      date: '2024-12-01T14:20:00Z',
    },
  ];

  const totalSpent = payments
    .filter((p) => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        icon: FaCheckCircle,
      },
      pending: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/20',
        text: 'text-yellow-600 dark:text-yellow-400',
        icon: FaClock,
      },
      failed: {
        bg: 'bg-red-50 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
        icon: FaClock,
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span
        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${config.bg} ${config.text}`}
      >
        <Icon className="text-xs" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="flex flex-1 flex-col px-4 sm:px-6 md:px-8 py-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Payment History
          </p>
          <p className="text-text-light dark:text-white text-base font-normal leading-normal">
            View your premium review purchases and transaction history.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FaReceipt className="text-primary text-xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Total Purchases
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {payments.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <FaCreditCard className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Total Spent
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${totalSpent.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <FaCheckCircle className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Successful
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {payments.filter((p) => p.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="p-4">
        {payments.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800">
            <FaReceipt className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No payment history
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              Your premium review purchases will appear here
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Review
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Transaction ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {payments.map((payment) => (
                    <tr
                      key={payment._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {new Date(payment.date).toLocaleDateString()}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(payment.date).toLocaleTimeString()}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900 dark:text-white max-w-xs truncate">
                          {payment.reviewTitle}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                          {payment.transactionId}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          ${payment.amount.toFixed(2)}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {payment.paymentMethod}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(payment.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                          <FaDownload className="text-xs" />
                          Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Info Note */}
      <div className="p-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-blue-800 dark:text-blue-300 text-sm">
            <strong>Note:</strong> Payment system is currently in development.
            This is a preview of how your payment history will appear once the
            feature is fully implemented.
          </p>
        </div>
      </div>
    </div>
  );
}
