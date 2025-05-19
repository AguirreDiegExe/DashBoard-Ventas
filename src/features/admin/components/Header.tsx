//import { use } from 'react';
//import logoverona from '../imgs/LogoVerona.png';
//import user from '../imgs/Persona.png';

export const Header: React.FC = () => {

    const UserName  = "Encargada de Ventas";
    return (
      <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div>
        {/* Reemplazamos el <Link> por un <span> o un <a> sin funcionalidad */}
        <span className="font-bold text-lg">
          Distribuidora Verona
        </span>
      </div>

      {/* Contenido visual estático, sin lógica */}
      <div className="flex gap-4 items-center">
        <p>Gerente de administracion</p>
        <p className="text-sm text-gray-300">Administracion</p>
        <button
          // onClick={logout}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
    );
}

export default Header;