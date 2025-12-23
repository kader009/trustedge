export type ReviewType = {
  _id: string;
  rating: number;
  review: string;
  status: string;
  createdAt?: string;
  productId?: { title?: string; images?: string[] };
  adminFeedback?: string;
  views?: number;
  likes?: number;
} | null;
