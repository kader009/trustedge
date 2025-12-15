import { FaUsers, FaStar, FaClock } from 'react-icons/fa';

export const adminStats = [
  {
    label: 'Total Users',
    value: '0',
    change: '+12%',
    icon: FaUsers,
    color: 'bg-primary',
    href: '/dashboard/admin/users',
  },
  {
    label: 'Total Reviews',
    value: '0',
    change: '+8%',
    icon: FaStar,
    color: 'bg-primary',
    href: '/dashboard/admin/reviews',
  },
  {
    label: 'Pending Reviews',
    value: '0',
    change: '-5%',
    icon: FaClock,
    color: 'bg-primary',
    href: '/dashboard/admin/pending-reviews',
  },
];
