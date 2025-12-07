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
      next: { revalidate: CACHE_REVALIDATE },
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

export async function getReviews(params?: {
  page?: number;
  limit?: number;
  category?: string;
  rating?: number;
  search?: string;
  sort?: string;
}) {
  try {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.category) queryParams.append('category', params.category);
    if (params?.rating) queryParams.append('rating', params.rating.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.sort) queryParams.append('sort', params.sort);

    const url = queryParams.toString()
      ? `${API_BASE_URL}/reviews?${queryParams.toString()}`
      : `${API_BASE_URL}/reviews`;

    const response = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    const data = await response.json();
    return data.success
      ? { reviews: data.data, pagination: data.pagination || {} }
      : { reviews: [], pagination: {} };
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return { reviews: [], pagination: {} };
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

export async function getUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users/admin/all-users`, {
      next: { revalidate: CACHE_REVALIDATE },
    });

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return [];
  }
}

// Fetch all data at once (for pages that need multiple data sources)
export async function getAllData() {
  const [products, categories, reviews, users] = await Promise.all([
    getProducts(1000),
    getCategories(),
    getReviews(),
    getUsers(),
  ]);

  return { products, categories, reviews, users };
}
