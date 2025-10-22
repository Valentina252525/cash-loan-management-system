
import AuthWrapper from '@/components/AuthWrapper';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import CustomersPage from '@/components/CustomersPage';

export default function Customers() {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <CustomersPage />
      </DashboardLayout>
    </AuthWrapper>
  );
}
