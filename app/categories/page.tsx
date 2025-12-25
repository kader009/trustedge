import CategoriesClient from './CategoriesClient';
import FilterSidebar from '@/src/components/product/FilterSidebar';
import { getProducts, getCategories } from '@/src/lib/api';

interface Category {
  _id: string;
  name: string;
}

interface Product {
  _id: string;
  title: string;
  images?: string[];
  category: string;
  rating?: number;
  price?: number;
  numReviews?: number;
  commentCount?: number;
  description?: string;
}

export default async function CategoriesPage() {
  const [products, categories] = await Promise.all([
    getProducts(50),
    getCategories(),
  ]);

  // Create a map of category ID to category name
  const categoryMap = new Map<string, string>();
  categories.forEach((cat: Category) => {
    categoryMap.set(cat._id, cat.name);
  });

  const reviews = products.map((product: Product, index: number) => {
    let image =
      'https://via.placeholder.com/400x300/6366f1/ffffff?text=No+Image';

    if (product.images && product.images.length > 0) {
      const originalImage = product.images[0];
      if (originalImage.includes('ibb.co')) {
        const imageId = originalImage.split('/').pop();
        image = `https://i.ibb.co/${imageId}/image.png`;
      } else {
        image = originalImage;
      }
    }

    // Assign category color based on index for consistent rendering
    const colors = [
      'text-primary',
      'text-pink-500',
      'text-orange-500',
      'text-amber-600',
      'text-teal-600',
      'text-blue-500',
    ];
    const categoryColor = colors[index % colors.length];

    return {
      id: product._id,
      category: product.category || 'Unknown Category',
      categoryColor: categoryColor,
      title: product.title,
      rating: product.rating || 5,
      imageUrl: image,
      author: 'Verified Buyer',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      likes: (index + 1) * 23 + 50,
      comments: product.numReviews || product.commentCount || 0,
      description: product.description,
      product: {
        title: product.title,
        price: product.price || 0,
        category: product.category || 'Unknown Category',
        image: image,
      },
    };
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar />
          <CategoriesClient reviews={reviews} />
        </div>
      </main>
    </div>
  );
}
