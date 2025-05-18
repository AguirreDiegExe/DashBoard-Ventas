// src/features/admin/components/salescomponents/Graphs/GraphCustomerReport.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartData = {
  fullName: string;
  orderCount: number;
};

interface Props {
  data: ChartData[];
}

const CustomerOrdersChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-96 mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fullName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orderCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerOrdersChart;

