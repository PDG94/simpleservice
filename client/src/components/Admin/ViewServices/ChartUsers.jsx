import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const ChartAdmin = () => {
  const orders = useSelector((state)=>state.orderHistory);
  const ordeers1 = useSelector((state)=>state.totalOrderPerMonthAmount)
  console.log(ordeers1);

  // Create a new array of order status
  const array = [];
  orders.map((item) => {
    const { orderDate
    } = item;
    const arraymodificado = orderDate.slice(3,7)
    return array.push(arraymodificado
        );
  });

  const getOrderCount = (arr, value) => {
    return arr.filter((n) => n === value).length;
  };



  const [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12] = [
    " Jan",
    " Feb",
    " Mar",
    " Apr",
    " May",
    " Jun",
    " Jul",
    " Aug",
    " Sep",
    " Oct",
    " Nov",
    " Dec",
  ];

  const January = getOrderCount(array, q1);
  const February = getOrderCount(array, q2);
  const March = getOrderCount(array, q3);
  const April = getOrderCount(array, q4);
  const May = getOrderCount(array, q5);
  const June = getOrderCount(array, q6);
  const July = getOrderCount(array, q7);
  const August = getOrderCount(array, q8);
  const September = getOrderCount(array, q9);
  const October = getOrderCount(array, q10);
  const November = getOrderCount(array, q11);
  const December = getOrderCount(array, q12);



  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"],
    datasets: [
      {
        label: "Order count",
        data: [January, February, March, April, May, June, July, August, September, October, November, December],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className=''>
   
        <h3>Number Of Order Per Month Chart</h3>
        <Bar options={options} data={data} />
    
    </div>
  );
};
export default ChartAdmin;