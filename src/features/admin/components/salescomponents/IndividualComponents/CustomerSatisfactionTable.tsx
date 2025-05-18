// components/reports/CustomerSatisfactionTable.tsx

import React from "react";
import type { Customer } from "../../../../sales/types/CustomerType";

interface Props {
  data: (Customer & {pedidoID?:string | number})[];
}

const CustomerSatisfactionTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-blue-700">
        Reporte de Satisfacción del Cliente
      </h3>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Pedido ID</th>
            <th className="border px-4 py-2">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border px-4 py-2">{row.firstName} {row.lastName}</td>
              <td className="border px-4 py-2">{row.pedidoID}</td>
              <td className="border px-4 py-2">{row.descriptionSatisfacition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerSatisfactionTable;
