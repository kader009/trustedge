export interface ICategory {
  _id: string;
  name: string;
  description?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  _id: string;
  title?: string;
  description?: string;
  images?: string[];
  category?: string;
  rating?: number;
  price?: number;
  numReviews?: number;
  commentCount?: number;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface IReview {
  _id: string;
  title?: string;
  description?: string;
  review?: string;
  content?: string;
  images?: string[];
  category?: string;
  price?: string;
  user: {
    _id?: string;
    name: string;
    avatar?: string | null;
    image?: string;
    email?: string;
  };
  productId?: string | IProduct;
  rating: number;
  status?: string;
  likes?: number;
  dislikes?: number;
  comments?: any[] | number;
  commentCount?: number;
  purchaseSource?: string;
  createdAt?: string;
  updatedAt?: string;
}
