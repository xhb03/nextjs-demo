/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-13 14:43:38
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-13 14:45:44
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Description:
 *
 */
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
