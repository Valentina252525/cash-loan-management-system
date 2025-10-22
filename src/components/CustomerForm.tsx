'use client';

import { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

export default function CustomersPage() {
  const [search, setSearch] = useState('');

  const customers = [
    { id: 1, name: 'John Doe', phone: '0712 345 678', totalLoans: 3, status: 'Active' },
    { id: 2, name: 'Jane Smith', phone: '0765 432 109', totalLoans: 1, status: 'Inactive' },
  ];

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Customers</h2>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 shadow">
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-50 text-indigo-700 text-left">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Total Loans</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length ? (
              filteredCustomers.map((c) => (
                <tr
                  key={c.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{c.name}</td>
                  <td className="py-3 px-4">{c.phone}</td>
                  <td className="py-3 px-4">{c.totalLoans}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        c.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-800">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
