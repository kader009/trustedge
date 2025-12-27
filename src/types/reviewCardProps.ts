export interface ReviewCardProps {
  id: number | string;
  category: string;
  categoryColor: string;
  title: string;
  rating: number;
  imageUrl: string;
  author: string;
  date: string;
  likes: number;
  commentCount: number;
  description?: string;
  product?: {
    title: string;
    price: number;
    category: string;
    image?: string;
  };
}