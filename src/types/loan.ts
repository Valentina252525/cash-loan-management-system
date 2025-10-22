export interface Loan {
  id: string;
  customerId: string;
  amount: number;
  interestRate: number;
  status: 'Pending' | 'Approved' | 'Disbursed' | 'Active' | 'Paid Off' | 'Default';
  loanType: string;
  createdAt: string;
  repaymentSchedule: {
    dueDate: string;
    amountDue: number;
    paid: boolean;
  }[];
}