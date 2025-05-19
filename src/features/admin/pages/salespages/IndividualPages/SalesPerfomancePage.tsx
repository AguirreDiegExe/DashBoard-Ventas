import { useEffect, useState } from "react";
import Header from "../../../components/Header";
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
    const [empleados, setEmpleados] = useState<Employee[]>([]);
    
    useEffect(() => {
        const fetchEmpleados = async () => {
        try {
            const response = await API.get("/empleados"); // Ajustá el endpoint si es diferente
            setEmpleados(response.data);
        } catch (error) {
            console.error("Error al obtener empleados, se utilizara datos ficticios", error);
            //Sacar esta linea del codigo cuando se utilice la api:
            setEmpleados(empleadosMock); // Fallback mock
          }
        };

        fetchEmpleados();
    }, []);

    return(
      <div>
        <Header/>
        <div className="p-4"> 
            <h2 className="text-2xl font-bold text-blue-800 text-center">
              Reporte: Desempeño por ventas 
            </h2>
            <SalesPerfomanceTable rows={empleados} />
            <GraphSalesPerfomance data={empleados} />
        </div>
      </div>
    )
}

export default SalesPerfomancePage;