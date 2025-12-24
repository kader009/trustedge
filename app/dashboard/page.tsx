'use client';

import AdminDashboardSkeleton  from '@/src/components/skeletons/AdminSkeleton';
import UserDashboardSkeleton from '@/src/components/skeletons/UserSkeleton';
import { useAppSelector } from '@/src/redux/hook';
import { RootState } from '@/src/redux/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user } = useAppSelector((state: RootState) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        router.replace('/dashboard/admin');
      } else {
        router.replace('/dashboard/user');
      }
    }
  }, [user, router]);

  // Show role-specific skeleton while determining role
  if (!user) {
    // Default to user skeleton if role unknown
    return <UserDashboardSkeleton />;
  }

  // Show correct skeleton during redirect
  return user.role === 'admin' ? (
    <AdminDashboardSkeleton />
  ) : (
    <UserDashboardSkeleton />
  );
}
