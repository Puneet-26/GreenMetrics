'use client';

import type { FC, ReactNode } from 'react';
import AppHeader from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

interface AppShellProps {
  children: ReactNode;
}

const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default AppShell;
