// src/app/customers/[id]/page.tsx
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import { Customer } from '@/types/customer';

export default async function CustomerDashboard({ params }: { params: { id: string } }) {
  const customerDoc = await getDoc(doc(db, 'customers', params.id));
  if (!customerDoc.exists()) {
    notFound();
  }

  const customer = { id: customerDoc.id, ...customerDoc.data() } as Customer;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Customer Profile</h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{customer.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><span className="font-medium">Phone:</span> {customer.phone}</p>
          <p><span className="font-medium">Email:</span> {customer.email || '—'}</p>
          <p><span className="font-medium">ID Number:</span> {customer.idNumber}</p>
          <p><span className="font-medium">Address:</span> {customer.address}</p>
          <p><span className="font-medium">Credit Score:</span> {customer.financialHistory?.creditScore || '—'}</p>
          <p><span className="font-medium">Previous Loans:</span> {customer.financialHistory?.previousLoans?.join(', ') || 'None'}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-3">Documents</h3>
        {customer.documentUrls && customer.documentUrls.length > 0 ? (
          <ul className="space-y-2">
            {customer.documentUrls.map((url, index) => (
              <li key={index}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  📄 Document {index + 1}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No documents uploaded.</p>
        )}
      </div>
    </div>
  );
}