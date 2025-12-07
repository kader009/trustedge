import { Metadata } from 'next';
import UserProfileClient from './UserProfileClient';

export const metadata: Metadata = {
  title: 'My Profile | ReviewPortal',
  description: 'Manage your account settings and profile information.',
};

export default function UserProfilePage() {
  return <UserProfileClient />;
}
