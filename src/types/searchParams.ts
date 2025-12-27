export interface SearchParams {
  page?: string;
  category?: string;
  rating?: string;
  search?: string;
  sort?: string;
}

export interface ReviewData {
  _id: string;
  title: string;
  rating: number;
  createdAt: string;
  productId?: { images?: string[]; title?: string };
  user?: { name: string; image?: string };
  category?: { name: string };
  voteCount?: number;
}
