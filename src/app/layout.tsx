import './globals.css';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arthur De Souza',
  description: 'Portfolio do Arthur De Souza Silva'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
