
import AuthWrapper from '@/components/AuthWrapper';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import SalesReport from '@/components/Reports/SalesReport';

export default function SalesReports() {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <SalesReport />
      </DashboardLayout>
    </AuthWrapper>
  );
}
