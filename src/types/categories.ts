export interface ICategoryReview {
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

export interface ICategoriesClientProps {
  reviews: ICategoryReview[];
}
