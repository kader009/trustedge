import { IconType } from 'react-icons';

export interface StatsCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: IconType;
  color?: string;
  href?: string;
}