/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-14 14:49:38
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-14 14:50:05
 * @FilePath: \nextjs-demo\app\dashboard\invoices\[id]\edit\not-found.tsx
 * @Description: 
 * 
 */
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}