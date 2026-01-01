'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/store';
import { SessionProvider } from 'next-auth/react';
import AuthSync from '../components/auth/AuthSync';

interface Children {
  children: ReactNode;
}

const Providers = ({ children }: Children) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-right" />
          <AuthSync />
          {children}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
