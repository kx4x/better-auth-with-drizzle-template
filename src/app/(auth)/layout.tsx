import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autenticação',
  description: 'Páginas de autenticação do sistema',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted min-h-svh flex flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
            {children}
            </div>
    </div>
  );
}