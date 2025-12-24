import { FaHome, FaUser, FaStar, FaComment, FaLock } from 'react-icons/fa';

export const userLinks = [
  { href: '/dashboard/user', label: 'Overview', icon: FaHome },
  { href: '/dashboard/user/profile', label: 'Profile', icon: FaUser },
  { href: '/dashboard/user/reviews', label: 'My Reviews', icon: FaStar },
  { href: '/dashboard/user/comments', label: 'My Comments', icon: FaComment },
  {
    href: '/dashboard/user/change-password',
    label: 'Change Password',
    icon: FaLock,
  },
];
