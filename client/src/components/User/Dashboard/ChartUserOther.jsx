import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mecanic", cost: 10, cant: 60 },
  { name: "Full Stack", cost: 25, cant: 70 },
  { name: "Clothe Fixing", cost: 15, cant: 65 },
  { name: "Make up", cost: 35, cant: 85 },
  { name: "Cleaning", cost: 12, cant: 48 },
];

const ChartUserOther = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart
        data={data}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#6b48ff" />
        <Bar dataKey="cost" fill="#1ee3cf" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartUserOther;
