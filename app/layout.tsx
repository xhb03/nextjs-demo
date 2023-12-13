/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-06 18:05:48
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-13 14:57:58
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description: 
 * 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>{children}</body>
    </html>
  );
}
