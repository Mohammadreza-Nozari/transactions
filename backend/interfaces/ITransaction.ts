export interface ITransaction {
  id: string;
  to: string;
  amount: number;
  currency: string;
  date: string;
  status: 'Pending' | 'Approved';
}
