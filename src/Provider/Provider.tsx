'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store/store';

interface Children {
  children: ReactNode;
}

const Providers = ({ children }: Children) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" />
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;
