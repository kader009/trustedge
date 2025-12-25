import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaCheckCircle,
  FaTag,
  FaComment,
  FaChartLine,
} from 'react-icons/fa';

export const adminLinks = [
  { href: '/dashboard/admin', label: 'Overview', icon: FaHome },
  { href: '/dashboard/admin/users', label: 'Users', icon: FaUsers },
  {
    href: '/dashboard/admin/reviews',
    label: 'All Reviews',
    icon: FaClipboardList,
  },
  {
    href: '/dashboard/admin/pending-reviews',
    label: 'Pending Reviews',
    icon: FaCheckCircle,
  },
  { href: '/dashboard/admin/categories', label: 'Categories', icon: FaTag },
  {
    href: '/dashboard/admin/pending-comments',
    label: 'Pending Comments',
    icon: FaComment,
  },
  { href: '/dashboard/admin/comments', label: 'All Comments', icon: FaComment },
  { href: '/dashboard/admin/analytics', label: 'Analytics', icon: FaChartLine },
];
