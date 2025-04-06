// app/layout.tsx
import { Providers } from '@/lib/providers';
import Header from '@/components/layout/Header';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Exercises - JavaScript, React, Redux, TypeScript',
  description: 'Interactive coding exercises and challenges for JavaScript, React, Redux, and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
