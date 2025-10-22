'use client';
import { Card, CardBody } from '@/components/ui/card';

export default function Dashboard() {
  const metrics = [
    { title: 'Active Loans', value: '42', color: 'bg-primary text-white' },
    { title: 'Customers', value: '128', color: 'bg-green-500 text-white' },
    { title: 'Revenue (This Month)', value: '$12,400', color: 'bg-yellow-500 text-white' },
    { title: 'Pending Approvals', value: '8', color: 'bg-red-500 text-white' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Dashboard Overview</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.title}
            className={`p-6 rounded-xl shadow-md ${m.color} transition hover:scale-105`}
          >
            <h2 className="text-lg">{m.title}</h2>
            <p className="text-3xl font-bold">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="card bg-white shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Loan Activity</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>$500</td>
              <td className="text-green-600">Approved</td>
              <td>Oct 12, 2025</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$800</td>
              <td className="text-yellow-600">Pending</td>
              <td>Oct 14, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
