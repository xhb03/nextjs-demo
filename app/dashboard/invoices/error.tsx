/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-14 14:43:02
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-14 14:43:33
 * @FilePath: \nextjs-demo\app\dashboard\invoices\error.tsx
 * @Description: 
 * 
 */
'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}