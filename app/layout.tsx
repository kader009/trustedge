import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/src/Provider/Provider';
import ConditionalLayout from '../src/components/ConditionalLayout';
import ErrorBoundary from '@/src/components/shared/ErrorBoundary';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'ReviewPortal',
  description:
    'A platform to share and discover authentic product reviews from real users.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <ErrorBoundary>
            <ConditionalLayout>{children}</ConditionalLayout>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
