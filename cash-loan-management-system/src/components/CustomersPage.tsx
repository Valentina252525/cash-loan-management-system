
'use client';
import { useState } from 'react';

export default function CustomersPage() {
  const [search, setSearch] = useState('');

  const customers = [
    { name: 'John Doe', email: 'john@example.com', loans: 3, status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', loans: 1, status: 'Inactive' },
    { name: 'Michael Jordan', email: 'mj@hoops.com', loans: 2, status: 'Active' },
  ];

  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button className="btn btn-primary">Add Customer</button>
      </div>

      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="input input-bordered w-full max-w-sm"
      />

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Loans</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.loans}</td>
              <td>{c.status}</td>
              <td>
                <button className="btn btn-sm btn-info mr-2">Edit</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
