export interface EditReviewModalProps {
  review: {
    _id: string;
    rating: number;
    review: string;
    productId?: {
      title?: string;
    };
  };
  onClose: () => void;
  onSuccess: () => void;
}