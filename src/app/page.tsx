"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full items-center justify-center flex-col font-mono px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Landing Page</h1>
      
      <div className="flex flex-col space-y-3 sm:space-y-4 w-full max-w-xs">
        <Button 
          className="w-full" 
          onClick={() => router.push("/sign-in")}
        >
          Sign In
        </Button>
        
        <Button 
          className="w-full" 
          onClick={() => router.push("/sign-up")}
        >
          Sign Up
        </Button>
        
        <div className="pt-2 sm:pt-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center">Protected Route by middleware</h2>
          <Button 
            className="w-full" 
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
