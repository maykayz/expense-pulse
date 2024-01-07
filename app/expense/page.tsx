import {Grid, Flex, Box, Heading, Table} from "@radix-ui/themes";
import Header from "../components/header";
import {ActionCard} from "../components/card";
import {LuChevronDown} from "react-icons/lu";
import ExpenseTable from "../components/table/ExpenseTable";
import {expenseAPI} from "../services";
import {useEffect} from "react";

const fetchExpenses = async () => {

  const result = await expenseAPI.getExpenses();
  console.log(result)
  return result.data;
//   const result = await fetch(process.env.URL + '/api/expenses', {method: 'GET'});
// console.log(result)
// //   if (result.ok) {
// // console.log(result.json())
// //     return result.json();
// //   }
//   return [];
};

const Expense = async () => {
  const expenseList = [
    {
      id: "12",
      platform: "Grab",
      category: "Grocery",
      amount: 200,
      currency: "THB",
      date: "12-12-2023",
    },
    {
      id: "12",
      platform: "AIS",
      category: "Phone Bill",
      amount: 120,
      currency: "THB",
      date: "12-12-2023",
    },
    {
      id: "12",
      platform: "PromptPay",
      category: "Grocery",
      amount: 300,
      currency: "THB",
      date: "12-12-2023",
    },
    {
      id: "12",
      platform: "PEA",
      category: "Electricity",
      amount: 1100,
      currency: "THB",
      date: "12-12-2023",
    },
    {
      id: "12",
      platform: "Kplus",
      category: "Water Bill",
      amount: 600,
      currency: "THB",
      date: "12-12-2023",
    },
  ];

  async function handleNewExpenseClick() {
    "use server";

    // ...
  }

  const data = await fetchExpenses();

  return (
    <div>
      <Header title="Expense" />
      <Grid columns="1" gap="3" width="auto">
        <Box>
          <Flex mb="3" gap="4" direction="row" align="center">
            <Heading className="w-1/2">Latest Expenses</Heading>
            <Heading className="w-1/2 flex justify-end" size="3">
              30D
              <LuChevronDown className="ml-2" size="24" />
            </Heading>
          </Flex>
          <Box>
            <ExpenseTable data={data} />
          </Box>
        </Box>
        <Box>{/* <ActionCard title="Add Expense" buttonText="Add Expense" handleClick={handleNewExpenseClick}/> */}</Box>
      </Grid>
    </div>
  );
};
export default Expense;
