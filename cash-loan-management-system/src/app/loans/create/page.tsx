'use client';
import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loan } from '@/types/loan';
import { Customer } from '@/types/customer';
import { useRouter } from 'next/navigation';

export default function CreateLoan() {
  const [formData, setFormData] = useState<Partial<Loan>>({
    repaymentSchedule: [],
  });
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomers = async () => {
      const snapshot = await getDocs(collection(db, 'customers'));
      setCustomers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Customer)));
    };
    fetchCustomers();
  }, []);

  const generateSchedule = (amount: number, termMonths: number) => {
    const monthlyRate = (formData.interestRate || 0) / 12 / 100;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
    const schedule = Array.from({ length: termMonths }, (_, i) => {
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + i + 1);
      return { dueDate: dueDate.toISOString(), amountDue: monthlyPayment, paid: false };
    });
    setFormData({ ...formData, repaymentSchedule: schedule });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loanData = {
        ...formData,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      } as Loan;
      await addDoc(collection(db, 'loans'), loanData);
      router.push('/loans');
    } catch (error) {
      console.error('Error creating loan:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create New Loan</h1>
      <form onSubmit={handleSubmit}>
        <select
          value={formData.customerId || ''}
          onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          required
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Loan Amount"
          value={formData.amount || ''}
          onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={formData.interestRate || ''}
          onChange={(e) => setFormData({ ...formData, interestRate: Number(e.target.value) })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          placeholder="Loan Type"
          value={formData.loanType || ''}
          onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="number"
          placeholder="Term (Months)"
          onChange={(e) => generateSchedule(formData.amount || 0, Number(e.target.value))}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Loan'}
        </button>
      </form>
    </div>
  );
}