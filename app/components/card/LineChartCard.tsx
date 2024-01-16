"use client";
import React from "react";
import {Box, Heading, Flex, Text, IconButton} from "@radix-ui/themes";
import {RxDotsVertical} from "react-icons/rx";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from "recharts";

interface chartData {
  name: string;
  amount: number;
}

interface P  {
  color?: string;
  title: string,
  description: string;
  chartData?: chartData[],
  chartKey?: string,
}

const AssetCard: React.FC<P> = ({color = "bg-blue-100", title, description, chartData, chartKey}) => {
  return (
    <Box className={`${color} rounded-xl p-4 h-full`} my="3">
      <Flex direction="column">
        <Flex direction="row" justify="between">
          <Flex direction="column">
            <Text size="6" weight="bold">
              {title}
            </Text>
            <Text weight="medium" mt="2">
              {description}
            </Text>
          </Flex>
          <IconButton radius="full" variant="soft">
            <RxDotsVertical width="18" height="18" />
          </IconButton>
        </Flex>
        {chartData && chartKey && (
          <ResponsiveContainer width="100%" height={150} className="mt-5">
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="amount" stroke="#8884d8" dot={false} strokeWidth={2} />
              <XAxis width={30} dataKey="name" tickFormatter={(tickItem) => `${tickItem.substring(0, 3)}`} textAnchor="end" tickLine={false} axisLine={false} />
              <YAxis width={30} tickFormatter={(tickItem) => `${tickItem / 1000}k`} textAnchor="end" tickLine={false} axisLine={false} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Flex>
    </Box>
  );
};

export default AssetCard;
