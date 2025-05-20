import React from "react";
import type { Customer } from "../../../../sales/types/CustomerType";
import { CustomerStatus } from "../../../../sales/types/CustomerType";

interface Props{
    customers: Customer[];
}

const InactiveCustomerTable : React.FC<Props> = ({customers}) => {
    //en cada caso de estado , actua o hace algo
    const statusToString = (status : CustomerStatus): string => {
        switch(status){
            case CustomerStatus.Active:
                return "Activo";
            case CustomerStatus.Inactive:
                return "Inactivo";
            case CustomerStatus.Lost:
                return "Perdido";
            default:
                return "Desconocido";
        };
    };

    return(
        <div className="p-6">
            
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Nombre</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Fecha del pedido</th>
                            <th className="p-2 border">Estado</th>
                        </tr>
                    </thead>
                <tbody>
                {customers.map((c) => (
                    <tr key={c.id}>
                        <td className="p-2 border">{c.id}</td>
                        <td className="p-2 border">{c.firstName} {c.lastName}</td>
                        <td className="p-2 border">{c.email}</td>
                        <td className="p-2 border">{new Date(c.registrationDate).toLocaleDateString()}</td>
                        <td className="p-2 border">{statusToString(c.status)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default InactiveCustomerTable;