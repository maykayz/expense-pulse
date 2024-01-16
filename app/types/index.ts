export interface Expense {
  id?: number;
  platform: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  createdAt?: string;
  updatedAt?: string;
}
