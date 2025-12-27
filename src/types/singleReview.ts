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

export interface Releted {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface Comment {
  user?: { name?: string };
  createdAt?: string;
  comment?: string;
}
