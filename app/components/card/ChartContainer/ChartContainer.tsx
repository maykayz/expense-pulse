"use client";
import React from "react";
import {Box, Heading, Flex, Text, IconButton} from "@radix-ui/themes";
import {RxDotsVertical} from "react-icons/rx";
import Loading from "@/app/components/loading/loading";

interface chartData {
  name: string;
  amount: number;
}

interface P {
  color?: string;
  title: string;
  description: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

const ChartContainer: React.FC<P> = ({color = "bg-blue-100", title, isLoading = false, children}) => {
  if (isLoading)
    return (
      <Box className={`${color} rounded-xl p-4 h-full min-h-52`} my="3">
        <Loading />
      </Box>
    );
  return (
    <Box className={`${color} rounded-xl p-4 h-full`} my="3">
      <Flex direction="column">
        <Flex direction="row" justify="between">
          <Flex direction="column">
            <Text size="5" weight="bold">
              {title}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default ChartContainer;
