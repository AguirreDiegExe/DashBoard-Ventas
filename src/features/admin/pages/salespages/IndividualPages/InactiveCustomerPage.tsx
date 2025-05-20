import React , { useEffect, useState } from "react";
import Header from "../../../components/Header";
import InactiveCustomerTable from "../../../components/salescomponents/IndividualComponentsSales/InactiveCustomerTable";
import type { Customer } from "../../../../sales/types/CustomerType";
import { CustomerStatus } from "../../../../sales/types/CustomerType";
import GraphInactiveCustomer from "../../../components/salescomponents/GraphsSales/GraphInactiveCustomer";
import API from "../../../../../api/axios";


const dummyCustomers: Customer[] = [
  {
    id: "1",
    firstName: "Sofía",
    lastName: "Martínez",
    email: "sofia@example.com",
    phoneNumber: "123456789",
    address: "Calle Falsa 123",
    registrationDate: "2023-01-10T00:00:00Z",
    status: CustomerStatus.Inactive,
    descriptionSatisfacition: ""
  },
  {
    id: "2",
    firstName: "Pedro",
    lastName: "Fernández",
    email: "pedro@example.com",
    phoneNumber: "987654321",
    address: "Avenida Siempre Viva 742",
    registrationDate: "2023-02-20T00:00:00Z",
    status: CustomerStatus.Active,
    descriptionSatisfacition: ""
  },
  {
    id: "3",
    firstName: "Lucía",
    lastName: "García",
    email: "lucia@example.com",
    phoneNumber: "555123456",
    address: "Boulevard Central 456",
    registrationDate: "2022-11-05T00:00:00Z",
    status: CustomerStatus.Lost,
    descriptionSatisfacition: ""
  },
];

const InactiveCustomerPage: React.FC = () => {
  //datos y UseEffect para llamar el axios 
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
            const response = await API.get<Customer[]>("/customers");
            const allCustomers = response.data;

            // Lógica: Filtrar inactivos o perdidos
            const inactiveOrLost = allCustomers.filter(
            (c) => c.status === CustomerStatus.Inactive || c.status === CustomerStatus.Lost
            );

            setCustomers(inactiveOrLost);
        } catch (err: any) {
            setError("Error al obtener los clientes.");
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchCustomers();
    }, []);

    if (loading) return <p className="p-4">Cargando clientes,espere un momento...</p>;
    if (error) return <p className="p-4 text-red-500">{error}</p>;

    /* Utilizar con datos ficticios: 
    const filteredCustomers = dummyCustomers.filter(
        (c) => c.status === CustomerStatus.Inactive || c.status === CustomerStatus.Lost
    );*/

    return (
    <div>
      <Header/>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-blue-800 text-center">
          Reporte: Cliente inactivos y/o Perdidos
        </h2>
        <InactiveCustomerTable customers={customers} />
        <GraphInactiveCustomer customers={customers}/>
      </div>
    </div>
  );
}

export default InactiveCustomerPage;
