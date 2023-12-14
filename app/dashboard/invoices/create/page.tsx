/*
 * @Author: wenge wenge@iflytek.com
 * @Date: 2023-12-14 11:45:17
 * @LastEditors: wenge wenge@iflytek.com
 * @LastEditTime: 2023-12-14 13:42:39
 * @FilePath: \nextjs-demo\app\dashboard\invoices\create\page.tsx
 * @Description: 
 * 
 */
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}