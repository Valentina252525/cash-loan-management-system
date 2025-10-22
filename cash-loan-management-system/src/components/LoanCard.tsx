'use client';
import { useState } from 'react';

export default function LoansPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Loans</h2>
      <div className="mb-4 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search loans..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">Add Loan</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Loan Amount</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>$1,000</td>
              <td>10%</td>
              <td className="text-green-600">Active</td>
              <td>Edit | View</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$500</td>
              <td>8%</td>
              <td className="text-red-600">Pending</td>
              <td>Edit | View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
