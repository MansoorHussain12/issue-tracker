"use client";

import { Card, Heading } from "@radix-ui/themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { pv, uv } = payload[0].payload;
    const percentageChange = ((pv - uv) / uv) * 100;
    const formattedPercentageChange = percentageChange.toFixed(2);

    return (
      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded shadow">
        <p className="font-bold">{label}</p>
        <p>
          Percentage change: {formattedPercentageChange}%{" "}
          {percentageChange >= 0 ? "increase" : "decrease"}
        </p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  return (
    <Card className="px-3">
      <Heading mb="5">Line Chart</Heading>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="10 10" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            fill="#8884d8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
