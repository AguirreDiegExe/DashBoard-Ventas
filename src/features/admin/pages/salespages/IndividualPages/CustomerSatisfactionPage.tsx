import React, { useEffect, useState } from "react";
import CustomerSatisfactionTable from "../../../components/salescomponents/IndividualComponents/CustomerSatisfactionTable";
import CustomerSatisfactionChart from "../../../components/salescomponents/Graphs/GraphSatisfactionCustomer";
import { CustomerStatus, type Customer } from "../../../../sales/types/CustomerType";
import { OrderStatus, type Order } from "../../../../sales/types/OrderType";
import API from "../../../../../api/axios";

const MOCK_CUSTOMERS: Customer[] = [
  {
    id: "1",
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan@example.com",
    phoneNumber: "123456789",
    address: "Calle Falsa 123",
    registrationDate: "2023-01-01",
    status: CustomerStatus.Active,
    descriptionSatisfacition: "Muy buena atención",
  },
  {
    id: "2",
    firstName: "María",
    lastName: "Gómez",
    email: "maria@example.com",
    phoneNumber: "987654321",
    address: "Avenida Siempreviva 742",
    registrationDate: "2023-02-01",
    status: CustomerStatus.Lost,
    descriptionSatisfacition: "Poca puntualidad",
  },
];

const MOCK_ORDERS: Order[] = [
  {
    id: 100,
    status: OrderStatus.Confirmed,
    orderDate: "2024-04-01",
    customerId: "1",
    items: [],
  },
  {
    id: 101,
    status: OrderStatus.Pending,
    orderDate: "2024-04-10",
    customerId: "2",
    items: [],
  },
];

const CustomerSatisfacionPage: React.FC = () => {
  const [customers, setCustomers] = useState<(Customer & { pedidoID?: string | number })[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const mergedMock = MOCK_CUSTOMERS.map((customer) => {
      const order = MOCK_ORDERS.find((o) => o.customerId === customer.id);
      return{
        ...customer,
        pedidoID : order?.id ?? "N/A",
      }
    })
    setCustomers(mergedMock);
    /*const fetchData = async () => {
      try {
        const [customerRes, orderRes] = await Promise.all([
          API.get<Customer[]>("/customers"),
          API.get<Order[]>("/orders"),
        ]);

        const mergedCustomers = customerRes.data.map((customer) => {
          const order = orderRes.data.find((o) => o.customerId === customer.id);
          return {
            ...customer,
            pedidoID: order?.id ?? "N/A",
          };
        });

        setCustomers(mergedCustomers);
        setOrders(orderRes.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();*/
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-800">
        Reporte: Satisfacción del Cliente
      </h2>
      <CustomerSatisfactionTable data={customers} />
      <CustomerSatisfactionChart customers={customers} />
    </div>
  );
};

export default CustomerSatisfacionPage;


