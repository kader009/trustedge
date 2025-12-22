export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  numReviews: number;
  commentCount: number;
  tags: string[];
}

export interface ProductCardProps {
  id: string;
  title: string;
  rating: number;
  review: string;
  image: string;
  price: number;
  numReviews: number;
  commentCount: number;
  tags: string[];
  isFavorite?: boolean;
}
