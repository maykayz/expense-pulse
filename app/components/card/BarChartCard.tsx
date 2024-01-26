"use client";
import React from "react";
import {Box} from "@radix-ui/themes";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";
import Loading from "@/app/components/loading/loading";
import CustomTooltip from "./CustomTooltip";
import CustomizedAxisTick from "./CustomAxisTick/CustomAxisTick";
import ChartContainer from "./ChartContainer/ChartContainer";
import theme from '../../color';

interface chartData {
  name: string;
  amount: number;
}

interface P {
  color?: string;
  title: string;
  description: string;
  chartData?: chartData[];
  chartKey?: string;
  labelKey?: string;
  isLoading?: boolean;
}

const CustomBarShape: React.FC<any> = (props) => {
  const {fill, x, y, width, height} = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      <rect x={x - 5} y={y - 5} width={width + 10} height={height + 10} fill={fill} fillOpacity={0} />
    </g>
  );
};

const BarChartCard: React.FC<P> = ({color = "bg-blue-100", title, description, chartData, chartKey, labelKey, isLoading}) => {
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
          <BarChart barSize={10} width={150} height={40} data={chartData}>
            <Bar dataKey={chartKey} fill={theme.chartPrimaryColor} shape={<CustomBarShape />} />
            <XAxis tick={(props) => <CustomizedAxisTick {...props} tickFormatter={(tickItem: string) => `${tickItem.substring(0, 3)}`} />} width={30} dataKey={labelKey} textAnchor="end" tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartContainer>
  );
};

export default BarChartCard;
