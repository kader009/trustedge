'use client';

import { useState } from 'react';
import { FaTimes, FaCamera } from 'react-icons/fa';
import Image from 'next/image';
import { useUpdateUserProfileMutation } from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import { EditProfileModalProps } from '@/src/types/editProfileModalProp';

export default function EditProfileModal({
  isOpen,
  onClose,
  user,
  onSave,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: user.name || '',
    image: user.image || '',
  });

  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await updateProfile(formData).unwrap();
      onSave(result.data || formData); // Update local state with returned data or form data
      toast.success('Profile updated successfully');
      onClose();
    } catch (error: unknown) {
      console.error('Failed to update profile:', error);
      const errorMessage =
        error && typeof error === 'object' && 'data' in error
          ? (error.data as { message?: string })?.message
          : 'Failed to update profile';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-card-dark rounded-2xl w-full max-w-md shadow-xl border border-border-light dark:border-border-dark animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
          <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
            Edit Profile
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Upload Preview */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700">
                {formData.image ? (
                  <Image
                    src={formData.image}
                    alt="Profile Preview"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary text-white flex items-center justify-center text-3xl font-bold">
                    {formData.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaCamera className="text-white text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-200">
              Click to upload new photo
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Profile Image URL
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
