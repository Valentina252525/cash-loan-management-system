
import './globals.css';
import { Inter } from 'next/font/google';
import AuthWrapper from '@/components/AuthWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cash Loan Management System',
  description: 'Manage customers, loans, staff, and reports efficiently',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap all pages except login with AuthWrapper */}
        {typeof window !== 'undefined' && window.location.pathname !== '/login' ? (
          <AuthWrapper>{children}</AuthWrapper>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
