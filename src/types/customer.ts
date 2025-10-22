
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  idNumber: string;
  address: string;
  financialHistory: {
    creditScore: number;
    previousLoans: string[];
  };
  documentUrls: string[];
  createdAt: Date;
}