import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
} from "recharts";
import ChartPie from "./ChartPie";

const Statistics = () => {
  const data = useLoaderData();
  const categoryCounts = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  
 
  const totalItems = data.length;
 
  const categoryArray = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    percentage: ((count / totalItems) * 100).toFixed(2)
  }));
  

  
  return (
    <div>
        <div>
           <h1 className="text-2xl font-semibold text-center my-2"> Your Contribution In Different Category</h1>
        </div>
     <div>
     <ResponsiveContainer width="100%" height={600}>
        <BarChart width={600} height={400} data={categoryArray}>
          <Bar dataKey="percentage" fill="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  fill="#3B0F67"/>
          <YAxis domain={[0, 100]}/>
          <Legend />
          <Tooltip ></Tooltip>
        </BarChart>
      </ResponsiveContainer>
     </div>
     <div>
    <ChartPie data={data}></ChartPie>
     </div>
    </div>
  );
};

export default Statistics;
