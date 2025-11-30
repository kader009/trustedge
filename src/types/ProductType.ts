export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  numReviews: number;
  tags: string[];
}

export interface ProductCardProps {
  title: string;
  rating: number;
  review: string;
  image: string;
  isFavorite?: boolean;
}
