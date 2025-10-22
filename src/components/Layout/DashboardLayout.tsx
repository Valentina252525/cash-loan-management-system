'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, FileText, UserCog, LogOut, DollarSign } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Dashboard', icon: <Home size={18} /> },
    { href: '/customers', label: 'Customers', icon: <Users size={18} /> },
    { href: '/loans', label: 'Loans', icon: <DollarSign size={18} /> },
    { href: '/reports/sales', label: 'Reports', icon: <FileText size={18} /> },
    { href: '/staff', label: 'Staff', icon: <UserCog size={18} /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-gray-200 shadow-lg hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold text-white border-b border-slate-700">
          Cash Loan System
        </div>

        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-all ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-700 hover:text-white text-gray-300'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <button className="m-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto text-gray-900">{children}</main>
    </div>
  );
}
