export interface IUser {
  _id: string;
  name: string;
  email: string;
  image?: string;
  avatar?: string;
  profileImg?: string;
  role: string;
  status?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
}
