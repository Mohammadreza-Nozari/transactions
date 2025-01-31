export interface ITransaction {
  id: number;
  to: string;
  amount: number;
  currency: string;
  status: 'Pending' | 'Approved';
}
