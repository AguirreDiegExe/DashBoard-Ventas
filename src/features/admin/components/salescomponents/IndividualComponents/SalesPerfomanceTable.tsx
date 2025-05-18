import React from "react";
import type { Employee } from "../../../../sales/types/EmployeeType";

interface Props{
    rows: Employee[];
}

const SalesPerfomanceTable : React.FC<Props> = ({rows}) => {
    return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Desempeño por Ventas</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Empleado ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Pedidos Emitidos</th>
            <th className="p-2 border">Última Fecha de Pedido</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="p-2 border text-center">{row.id}</td>
              <td className="p-2 border">{row.firstName}{row.lastName}</td>
              <td className="p-2 border text-left">
                    <ul>
                        {row.OrderItems.map((item) => (
                            <li key={item.id}>
                            {item.id} - {item.status} - {item.customerId}
                            </li>
                            ))}
                    </ul>
              </td>
              <td className="p-2 border text-center">{row.OrderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesPerfomanceTable;