// src/features/home/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenido al micorservicio de administracion</h1>
      
        <div className="space-y-4">
          <Link to="/admin">
            <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
              Ir al Dashboard de Admin
            </button>
          </Link>

          {/* Agregá más botones si tenés más rutas */}
          <Link to="/reportes">
            <button className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition">
              Ver Reportes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
