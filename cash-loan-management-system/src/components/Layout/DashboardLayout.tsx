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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold text-primary border-b">Cash Loan System</div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
                pathname === item.href
                  ? 'bg-primary text-white'
                  : 'hover:bg-secondary hover:text-primary'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <button className="m-4 btn btn-error btn-sm text-white">
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
