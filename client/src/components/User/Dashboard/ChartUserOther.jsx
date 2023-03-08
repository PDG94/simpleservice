import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Web Full Stack Developer", user: 5, active: 30 },
  { name: "Carpet and upholstery cleaning", user: 80, active: 70 },
  { name: "School transport service", user: 5, active: 65 },
  { name: "Web designer", user: 80, active: 75 },
];

const ChartUserOther = () => {
  return (
    <ResponsiveContainer width="97%" aspect={3}>
      <AreaChart
        data={data}
        width={500}
        height={500}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 0,
        }}
        style={{
          borderRadius: "20px 0 20px 0",
          marginTop: "1%",
          letterSpacing: ".1px",
        }}
      >
        <CartesianGrid strokeDasharray="3 1 3" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="user"
          stackId="1"
          stroke="#8884d8"
          fill="#f86fff"
        />
        <Area
          type="monotone"
          dataKey="active"
          stackId="1"
          stroke="#82caed"
          fill="#6fffe9"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartUserOther;
