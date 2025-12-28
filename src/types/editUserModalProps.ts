export interface EditUserModalProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
}

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  image?: string;
}
