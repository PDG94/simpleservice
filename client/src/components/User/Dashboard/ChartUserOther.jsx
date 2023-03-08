<<<<<<< HEAD
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
=======
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


const data = [
    {name: "Web Full Stack Developer", user: 5, active: 30},
    {name: 'Carpet and upholstery cleaning', user: 80, active: 70},
    {name: 'School transport service', user: 5, active: 65},
    {name: 'Web designer', user: 80, active: 75},
  
]

const ChartUserOther = () => {
  return (
    <ResponsiveContainer width="97%" aspect={3}>
        <AreaChart
            data={data}
            width={500}
            height={500}
            margin={{
                top:5,
                right:5,
                left:5,
                bottom:0 
        }}
        style={{ borderRadius: "20px 0 20px 0", marginTop: "1%", letterSpacing : ".1px"}}
        >
            <CartesianGrid strokeDasharray="3 1 3" />
            <XAxis dataKey="name" stroke='#fff'/>
            <YAxis stroke='#fff'/>
            <Tooltip />
            <Area type="monotone" dataKey="user" stackId="1" stroke='#8884d8' fill="#f86fff" />
            <Area type="monotone" dataKey="active" stackId="1" stroke='#82caed' fill="#6fffe9" />
        </AreaChart>
    </ResponsiveContainer>
  )
}
>>>>>>> bead139d20078e3bf12bdbb2fd93330319fa3bf9

export default ChartUserOther;
