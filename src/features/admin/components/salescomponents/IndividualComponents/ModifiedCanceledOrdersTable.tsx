import React from "react";
import type { Order } from "../../../../sales/types/OrderType";

interface Props{
    orders: Order[];
}

const ModifiedCanceledOrdersTable : React.FC<Props> = ({orders}) => {
    const filteredOrders = orders.filter(
        (order) => order.status === "Canceled"|| order.status === "Modified"
    );

    return(
        <div>
            
             <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border px-2 py-1 text-left">Pedido ID</th>
                    <th className="border px-2 py-1 text-left">Cliente ID</th>
                    <th className="border px-2 py-1 text-left">Fecha Modificación</th>
                    <th className="border px-2 py-1 text-left">Estado</th>
                </tr>
                </thead>
            <tbody>
                {filteredOrders.map((order) => (
                <tr key={order.id}>
                    <td className="border px-2 py-1">{order.id}</td>
                    <td className="border px-2 py-1">{order.customerId}</td>
                    <td className="border px-2 py-1">{order.modifiedStatusDate || "N/A"}</td>
                    <td className="border px-2 py-1">{order.status}</td>
                </tr>
                ))}
            </tbody>
            </table>
            {filteredOrders.length === 0 && (
            <p className="mt-2 text-gray-500">No hay pedidos cancelados o modificados.</p>
            )}
        </div>
    )
}

export default ModifiedCanceledOrdersTable;