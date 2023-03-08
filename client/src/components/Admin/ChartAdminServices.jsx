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
import "./chartAdminServices.css";

const data = [
  { name: "Web Full Stack Developer", user: 10, active: 60 },
  { name: "Carpet and upholstery cleaning", user: 25, active: 70 },
  { name: "School transport service", user: 15, active: 65 },
  { name: "General mechanics", user: 35, active: 85 },
  { name: "Social Media", user: 12, active: 48 },
  { name: "Teacher", user: 30, active: 69 },
];

const ChartAdminServices = () => {
  return (
    <div className="border3">
      <h2 className="h1CharService">Number Of Services Chart</h2>
      <hr className="hrServicesAd" />
      <ResponsiveContainer width="100%" aspect={6}>
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="user"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="active"
            stackId="1"
            stroke="#82caed"
            fill="#fad3cf"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartAdminServices;
