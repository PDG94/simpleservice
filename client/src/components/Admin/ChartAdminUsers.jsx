import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";
import "./chartAdminUsers.css";

const data = [
  { name: "User A", value: 2400 },
  { name: "User B", value: 4567 },
  { name: "User C", value: 1398 },
  { name: "User D", value: 9800 },
  { name: "User E", value: 3908 },
  { name: "User F", value: 4800 },
];

const COLORS = [
  "#ce93d8",
  "#5c6bc0",
  "#b39ddb",
  "#4dd0e1",
  "#f48fb1",
  "#d500f9",
];

const ChartAdminUser = () => {
  return (
    <div className="border2" style={{ width: "110%", height: 387 }}>
      <h2 className="h1CharAdminUser">Number Of Users Per Month Chart</h2>
      <hr className="hrUsersAd" />
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={60}
            outerRadius={85}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartAdminUser;
