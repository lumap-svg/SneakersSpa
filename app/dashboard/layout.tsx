'use client';
import React from 'react';
import Aside from '@/components/Aside';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
;


  return (
    <div className="flex bg-gray-700 text-gray-800 h-screen">
      <Aside />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    
    </div>
  );
}
