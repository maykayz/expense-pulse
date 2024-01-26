"use client";
import {useState, useEffect} from "react";
import Head from "next/head";
import {Grid, Flex, Box, Heading, Table} from "@radix-ui/themes";
import Header from "../components/header";
import {useQuery} from "react-query";
import {LuChevronDown} from "react-icons/lu";
import ExpenseTable from "../components/table/ExpenseTable";
import {expenseAPI} from "../services";
import AddExpense from "./AddExpense";
import SelectMenu from "../components/select/SelectMenu";

const Expense: React.FC<{}> = () => {
  const [query,setQuery] = useState("")
  const {data, isLoading, error, refetch} = useQuery({
    queryKey: ["expenses", query],
    queryFn: async () => {
      const result = await expenseAPI.getExpenses();
      return result.data;
    },
  });

  const handleChange = (value: string) => {
    setQuery(value)
  }

  return (
    <div>
      <Head>
        <title>Expenses</title>
      </Head>
      <Header title="Expense" />
      <Grid columns="4" gap="3" width="auto">
        <Box className="col-span-3 px-4">
          <Flex mb="3" gap="4" direction="row" align="center">
            <Heading className="w-1/2">Latest Expenses</Heading>
            <Heading className="w-1/2 flex justify-end" size="3">
              <SelectMenu defaultValue="This Month" items={["This Month", "Last Month"]} placeholder="Select Date Range" onChange={handleChange} />
            </Heading>
          </Flex>
          <ExpenseTable data={data} loading={isLoading} />
        </Box>
        <Box>
          <AddExpense refreshList={refetch} />
        </Box>
      </Grid>
    </div>
  );
};
export default Expense;
