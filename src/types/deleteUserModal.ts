export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface DeleteUserModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}
