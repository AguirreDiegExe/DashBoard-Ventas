import React, { useEffect, useState } from "react";
import { OrderStatus, type Order } from "../../../../sales/types/OrderType";
import ModifiedCanceledOrdersTable from "../../../components/salescomponents/IndividualComponents/ModifiedCanceledOrdersTable";
import GraphModifiedCanceledOrders from "../../../components/salescomponents/Graphs/GraphModifiedCanceledOrder";
import API from "../../../../../api/axios";

// Simulación de pedidos. Reemplazar por fetch real.
const mockOrders: Order[] = [
  {
    id: 1,
    customerId: "C001",
    status: OrderStatus.Canceled,
    orderDate: "2025-04-10",
    modifiedStatusDate: "2025-04-12",
    items: []
  },
  {
    id: 2,
    customerId: "C002",
    status: OrderStatus.Modified,
    orderDate: "2025-04-11",
    modifiedStatusDate: "2025-04-13",
    items: []
  },
  {
    id: 3,
    customerId: "C003",
    status: OrderStatus.Canceled,
    orderDate: "2025-04-10",
    items: []
  }
];

const ModifiedCanceledOrdersPage: React.FC = () => {
    const [Orders,setOrders] = useState<Order[]>([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        // Reemplazar por llamada a backend/API real
        
        const fetchOrders = async () => {
        try {
            const response = await API.get<Order[]>("/orders"); // 👈 usa tu instancia
            setOrders(response.data); // 👈 carga los datos al estado
        } catch (err: any) {
            setError("Error al cargar los pedidos.");
            console.error(err);
        } finally {
        setLoading(false);
        }
    };

        fetchOrders();
        
    //setOrders(mockOrders);
    }, []);

    return(
        <div className="p-4">
            <ModifiedCanceledOrdersTable orders={Orders} /> 
            <GraphModifiedCanceledOrders orders={Orders}/>
        </div>
    )
}

export default ModifiedCanceledOrdersPage;