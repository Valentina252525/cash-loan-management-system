export interface Payment {
  id: string;
  loanId: string;
  amount: number;
  paymentDate: string;
  transactionId: string;
  method: 'Selcom Pay' | 'Manual';
}