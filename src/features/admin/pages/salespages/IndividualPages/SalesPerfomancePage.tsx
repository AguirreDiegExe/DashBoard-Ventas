import { useEffect, useState } from "react";
import type { Employee } from "../../../../sales/types/EmployeeType";
import { OrderStatus, type Order } from "../../../../sales/types/OrderType";
import SalesPerfomanceTable from "../../../components/salescomponents/IndividualComponents/SalesPerfomanceTable";
import GraphSalesPerfomance from "../../../components/salescomponents/Graphs/GraphSalesPerfomance";
import API from "../../../../../api/axios";

const empleadosMock: Employee[] = [
  {
    id: "1",
    firstName: "Juan",
    lastName: "Pérez",
    OrderId: "A001",
    OrderDate: "2025-05-01",
    OrderItems: [
  {
    id: 1,
    status: OrderStatus.Confirmed,
    orderDate: "2025-05-01",
    customerId: "C001",
    items: [
      {
        id: 1,
        orderId: 1,
        productName: "Coca Cola",
        productBrand: "Coca Cola Company",
        quantity: 2,
        unitPrice: 100,
      },
    ],
  },
],

  },
];

const SalesPerfomancePage = () => {
    const [empleados,setEmpleados] = useState<Employee[]>([]); 

    useEffect(() => {
        const fetchEmpleados = async () => {
        try {
            const response = await API.get("/empleados"); // Ajustá el endpoint si es diferente
            setEmpleados(response.data);
        } catch (error) {
            console.error("Error al obtener empleados, usando datos mock:", error);
            setEmpleados(empleadosMock); // Fallback mock
        }
        };

        fetchEmpleados();
    }, []);
    
    return(
        <div className="p-4">
            
            <SalesPerfomanceTable rows={empleados} />
            <GraphSalesPerfomance data={empleados} />
        </div>
    )
}

export default SalesPerfomancePage;