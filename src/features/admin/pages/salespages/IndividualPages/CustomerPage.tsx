// src/features/admin/pages/CustomerPage.tsx
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { CustomerStatus, type Customer } from "../../../../sales/types/CustomerType";
import { OrderStatus, type Order } from "../../../../sales/types/OrderType";
import CustomerTable from "../../../components/salescomponents/IndividualComponents/CustomerTable";
import CustomerOrdersChart from "../../../components/salescomponents/Graphs/GraphCustomerReport";
import API from "../../../../../api/axios";

const mockCustomers: Customer[] = [
  {
    id: "1",
    firstName: "Juan",
    lastName: "Pérez",
    email: "juanperez@example.com",
    phoneNumber: "123456789",
    address: "Calle Falsa 123",
    registrationDate: "2023-01-01T00:00:00Z",
    status: CustomerStatus.Active,
    descriptionSatisfacition: ""
  },
  {
    id: "2",
    firstName: "María",
    lastName: "Gómez",
    email: "mariagomez@example.com",
    phoneNumber: "987654321",
    address: "Avenida Siempre Viva 742",
    registrationDate: "2023-02-01T00:00:00Z",
    status:CustomerStatus.Inactive,
    descriptionSatisfacition: ""
  },
];

const mockOrders: Order[] = [
  {
    id: 1,
    customerId: "1",
    orderDate: "2023-03-01",
    status: OrderStatus.Confirmed,
    items: [],
  },
  {
    id: 2,
    customerId: "1",
    orderDate: "2023-03-02",
    status: OrderStatus.InPreparation,
    items: [],
  },
  {
    id: 3,
    customerId: "2",
    orderDate: "2023-03-03",
    status: OrderStatus.Pending,
    items: [],
  },
];

const CustomerPage: React.FC = () => {
  const [data, setData] = useState<
    {
      fullName: string;
      email: string;
      phone: string;
      orderCount: number;
    }[]
  >([]);

  useEffect(() => {
    const customers = mockCustomers;
    const orders = mockOrders;

    const enrichedData = customers.map((customer) => {
      const orderCount = orders.filter(
        (o) => o.customerId === customer.id
      ).length;

      return {
        fullName: `${customer.firstName} ${customer.lastName}`,
        email: customer.email,
        phone: customer.phoneNumber,
        orderCount,
      };
    });

    setData(enrichedData);
  }, []);

  /*En caso de utilizar el axios: 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customerRes, orderRes] = await Promise.all([
          API.get<Customer[]>("/customers"),
          API.get<Order[]>("/orders"),
        ]);

        const customers = customerRes.data;
        const orders = orderRes.data;

        const enrichedData = customers.map((customer) => {
          const orderCount = orders.filter((o) => o.customerId === customer.id).length;

          return {
            fullName: `${customer.firstName} ${customer.lastName}`,
            email: customer.email,
            phone: customer.phoneNumber,
            orderCount,
          };
        });

        setData(enrichedData);
      } catch (error) {
        console.error("Fallo al obtener datos reales, se usarán datos mock:", error);
      }
    };

    fetchData();
  }, []);
  */

  return (
    <div>
      <Header/>
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">
          Clientes y Pedidos
        </h1>
        <CustomerTable data={data} />
        <CustomerOrdersChart data={data} />
      </div>
    </div>
  );
};

export default CustomerPage;
