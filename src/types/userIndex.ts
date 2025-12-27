export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

export interface Review {
  _id: string;
  title: string;
  user: {
    name: string;
    avatar?: string;
    image?: string;
  };
  rating: number;
  description: string;
}

export interface Comment {
  _id: string;
  content: string;
  status?: string;
  isApproved?: boolean;
}