export interface TComment {
  _id: string;
  content?: string;
  comment?: string;
  text?: string;
  reviewId?: string;
  review?: {
    _id: string;
  };
  user: {
    _id: string;
    name: string;
    image?: string;
    avatar?: string;
    profileImg?: string;
  };
  createdAt: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface ICommentResponse {
  success: boolean;
  message: string;
  data: {
    comments: TComment[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}
