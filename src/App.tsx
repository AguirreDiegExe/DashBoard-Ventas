// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./features/admin/components/salescomponents/HomePage";
import AdminDashboard from "./features/admin/components/salescomponents/AdminDashboard";

//pages: 
import CustomerPage from "./features/admin/pages/salespages/IndividualPages/CustomerPage";
import CustomerSatisfacionPage from "./features/admin/pages/salespages/IndividualPages/CustomerSatisfactionPage";
import InactiveCustomerPage from "./features/admin/pages/salespages/IndividualPages/InactiveCustomerPage";
import ModifiedCanceledOrdersPage from "./features/admin/pages/salespages/IndividualPages/ModifiedCanceledOrdersPage";
import SalesPerfomancePage from "./features/admin/pages/salespages/IndividualPages/SalesPerfomancePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/**Rutas para acceder a las demas pages:*/}
        <Route path="/reporte-clientes" element={<CustomerPage/>} /> 
        <Route path="/satisfaccion-cliente" element={<CustomerSatisfacionPage/>} /> 
        <Route path="/clientes-inactivos" element={<InactiveCustomerPage/>} />
        <Route path="/pedidos-cancelados" element={<ModifiedCanceledOrdersPage/>} />
        <Route path="/desempeno-ventas" element={<SalesPerfomancePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
