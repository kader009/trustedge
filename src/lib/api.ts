// Centralized API functions with proper caching
const API_BASE_URL = 'https://trustedge-backend.vercel.app/api/v1';

// Cache duration: 5 minutes (300 seconds)
const CACHE_REVALIDATE = 300;

export async function getProducts(limit?: number) {
  try {
    const url = limit
      ? `${API_BASE_URL}/products?limit=${limit}`
      : `${API_BASE_URL}/products`;

    const response = await fetch(url, {
      next: { revalidate: CACHE_REVALIDATE }, // Cache for 5 minutes
    });

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/category`, {
      next: { revalidate: CACHE_REVALIDATE }, // Cache for 5 minutes
    });

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

export async function getReviews() {
  try {
    const response = await fetch(`${API_BASE_URL}/review`, {
      next: { revalidate: CACHE_REVALIDATE }, // Cache for 5 minutes
    });

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return [];
  }
}

export async function getReviewById(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/review/${id}`, {
      next: { revalidate: CACHE_REVALIDATE },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error(`Failed to fetch review ${id}:`, error);
    return null;
  }
}

// Fetch all data at once (for pages that need multiple data sources)
export async function getAllData() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews(),
  ]);

  return { products, categories, reviews };
}
