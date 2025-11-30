import CategoriesClient from './CategoriesClient';

async function getProducts() {
  try {
    const response = await fetch(
      'https://trustedge-backend.vercel.app/api/v1/products?limit=20',
      { cache: 'no-store' }
    );
    const data = await response.json();
    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const response = await fetch(
      'https://trustedge-backend.vercel.app/api/v1/category',
      { cache: 'no-store' }
    );
    const data = await response.json();
    if (data.success) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export default async function CategoriesPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Create a map of category ID to category name
  const categoryMap = new Map();
  categories.forEach((cat: any) => {
    categoryMap.set(cat._id, cat.name);
  });

  const reviews = products.map((product: any) => {
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

    // Assign random category color
    const colors = [
      'text-primary',
      'text-pink-500',
      'text-orange-500',
      'text-amber-600',
      'text-teal-600',
      'text-blue-500',
    ];
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    return {
      id: product._id,
      category: categoryMap.get(product.category) || 'Unknown Category',
      categoryColor: randomColor,
      title: product.title,
      rating: product.rating || 5,
      imageUrl: image,
      author: 'Verified Buyer',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      likes: Math.floor(Math.random() * 200) + 50,
      comments: product.numReviews || 0,
      product: {
        title: product.title,
        price: product.price || 0,
        category: categoryMap.get(product.category) || 'Unknown Category',
        image: image,
      },
    };
  });

  return <CategoriesClient reviews={reviews} />;
}