'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/redux/hook';
import { setUser } from '@/src/redux/userAuth/userSlice';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useSocialLoginMutation } from '@/src/redux/store/api/endApi';

export default function AuthSync() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.user);
  const router = useRouter();
  const [socialLogin] = useSocialLoginMutation();
  const processedSessionId = useRef<string | null>(null);

  useEffect(() => {
    const syncAuth = async () => {
      // If we have a next-auth session and no redux token
      if (status === 'authenticated' && session?.user?.email && !token) {
        // Prevent double processing in strict mode
        if (processedSessionId.current === session.user.email) return;
        processedSessionId.current = session.user.email;

        try {
          console.log('Syncing social login with backend...');

          const userInfo = {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            // @ts-ignore
            provider: session.user?.provider || 'google',
          };

          const response = await socialLogin(userInfo).unwrap();

          if (response.success && response.data) {
            dispatch(
              setUser({
                user: response.data.user,
                token: response.data.accessToken,
                refreshToken: response.data.refreshToken,
              })
            );
            toast.success('Successfully logged in via Social Account!');
            router.refresh();
          }
        } catch (error: any) {
          // If backend fails (e.g., user not found or backend not ready), log it
          console.error('Backend social login failed:', error);
          if (error?.status === 404) {
            console.error(
              'Account not found. Please register first or backend implementation missing.'
            );
          } else {
            // Silently fail or show error depending on UX preference
            // toast.error("Social login sync failed.");
          }
        }
      }
    };

    syncAuth();
  }, [session, status, token, dispatch, router, socialLogin]);

  return null;
}
