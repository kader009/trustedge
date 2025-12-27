export interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onSave: (updatedData: Partial<User>) => void;
}

interface User {
  _id: string;
  name: string;
  email: string;
  image?: string;
  role: string;
  status?: string;
}