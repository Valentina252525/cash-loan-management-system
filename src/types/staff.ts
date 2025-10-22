export interface Staff {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Staff';
  permissions: string[];
  performanceMetrics: {
    loansDisbursed: number;
    paymentsCollected: number;
    customerSatisfaction: number;
  };
  leaveRequests: {
    id: string;
    startDate: string;
    endDate: string;
    status: 'Pending' | 'Approved' | 'Denied';
  }[];
}