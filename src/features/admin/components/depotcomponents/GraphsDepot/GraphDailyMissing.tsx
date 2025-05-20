import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import type { Missing } from '../../../../depot/types/Missing';

interface Props {
    data: Missing[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#E94B3C', '#7C4DFF'];

const GraphDailyMissingReport: React.FC<Props> = ({data}) => {
      // Agrupar por ItemId y contar ocurrencias
  const groupedData = data.reduce((acc: Record<string, number>, item) => {
    acc[item.ItemId] = (acc[item.ItemId] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(groupedData).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <div className="flex justify-center">
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={130}
          dataKey="value"
          label
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default GraphDailyMissingReport;