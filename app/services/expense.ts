import axios from './axios';
import {Expense} from '../types';

const expenseAPI = {
    getExpenses: () => axios.get('/expenses'),
    getExpensesByYear: (year: number, category?: string) => axios.get('/getExpensesByYear', {
        params: {
            year,
            category
        }
    }),
    getExpensesByCategory: (year: number) => axios.get('/getExpensesByCategory', {
        params: {
            year
        }
    }),
    createExpense: (expense: Expense) => axios.post('/expenses', expense),
}

export default expenseAPI;