"use client";
import { useState } from 'react';
import Image from 'next/image';

// Import images
import user1 from '../../app/assets/image/Perfil.jpg';
import user2 from '../../app/assets/image/Perfil1.png';

function ListaAccionistas() {
  const [accionistas, setAccionistas] = useState([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      imagen: user1,
      porcentaje: 15.5,
      seguido: false
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'Gómez',
      imagen: user2,
      porcentaje: 12.3,
      seguido: true
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'López',
      imagen: user1,
      porcentaje: 8.7,
      seguido: false
    },
  ]);

  const handleSeguir = (id) => {
    setAccionistas(accionistas.map(accionista => 
      accionista.id === id 
        ? { ...accionista, seguido: !accionista.seguido } 
        : accionista
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans pt-20"> {/* Añadido pt-20 para espacio del sidebar fijo */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Accionistas</h1>
      
      {/* Versión móvil (cards) */}
      <div className="md:hidden space-y-4">
        {accionistas.map(accionista => (
          <div key={accionista.id} className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={accionista.imagen} 
                    alt={`${accionista.nombre} ${accionista.apellido}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {accionista.nombre} {accionista.apellido}
                  </p>
                  <p className="text-gray-600 text-sm">{accionista.porcentaje}%</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                className={`flex-1 py-2 rounded-full font-medium transition-all ${
                  accionista.seguido 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => handleSeguir(accionista.id)}
              >
                {accionista.seguido ? 'Siguiendo' : 'Seguir'}
              </button>
              <button className="flex-1 py-2 rounded-full bg-[#253b4a] text-white font-medium hover:bg-[#1a2d3a] transition-all">
                Ver Perfil
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Versión desktop (tabla) */}
      <div className="hidden md:block overflow-x-auto shadow-md rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="bg-[#253b4a] text-white">
              <th className="px-4 py-3 text-left">Accionista</th>
              <th className="px-4 py-3 text-left">Porcentaje</th>
              <th className="px-4 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {accionistas.map(accionista => (
              <tr key={accionista.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={accionista.imagen} 
                        alt={`${accionista.nombre} ${accionista.apellido}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-semibold text-gray-800">
                      {accionista.nombre} {accionista.apellido}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-[#253b4a] text-lg">
                  {accionista.porcentaje}%
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button 
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        accionista.seguido 
                          ? 'bg-green-600 text-white hover:bg-green-700' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                      onClick={() => handleSeguir(accionista.id)}
                    >
                      {accionista.seguido ? 'Siguiendo' : 'Seguir'}
                    </button>
                    <button className="px-4 py-2 rounded-full bg-[#253b4a] text-white font-medium hover:bg-[#1a2d3a] transition-all">
                      Ver Perfil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaAccionistas;