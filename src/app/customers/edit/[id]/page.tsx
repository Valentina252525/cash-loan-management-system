'use client';
import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Customer } from '@/types/customer';
import { useRouter } from 'next/navigation';

export default function EditCustomer({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState<Partial<Customer>>({
    financialHistory: { creditScore: 0, previousLoans: [] },
    documentUrls: [],
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomer = async () => {
      const customerDoc = await getDoc(doc(db, 'customers', params.id));
      if (customerDoc.exists()) {
        setFormData(customerDoc.data() as Customer);
      }
    };
    fetchCustomer();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let documentUrl = formData.documentUrls || [];
      if (file) {
        const storageRef = ref(storage, `customers/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        documentUrl = [...documentUrl, await getDownloadURL(storageRef)];
      }
      await updateDoc(doc(db, 'customers', params.id), { ...formData, documentUrls: documentUrl });
      router.push(`/customers/${params.id}`);
    } catch (error) {
      console.error('Error updating customer:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Customer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email || ''}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone || ''}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="text"
          placeholder="ID Number"
          value={formData.idNumber || ''}
          onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <textarea
          placeholder="Address"
          value={formData.address || ''}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="number"
          placeholder="Credit Score"
          value={formData.financialHistory?.creditScore || 0}
          onChange={(e) =>
            setFormData({
              ...formData,
              financialHistory: { ...formData.financialHistory, creditScore: Number(e.target.value) },
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="text"
          placeholder="Previous Loans (comma-separated)"
          value={formData.financialHistory?.previousLoans?.join(', ') || ''}
          onChange={(e) =>
            setFormData({
              ...formData,
              financialHistory: {
                ...formData.financialHistory,
                previousLoans: e.target.value.split(',').map((id) => id.trim()),
              },
            })
          }
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update Customer'}
        </button>
      </form>
    </div>
  );
}