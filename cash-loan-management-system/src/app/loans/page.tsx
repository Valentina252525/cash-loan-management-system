
import AuthWrapper from '@/components/AuthWrapper';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import LoansPage from '@/components/LoansPage';

export default function Loans() {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <LoansPage />
      </DashboardLayout>
    </AuthWrapper>
  );
}
