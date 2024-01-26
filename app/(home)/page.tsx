"use client";
import {useState, useEffect} from "react";
import Head from "next/head";
import {Flex, Box, Heading, Button} from "@radix-ui/themes";
import Header from "../components/header";
import {LineChartCard, BarChartCard, PieChartCard} from "../components/card";
import SelectMenu from "../components/select/SelectMenu";
import {expenseAPI} from "@/app/services/index";
import {useQuery} from "react-query";

const Overview: React.FC<{}> = () => {
  const [year, setYear] = useState(2024);
  const {
    isLoading: isExpensesPerMonthLoading,
    error: isExpensesPerMonthError,
    data: expensesPerMonth,
  } = useQuery({
    queryKey: ["expensesPerMonth", year],
    queryFn: async () => {
      const response = await expenseAPI.getExpensesByYear(year);
      return response.data;
    },
    enabled: !!year,
  });

  const {
    isLoading: isElectricityExpensesLoading,
    error: isElectricityExpensesError,
    data: electricityExpenses,
  } = useQuery({
    queryKey: ["electricityExpenses", year],
    queryFn: async () => {
      const response = await expenseAPI.getExpensesByYear(year, "Electricity");
      return response.data;
    },
    enabled: !!year,
  });

  const {
    isLoading: isExpensesByCategoryLoading,
    error: isExpensesByCategoryError,
    data: expensesByCategory,
  } = useQuery({
    queryKey: ["expensesByCategories", year],
    queryFn: async () => {
      const response = await expenseAPI.getExpensesByCategory(year);
      const formatData: {name: string; value: number}[] = Object.entries(response.data).map(([key, value]) => ({
        name: key,
        value: Number(value) || 0,
      }));
      return formatData;
    },
    enabled: !!year,
  });

  const handleChange = (value: string) => {
    setYear(parseInt(value));
  };

  return (
    <div>
      <Head>
        <title>Overview</title>
      </Head>
      <Header title="Overview" />
      <Flex mb="3" gap="4" justify="end">
        <SelectMenu items={["2024", "2023"]} placeholder="Select Year" onChange={handleChange} />
      </Flex>
      <Flex gap="4" my="4">
        <Box className="w-2/6">
          <PieChartCard color="bg-slate-100" isLoading={isExpensesByCategoryLoading} chartData={expensesByCategory} chartKey="amount" labelKey="name" title="Expenses Per Category" description={`${year}`} />
        </Box>
        <Box className="w-2/6">
          <BarChartCard color="bg-slate-100" isLoading={isExpensesPerMonthLoading} chartData={expensesPerMonth} chartKey="amount" labelKey="name" title="Expenses Per Month" description={`${year}`} />
        </Box>
        <Box className="w-2/6">
          <LineChartCard color="bg-slate-100" isLoading={isElectricityExpensesLoading} chartData={electricityExpenses} chartKey="amount" labelKey="name" title="Electricity Bill Per Month" description={`${year}`} />
        </Box>
      </Flex>
    </div>
  );
};
export default Overview;
