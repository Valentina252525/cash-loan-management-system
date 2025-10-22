'use client';
import { useState } from 'react';

export default function SalesReport() {
  const [filter, setFilter] = useState('monthly');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Sales Report</h2>
      <div className="mb-4 flex items-center gap-3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Loan Amount</th>
              <th>Paid</th>
              <th>Outstanding</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-10-01</td>
              <td>John Doe</td>
              <td>$1,000</td>
              <td>$200</td>
              <td>$800</td>
            </tr>
            <tr>
              <td>2025-10-05</td>
              <td>Jane Smith</td>
              <td>$500</td>
              <td>$100</td>
              <td>$400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
