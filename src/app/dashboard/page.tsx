'use client';

import { authClient } from '@/lib/auth-client';

export default function DashboardPage() {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col font-mono px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Dashboard</h1>
      
      <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 break-words">
          Welcome, {session?.user?.name || 'User'}!
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
          This is a protected page that can only be accessed by authenticated users.
        </p>
        
        <div className="bg-muted p-3 sm:p-4 rounded-md">
          <h3 className="text-md sm:text-lg font-medium mb-2">User Information:</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
            <li className="break-words"><span className="font-medium">ID:</span> {session?.user?.id}</li>
            <li className="break-words"><span className="font-medium">Name:</span> {session?.user?.name}</li>
            <li className="break-words"><span className="font-medium">Email:</span> {session?.user?.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 