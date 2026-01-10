export interface Comment {
  _id: string;
  text: string;
  review: {
    _id: string;
    title: string;
  };
  createdAt: string;
  updatedAt?: string;
}