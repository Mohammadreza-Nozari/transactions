export interface ITransaction {
  id: string;
  to: string;
  amount: number;
  date: string;
  currency: string;
  status: "Pending" | "Approved";
}
