'use client';
import { useState } from 'react';
import { Plus, Search, UserCog, Mail, Briefcase } from 'lucide-react';

export default function StaffPage() {
  const [search, setSearch] = useState('');

  const staff = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      role: 'Loan Officer',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@company.com',
      role: 'Accountant',
      status: 'On Leave',
    },
    {
      id: 3,
      name: 'Michael Jordan',
      email: 'michael@company.com',
      role: 'Manager',
      status: 'Active',
    },
  ];

  const filteredStaff = staff.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">Staff Management</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={18} />
          Add Staff
        </button>
      </div>

      <p className="text-gray-500">Manage your team members and their permissions.</p>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border w-full md:w-1/2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search staff..."
          className="flex-1 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Staff Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden border">
        <table className="table w-full">
          <thead className="bg-primary text-white">
            <tr>
              <th>Staff</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.length > 0 ? (
              filteredStaff.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition">
                  <td className="flex items-center gap-2">
                    <UserCog size={18} className="text-primary" />
                    <span>{member.name}</span>
                  </td>
                  <td className="text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail size={14} /> {member.email}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} /> {member.role}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        member.status === 'Active'
                          ? 'badge-success'
                          : member.status === 'On Leave'
                          ? 'badge-warning'
                          : 'badge-error'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-6">
                  No staff found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
