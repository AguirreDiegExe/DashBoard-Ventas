import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

const AdminDashboardDepot : React.FC = () => {
    const ReportDescription = [
        {
            title:"Reporte de tiempos promedios para el armado",
            description: "Calcula el tiempo promedio empleado en armar pedidos, facilitando el análisis de eficiencia",
            path: "/reporte-TiemposPromedio"
        },
        {
            title:"Reporte de faltantes diarios",
            description:"Muestra los pedidos con productos faltantes",
            path:"/reporte-Faltantes"
        },
        {
            title:"Reporte Pedidos completados por dia",
            description:"Indica la cantidad de pedidos completados diariamente, facilitando el control de productividad del equipo de depósito",
            path:"/reporte-PedidosCompletados"
        },
        {
            title:"Reporte Productividad por equipo",
            description:"Evalúa la cantidad de pedidos completados por cada equipo, permitiendo identificar grupos de alto y bajo rendimiento. ",
            path:"/reporte-ProductividadEquipo"
        },
        {
            title:"Reporte Ingresos por cliente",
            description:"Muestra los ingresos generados por cada cliente",
            path:"/reporte-IngresosCliente"
        },
        {
            title:"Reporte Pedidos facturados",
            description:"Muestra la totalidad de los pedidos facturados hasta el momento",
            path:"/reporte-PedidosFacturados"
        },
        {
            title:"Reporte Tiempo de proceso de facturacion",
            description:"Mide el tiempo promedio necesario para facturar un pedido, ayudando a identificar ineficiencias en el proceso de facturación.",
            path:"/reporte-TiempoProceso"
        }
    ]

    return(
        <div>
            <Header/>
            <div className="p-8 space-y-10">
                    <h1 className="text-3xl font-bold text-center text-blue-900">
                      Panel de administracion de Deposito
                    </h1>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {ReportDescription.map((report) =>
                        <Link
                            to={report.path}
                            key={report.title}
                            className="bg-white hover:shadow-lg transition-shadow shadow-md rounded-lg p-6 max-w-sm w-full border border-gray-200"
                            >
                            <h2 className="text-xl font-semibold mb-2 text-blue-700">
                                {report.title}
                            </h2>
                            <p className="text-gray-600">{report.description}</p>
                        </Link> 
                        )}
                    </div>
            </div>
        </div>
    )
}

export default AdminDashboardDepot;