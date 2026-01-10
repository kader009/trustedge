export interface ReviewCardProps {
  review: {
    _id: string;
    title: string;
    rating: number;
    productId?: {
      images?: string[];
      title?: string;
    };
    user?: {
      name: string;
      image?: string;
    };
    category?: {
      name: string;
    };
    createdAt: string;
    voteCount?: number;
  };
}