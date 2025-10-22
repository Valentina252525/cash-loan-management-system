
'use client';

import { useRouter } from 'next/navigation';
import CustomerForm from '@/components/CustomerForm';

export default function NewCustomerPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/customers');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Customer</h1>
      <CustomerForm onSuccess={handleSuccess} />
    </div>
  );
}