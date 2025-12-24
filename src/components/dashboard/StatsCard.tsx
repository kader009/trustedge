import Link from 'next/link';
import { IconType } from 'react-icons';

interface StatsCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: IconType;
  color?: string;
  href?: string;
}

export default function StatsCard({
  label,
  value,
  change,
  icon: Icon,
  color = 'bg-primary',
  href,
}: StatsCardProps) {
  const content = (
    <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 hover:shadow-lg transition-all hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`${color} p-3 rounded-lg text-white`}>
          <Icon className="w-6 h-6" />
        </div>
        {change && (
          <span
            className={`text-sm font-semibold ${
              change.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {change}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold text-text-light dark:text-text-dark mb-1">
          {value}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-200">{label}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="cursor-pointer">
        {content}
      </Link>
    );
  }

  return content;
}
