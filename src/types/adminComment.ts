export interface Comment {
  _id: string;
  content?: string;
  text?: string;
  reviewId?: string;
  review?: string;
  userId?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  user?: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    avatar?: string;
  };
  status?: string;
  createdAt: string;
  updatedAt?: string;
}