import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard - NoName',
  description: 'Protected area',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen ">
      
      <main className="container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
} 