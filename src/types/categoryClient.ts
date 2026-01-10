export interface Review {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  rating: number;
  imageUrl: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  description?: string;
  product: {
    title: string;
    price: number;
    category: string;
    image: string;
  };
}

export interface CategoriesClientProps {
  reviews: Review[];
}