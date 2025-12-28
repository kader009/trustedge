export interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}
