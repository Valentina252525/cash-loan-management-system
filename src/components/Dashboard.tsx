'use client';
import { Card, CardBody } from '@/components/ui/card';

export default function Dashboard() {
  const metrics = [
    { title: 'Active Loans', value: '42', color: 'bg-blue-600 text-white' },
    { title: 'Customers', value: '128', color: 'bg-green-600 text-white' },
    { title: 'Revenue (This Month)', value: '$12,400', color: 'bg-yellow-400 text-black' },
    { title: 'Pending Approvals', value: '8', color: 'bg-red-600 text-white' },
  ];

  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900">Dashboard Overview</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.title}
            className={`p-6 rounded-xl shadow-md ${m.color} transition hover:scale-105`}
          >
            <h2 className="text-lg font-medium">{m.title}</h2>
            <p className="text-3xl font-bold">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 shadow-md p-6 mt-8 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Loan Activity</h2>
        <table className="table w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 text-gray-700">Customer</th>
              <th className="py-2 text-gray-700">Amount</th>
              <th className="py-2 text-gray-700">Status</th>
              <th className="py-2 text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 text-gray-800">John Doe</td>
              <td className="py-2 text-gray-800">$500</td>
              <td className="py-2 text-green-600 font-semibold">Approved</td>
              <td className="py-2 text-gray-800">Oct 12, 2025</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 text-gray-800">Jane Smith</td>
              <td className="py-2 text-gray-800">$800</td>
              <td className="py-2 text-yellow-600 font-semibold">Pending</td>
              <td className="py-2 text-gray-800">Oct 14, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
