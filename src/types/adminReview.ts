export interface Review {
  _id: string;
  title: string;
  description: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  images?: string[];
  user?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  productId?: {
    _id: string;
    name: string;
    image?: string;
  };
  userId?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  createdAt: string;
}