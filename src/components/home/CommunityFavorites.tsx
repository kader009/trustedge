import ProductCard from '../product/ProductCard';
import { Product } from '@/src/types/ProductType';
import { getProducts } from '@/src/lib/api';

const CommunityFavorites = async () => {
  const products: Product[] = await getProducts(8);

  const favoriteProducts = products.slice(0, 4).map((product, index) => {
    let image =
      'https://via.placeholder.com/400x192/6366f1/ffffff?text=No+Image';

    if (product.images && product.images.length > 0) {
      const originalImage = product.images[0];
      if (originalImage.includes('ibb.co')) {
        const imageId = originalImage.split('/').pop();
        image = `https://i.ibb.co/${imageId}/image.png`;
      } else {
        image = originalImage;
      }
    }

    return {
      id: product._id,
      title: product.title || 'Untitled Product',
      rating: product.rating || 4.5,
      review: product.description
        ? product.description.substring(0, 100) + '...'
        : 'No description available',
      image: image,
      isFavorite: true,
    };
  });

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
        Community Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CommunityFavorites;
