import Layout from '@/ui';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio Next App',
  description: 'Portfolio nova',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>
          <Toaster />
          {children}
        </Layout>
      </body>
    </html>
  );
}
