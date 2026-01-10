export interface Review {
  _id: string;
  title: string;
  description: string;
  images?: string[];
  category?: string;
  user: {
    _id: string;
    name: string;
    email: string;
    avatar?: string;
    image?: string;
  };
  rating: number;
  createdAt: string;
}