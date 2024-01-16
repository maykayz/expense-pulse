"use client";
import {useState, useEffect} from "react";
import {Grid, Flex, Box, Heading, Table} from "@radix-ui/themes";
import Header from "../components/header";
import {ActionCard} from "../components/card";
import {LuChevronDown} from "react-icons/lu";
import ExpenseTable from "../components/table/ExpenseTable";
import {expenseAPI} from "../services";
import AddExpense from "./AddExpense";

// const fetchExpenses = async () => {
//   "use server";
//   const result = await expenseAPI.getExpenses();
//   return result.data;
// };

const Expense:React.FC<{}> = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExpenses = async () => {
    setIsLoading(true);
    const result = await expenseAPI.getExpenses();
    if (result) {
      setData(result.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <Header title="Expense" />
      <Grid columns="4" gap="3" width="auto">
        <Box className="col-span-3 px-4">
          <Flex mb="3" gap="4" direction="row" align="center">
            <Heading className="w-1/2">Latest Expenses</Heading>
            <Heading className="w-1/2 flex justify-end" size="3">
              30D
              <LuChevronDown className="ml-2" size="24" />
            </Heading>
          </Flex>
          <ExpenseTable data={data} loading={isLoading}/>
        </Box>
        <Box>
          <AddExpense refreshList={fetchExpenses} />
        </Box>
      </Grid>
    </div>
  );
};
export default Expense;
