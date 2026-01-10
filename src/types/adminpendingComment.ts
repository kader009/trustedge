export interface Comment {
  _id: string;
  text: string;
  image: string;
  reviewId: string;
  user: {
    _id: string;
    image: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt?: string;
}
