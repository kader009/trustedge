export interface Category {
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  title?: string;
  description?: string;
  images?: string[];
  category?: string;
  rating?: number;
  price?: number;
}

export interface Related {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface Comment {
  _id: string;
  user?: {
    name?: string;
    image?: string;
    avatar?: string;
  };
  createdAt?: string;
  comment?: string;
}
