import axios from './axios';

const expenseAPI = {
    getExpenses: () => axios.get('/expenses'),
}

export default expenseAPI;