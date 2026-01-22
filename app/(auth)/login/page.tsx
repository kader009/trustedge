import Loginview from '@/src/module/authentication/Loginview';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <Loginview />
    </Suspense>
  );
}
