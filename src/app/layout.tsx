import { Analytics, Providers } from '@/app/providers';
import Layout from '@/ui';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import './globals.css';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });
//
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

const JosefinFont = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Axmin Shrestha | Portfolio',
  description:
    "Axmin Shrestha's Portfolio - Full Stack Developer specializing in TypeScript, Next.js, React, and modern web technologies",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang='en'>
      <Analytics />
      <body className={`${JosefinFont.className} antialiased`}>
        <Layout>
          <Toaster />
          <Providers>{children}</Providers>
        </Layout>
      </body>
    </html>
  );
}
