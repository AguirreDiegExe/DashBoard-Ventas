import React from "react";
import type { Missing } from "../../../../depot/types/Missing";

type Props = {
    data: Missing[];
}

const DailyMissingTable : React.FC<Props> = ({data}) => {
    return(
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">Pedido ID</th>
            <th className="px-4 py-2 text-left">Producto ID</th>
            <th className="px-4 py-2 text-left">Hora</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{item.OrderID}</td>
              <td className="px-4 py-2">{item.ItemId}</td>
              <td className="px-4 py-2">{item.hour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default DailyMissingTable;
