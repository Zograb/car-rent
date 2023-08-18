'use client';

import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/styles/registry';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Car Rent</title>
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
