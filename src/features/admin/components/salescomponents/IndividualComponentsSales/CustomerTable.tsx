import React from "react";

interface SalesTableProps {
    data: {
    fullName: string;
    email: string;
    phone: string;
    orderCount: number;
  }[];
}

const CustomerTable : React.FC<SalesTableProps> = ({data}) => {
    const totalPedidos = data.reduce((acc, cliente) => acc + cliente.orderCount, 0);

    return(
    <div className="overflow-x-auto shadow-md rounded-lg mt-6">
        <table className="min-w-full border border-gray-300 text-center">
            <thead className="bg-blue-700 text-white">
            <tr>
                <th className="py-3 px-6 border-b">Nombre</th>
                <th className="py-3 px-6 border-b">Email</th>
                <th className="py-3 px-6 border-b">Teléfono</th>
                <th className="py-3 px-6 border-b">Cantidad de Pedidos</th>
            </tr>
            </thead>
        <tbody>
          {data.map((cliente, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
            >
              <td className="py-2 px-4">{cliente.fullName}</td>
              <td className="py-2 px-4">{cliente.email}</td>
              <td className="py-2 px-4">{cliente.phone}</td>
              <td className="py-2 px-4">{cliente.orderCount}</td>
            </tr>
          ))}
          <tr className="bg-blue-700 text-white font-bold">
            <td colSpan={3} className="py-2 px-4 text-right">
              Total
            </td>
            <td className="py-2 px-4">{totalPedidos}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default CustomerTable;