import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

//5 tarjetas , descripcion del reporte , que es y demas
const AdminDashboard: React.FC = () => {

  const ReportDesciption = [
    {
      title: "Reporte de Clientes",
      description: "Visualiza todos los clientes registrados.",
      path: "/reporte-clientes",
    },
    {
      title: "Clientes Inactivos o Perdidos",
      description: "Analiza los clientes que dejaron de comprar.",
      path: "/clientes-inactivos",
    },
    {
      title: "Satisfacción del Cliente",
      description: "Mide la satisfacción según las opiniones del cliente.",
      path: "/satisfaccion-cliente",
    },
    {
      title: "Pedidos Cancelados o Modificados",
      description: "Consulta los pedidos alterados por alguna razón.",
      path: "/pedidos-cancelados",
    },
    {
      title: "Desempeño por Ventas",
      description: "Revisa cómo ha rendido el equipo de ventas.",
      path: "/desempeno-ventas",
    },
  ]
  return(
    <div>
      <Header/>
        <div className="p-8 space-y-10">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Panel de administracion de ventas
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {ReportDesciption.map((report) =>
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
  );
};

export default AdminDashboard;