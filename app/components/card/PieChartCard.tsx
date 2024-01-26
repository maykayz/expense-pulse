"use client";
import React from "react";
import {Box} from "@radix-ui/themes";
import {PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip} from "recharts";
import Loading from "@/app/components/loading/loading";
import CustomTooltip from "./CustomTooltip"
import ChartContainer from "./ChartContainer/ChartContainer"
import theme from "@/app/color"

interface chartData {
  name: string;
  value: number;
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

interface PieProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const COLORS = [
  theme.primary,
  // theme.secondary,
  theme.tertiary,
  theme.quaternary,
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042", // Existing colors
  "#E9967A",
  "#8A2BE2",
];

interface CustomLegendProps {
  payload?: {
    value: string;
    color: string;
  }[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ payload }) => {
  if(!payload) return null;
  return (
    <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginRight: '20px' }}>
          <span style={{ display: 'inline-block', marginRight: '10px', width: '10px', height: '10px', backgroundColor: entry.color }}></span>
          <span style={{ color: entry.color, fontSize: "12px" }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const PieChartCard: React.FC<P> = ({color = "bg-blue-100", title, description, chartData, chartKey, isLoading = false}) => {
  if (isLoading)
    return (
      <Box className={`${color} rounded-xl p-4 h-full min-h-52`} my="3">
        <Loading />
      </Box>
    );
  if (!chartData || !chartData.length) return;
  return (
   <ChartContainer color={color} title={title} description={description} isLoading={isLoading}>
        {chartData && chartKey && (
          <ResponsiveContainer width="100%" height={150} className="mt-5 text-center">
            <PieChart width={200} height={100}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={40} outerRadius={50} 
                fill={theme.chartPrimaryColor}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip  content={<CustomTooltip />}/>
              <Legend content={<CustomLegend/>} verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </ChartContainer>
  );
};

export default PieChartCard;
