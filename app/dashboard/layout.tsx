'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Aside from '@/components/Aside';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex bg-gray-700 text-gray-800 h-screen">
      <Aside />
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
    
    </div>
  );
}
