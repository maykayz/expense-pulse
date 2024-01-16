import axios from './axios';
import {Expense} from '../types';

const expenseAPI = {
    getExpenses: () => axios.get('/expenses'),
    getExpensesByYear: (year: number) => axios.get('/getExpensesByYear', {
        params: {
            year
        }
    }),
    createExpense: (expense: Expense) => axios.post('/expenses', expense),
}

export default expenseAPI;