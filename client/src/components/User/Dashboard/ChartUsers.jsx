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
  { name: "Cloth Fixing", cost: 15, cant: 65 },
  { name: "Make up", cost: 35, cant: 85 },
  { name: "Cleaning", cost: 12, cant: 48 },
];

const ChartUsers = () => {
  return (
    <ResponsiveContainer width="77%" aspect={2}>
      <BarChart
        data={data}
        width={500}
        height={300}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 10,
        }}
        style={{
          borderRadius: "20px 0 20px 0",
          marginTop: "1%",
          marginLeft: "15%",
          letterSpacing: "1px",
        }}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" stroke="#ffff" />
        <YAxis stroke="#ffff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#f86fff" />
        <Bar dataKey="cost" fill="#6fffe9" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartUsers;
