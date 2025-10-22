
import AuthWrapper from '@/components/AuthWrapper';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import StaffPage from '@/components/StaffPage';

export default function Staff() {
  return (
    <AuthWrapper>
      <DashboardLayout>
        <StaffPage />
      </DashboardLayout>
    </AuthWrapper>
  );
}
