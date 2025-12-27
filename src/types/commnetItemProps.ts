import { TComment } from "./comment";

export interface CommentItemProps {
  comment: TComment;
  onDeleted: () => void;
  onUpdated: () => void;
  reviewId?: string;
}