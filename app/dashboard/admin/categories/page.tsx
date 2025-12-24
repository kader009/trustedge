'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  useGetAllCategoriesAdminQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} from '@/src/redux/store/api/endApi';
import { toast } from 'sonner';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaTag } from 'react-icons/fa';
import CategorySkeleton from '@/src/components/skeletons/CategorySkeleton';

interface Category {
  _id: string;
  name: string;
  slug?: string;
  image?: string;
  createdAt?: string;
}

export default function CategoryManagementPage() {
  const { data: categoriesData, isLoading: isLoadingCategories } =
    useGetAllCategoriesAdminQuery(undefined);
  const [createCategory, { isLoading: isCreating }] =
    useCreateCategoryMutation(undefined);
  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation(undefined);
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation(undefined);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    image: '',
  });

  const categories = categoriesData?.data || [];

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        slug: category.slug || '',
        image: category.image || '',
      });
    } else {
      setEditingCategory(null);
      setFormData({ name: '', slug: '', image: '' });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategory(null);
    setFormData({ name: '', slug: '', image: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Category name is required');
      return;
    }

    try {
      if (editingCategory) {
        await updateCategory({
          id: editingCategory._id,
          data: formData,
        }).unwrap();
        toast.success('Category updated successfully!');
      } else {
        await createCategory(formData).unwrap();
        toast.success('Category created successfully!');
      }
      handleCloseModal();
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } };
      toast.error(err?.data?.message || 'Something went wrong');
    }
  };

  const handleDelete = (id: string, name: string) => {
    toast(
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Delete Category</p>
        <p className="text-sm">
          Are you sure you want to delete &quot;{name}&quot;? This action cannot
          be undone.
        </p>
      </div>,
      {
        action: {
          label: 'Delete',
          onClick: async () => {
            try {
              await deleteCategory(id).unwrap();
              toast.success('Category deleted successfully!');
            } catch (error: unknown) {
              const err = error as { data?: { message?: string } };
              toast.error(err?.data?.message || 'Failed to delete category');
            }
          },
        },
        cancel: {
          label: 'Cancel',
          onClick: () => {},
        },
      }
    );
  };

  return (
    <div className="flex flex-1 flex-col px-0 sm:px-1 md:px-2 py-2">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 py-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-text-light dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Category Management
          </p>
          <p className="text-text-light dark:text-white text-base font-normal leading-normal">
            Manage product categories for the portal.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 h-12 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <FaPlus /> Add Category
        </button>
      </div>

      {/* Categories List */}
      <div className="px-1 py-4">
        {isLoadingCategories ? (
          <CategorySkeleton />
        ) : categories.length === 0 ? (
          <div className="text-center py-12">
            <FaTag className="mx-auto text-6xl text-gray-500 dark:text-gray-200 mb-4" />
            <p className="text-gray-500 dark:text-gray-200 text-lg">
              No categories found
            </p>
            <p className="text-gray-500 dark:text-gray-200 text-sm mt-2">
              Create your first category to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category: Category) => (
              <div
                key={category._id}
                className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                      {category.image ? (
                        <Image
                          src={
                            category.image.includes('ibb.co.com')
                              ? `https://i.ibb.co/${category.image
                                  .split('/')
                                  .pop()}/image.png`
                              : category.image
                          }
                          alt={category.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <FaTag className="text-primary text-xl" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-gray-500 dark:text-white text-lg font-bold">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => handleOpenModal(category)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-gray-100 dark:bg-card-dark text-gray-500 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id, category.name)}
                    disabled={isDeleting}
                    className="flex-1 flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-card-dark rounded-xl max-w-md w-full border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-gray-900 dark:text-white text-xl font-bold">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-200 cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 dark:text-white text-sm font-medium">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., Electronics, Books, Clothing"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 dark:text-white text-sm font-medium">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g., electronics, books, clothing"
                  required
                />
                <p className="text-xs text-gray-500 dark:text-gray-200">
                  URL-friendly version (lowercase, no spaces)
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-500 dark:text-white text-sm font-medium">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-card-dark text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 h-12 rounded-lg bg-gray-100 dark:bg-card-dark text-gray-800 dark:text-gray-200 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating || isUpdating}
                  className="flex-1 h-12 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isCreating || isUpdating
                    ? 'Saving...'
                    : editingCategory
                    ? 'Update Category'
                    : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
