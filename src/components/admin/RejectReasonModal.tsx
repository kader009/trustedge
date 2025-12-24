'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface RejectReasonModalProps {
  onConfirm: (reason: string) => void;
  onCancel: () => void;
  isLoading: boolean;
}

const PREDEFINED_REASONS = [
  'Inappropriate content',
  'Fake or misleading information',
  'Violates community guidelines',
  'Contains personal information',
];

export default function RejectReasonModal({
  onConfirm,
  onCancel,
  isLoading,
}: RejectReasonModalProps) {
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = () => {
    const finalReason =
      selectedReason === 'Other' ? customReason : selectedReason;
    if (finalReason.trim()) {
      onConfirm(finalReason);
    }
  };

  const finalReason =
    selectedReason === 'Other' ? customReason : selectedReason;
  const isValid = finalReason.trim().length >= 10;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-card-dark rounded-xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-500 dark:text-white">
            Reject Review
          </h3>
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
          >
            <FaTimes className="text-gray-500 dark:text-gray-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-200">
            Please select a reason for rejecting this review. This will be sent
            to the user.
          </p>

          {/* Predefined Reasons */}
          <div className="space-y-2">
            {PREDEFINED_REASONS.map((reason) => (
              <label
                key={reason}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  disabled={isLoading}
                  className="text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-500 dark:text-gray-200">
                  {reason}
                </span>
              </label>
            ))}
          </div>

          {/* Custom Reason Input */}
          {selectedReason === 'Other' && (
            <textarea
              value={customReason}
              onChange={(e) => setCustomReason(e.target.value)}
              placeholder="Enter custom reason..."
              disabled={isLoading}
              maxLength={500}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-500 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none h-24 text-sm"
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid || isLoading}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Rejecting...' : 'Reject Review'}
          </button>
        </div>
      </div>
    </div>
  );
}
