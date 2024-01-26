"use client";
import React from "react";
import {Box, Flex} from "@radix-ui/themes";
import {LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer} from "recharts";
import Loading from "@/app/components/loading/loading";
import CustomTooltip from "./CustomTooltip"
import CustomizedAxisTick from "./CustomAxisTick/CustomAxisTick";
import ChartContainer from "./ChartContainer/ChartContainer";
import theme from "../../color"

interface chartData {
  name: string;
  amount: number;
}

interface P {
  color?: string;
  title: string;
  description?: string;
  chartData?: chartData[];
  chartKey?: string;
  labelKey?: string;
  isLoading?: boolean;
}

const AssetCard: React.FC<P> = ({color = "bg-blue-100", title,description = "", chartData, chartKey, labelKey, isLoading = false}) => {
  if (isLoading)
    return (
      <Box className={`${color} rounded-xl p-4 h-full min-h-52`} my="3">
        <Loading />
      </Box>
    );
  return (
   <ChartContainer color={color} title={title} description={description} isLoading={isLoading}>
        {chartData && chartKey && (
          <ResponsiveContainer width="100%" height={150} className="mt-5">
            <LineChart data={chartData}>
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey={chartKey} stroke={theme.chartPrimaryColor} dot={false} strokeWidth={3} />
              <XAxis tick={(props) => <CustomizedAxisTick {...props} tickFormatter={(tickItem: string) => `${tickItem.substring(0, 3)}`} />} width={50} dataKey={labelKey} tickLine={false} axisLine={false} />
              <YAxis tick={(props) => <CustomizedAxisTick {...props} tickFormatter={(tickItem: number) => `${tickItem && tickItem > 0 ? (tickItem / 1000).toFixed(1)+"k" : ""}`} />} width={50} tickLine={false} axisLine={false} />
            </LineChart>
          </ResponsiveContainer>
        )}
    </ChartContainer>
  );
};

export default AssetCard;
