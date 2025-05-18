import React from "react";
import CustomerPage from "../../pages/salespages/IndividualPages/CustomerPage";
import InactiveCustomerPage from "../../pages/salespages/IndividualPages/InactiveCustomerPage";
import CustomerSatisfacionPage from "../../pages/salespages/IndividualPages/CustomerSatisfactionPage";
import ModifiedCanceledOrdersPage from "../../pages/salespages/IndividualPages/ModifiedCanceledOrdersPage";
import SalesPerfomancePage from "../../pages/salespages/IndividualPages/SalesPerfomancePage";


const AdminDashboard: React.FC = () => {
  return(
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Panel de Administración
      </h1>

      
      <div className="flex flex-wrap gap-8 justify-center">
        
        <section className="bg-white shadow-md rounded-lg p-6 max-w-[600px] w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Reporte de Clientes
          </h2>
          <CustomerPage />
        </section>

        
        <section className="bg-white shadow-md rounded-lg p-6 max-w-[600px] w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Reporte: Clientes Inactivos o Perdidos
          </h2>
          <InactiveCustomerPage />
        </section>

      </div>

      <div className="flex flex-wrap gap-8 justify-center">

        <section className="bg-white shadow-md rounded-lg p-6 max-w-[600px] w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Satisfaction del cliente
          </h2>
          <CustomerSatisfacionPage/>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 max-w-[600px] w-full">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            Pedidos cancelados y Modificados: 
          </h2>
          <ModifiedCanceledOrdersPage/>
        </section>

      </div>

      <div className="bg-white">
        <section className="bg-white shadow-md rounded-lg p-6 w-full">
          <SalesPerfomancePage/>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;