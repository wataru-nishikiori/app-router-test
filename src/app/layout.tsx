// src/app/layout.tsx
import './globals.css';
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

export const metadata = {
  title: 'My App',
  description: 'オーディション管理システム',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
