"use client";
import {useState, useEffect} from "react";
import {Flex, Box, Heading, Button} from "@radix-ui/themes";
import Header from "../components/header";
import {PortfolioCard, LineChartCard, BarChartCard} from "../components/card";
import {expenseAPI} from "@/app/services/index";

const Overview: React.FC<{}> = () => {
  const [thisYearExpense, setThisYearExpense] = useState([]);
  const [lastYearExpense, setLastYearExpense] = useState([]);

  useEffect(() => {
    expenseAPI.getExpensesByYear(2023).then((res) => {
      setLastYearExpense(res.data);
    });
    expenseAPI.getExpensesByYear(2024).then((res) => {
      setThisYearExpense(res.data);
    });
  }, []);

  return (
    <div>
      <Header title="Overview" />
      <Flex mb="3" gap="4">
        {/* <Heading className="w-2/6">Total Balance</Heading>
        <Heading className="w-1/6">Wallets</Heading> */}
      </Flex>
      <Flex gap="4">
        {/* <Box className="w-2/6">
          <PortfolioCard />
        </Box> */}
        <Box className="w-3/6">
          <BarChartCard color="bg-orange-100" chartData={thisYearExpense} chartKey="amount" title="This Year" description="Expenses Per Month" />
        </Box>
        <Box className="w-3/6">
          <LineChartCard color="bg-purple-100" chartData={lastYearExpense} chartKey="amount" title="Last Year" description="Expenses Per Month" />
        </Box>
        <Box className="w-3/6">
          <BarChartCard color="bg-orange-100" chartData={lastYearExpense} chartKey="amount" title="This Month" description="Expenses Per Category" />
        </Box>
        <Box className="w-3/6">
          <LineChartCard color="bg-purple-100" chartData={thisYearExpense} chartKey="amount" title="Last Year" description="Expenses Per Month" />
        </Box>
        {/* <Box className="w-1/6">
          <LineChartCard color="bg-green-100" />
        </Box> */}
      </Flex>
    </div>
  );
};
export default Overview;
