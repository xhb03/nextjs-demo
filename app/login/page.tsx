/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-14 15:55:04
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-14 15:55:28
 * @FilePath: \nextjs-demo\app\login\page.tsx
 * @Description: 
 * 
 */
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}