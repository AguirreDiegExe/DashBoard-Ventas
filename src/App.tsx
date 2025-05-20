// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/admin/components/HomePage";
import AdminDashboard from "./features/admin/components/salescomponents/AdminDashboardSales";
import AdminDashboardDepot from "./features/admin/components/depotcomponents/AdminDashboardDepot";
//pages: 
import CustomerPage from "./features/admin/pages/salespages/IndividualPages/CustomerPage";
import CustomerSatisfacionPage from "./features/admin/pages/salespages/IndividualPages/CustomerSatisfactionPage";
import InactiveCustomerPage from "./features/admin/pages/salespages/IndividualPages/InactiveCustomerPage";
import ModifiedCanceledOrdersPage from "./features/admin/pages/salespages/IndividualPages/ModifiedCanceledOrdersPage";
import SalesPerfomancePage from "./features/admin/pages/salespages/IndividualPages/SalesPerfomancePage";

import DailyMissingPage from "./features/admin/pages/depotpages/IndividualPagesDepot/DailyMissingPage";

//En route es donde se definen todas las rutas: 
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/**acede a todos los reportes de ventas */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/**accede a todos los reportes de de deposito */}
        <Route path="/adminDepot" element={<AdminDashboardDepot /> } />
        {/**Rutas para acceder a las demas pages de ventas :*/}
        <Route path="/reporte-clientes" element={<CustomerPage/>} /> 
        <Route path="/satisfaccion-cliente" element={<CustomerSatisfacionPage/>} /> 
        <Route path="/clientes-inactivos" element={<InactiveCustomerPage/>} />
        <Route path="/pedidos-cancelados" element={<ModifiedCanceledOrdersPage/>} />
        <Route path="/desempeno-ventas" element={<SalesPerfomancePage/>} />
        {/**Rutas para acceder a las demas pages de deposito:  */}
        <Route path="/reporte-Faltantes" element={<DailyMissingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
