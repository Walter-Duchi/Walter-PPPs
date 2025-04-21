"use client";
import { FaBell, FaCalendarAlt, FaClock, FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';

export default function Notificaciones() {
  // Estado para el filtro activo
  const [filtro, setFiltro] = useState('todas');

  // Datos de ejemplo para notificaciones
  const notificaciones = [
    {
      id: 1,
      tipo: 'reunion',
      titulo: 'Reunión de Accionistas',
      fecha: new Date(Date.now() + 86400000 * 2), // 2 días en el futuro
      hora: '15:00',
      descripcion: 'Revisión de balances trimestrales',
      leida: false
    },
    {
      id: 2,
      tipo: 'recordatorio',
      titulo: 'Vencimiento de documentación',
      fecha: new Date(Date.now() + 86400000 * 5), // 5 días en el futuro
      hora: '',
      descripcion: 'Recordatorio para enviar documentación requerida',
      leida: true
    },
    {
      id: 3,
      tipo: 'reunion',
      titulo: 'Junta Directiva',
      fecha: new Date(Date.now() + 86400000 * 7), // 1 semana en el futuro
      hora: '10:30',
      descripcion: 'Planificación estratégica para el próximo año',
      leida: false
    },
    {
      id: 4,
      tipo: 'mensaje',
      titulo: 'Nuevo mensaje del Presidente',
      fecha: new Date(Date.now() - 86400000), // Ayer
      hora: '',
      descripcion: 'Por favor revisar el nuevo reglamento interno',
      leida: true
    }
  ];

  // Filtrar notificaciones según el filtro seleccionado
  const notificacionesFiltradas = notificaciones.filter(notif => {
    if (filtro === 'todas') return true;
    if (filtro === 'reuniones') return notif.tipo === 'reunion';
    if (filtro === 'otras') return notif.tipo !== 'reunion';
    return true;
  });

  // Formatear fecha a formato legible
  const formatFecha = (fecha) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const fechaNotif = new Date(fecha);
    fechaNotif.setHours(0, 0, 0, 0);
    
    const diffTime = fechaNotif - hoy;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hoy";
    if (diffDays === 1) return "Mañana";
    if (diffDays === -1) return "Ayer";
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fechaNotif.toLocaleDateString('es-ES', options);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Encabezado */}
        <div className="bg-[#01335E] p-6 flex items-center">
          <FaBell className="text-white text-2xl mr-4" />
          <h1 className="text-2xl font-bold text-white">Notificaciones</h1>
        </div>

        {/* Filtros */}
        <div className="p-4 border-b flex flex-wrap justify-between items-center">
          <div className="mb-2 md:mb-0">
            <span className="font-medium mr-2">Filtrar:</span>
            <button 
              onClick={() => setFiltro('todas')}
              className={`px-3 py-1 rounded-md mr-2 text-sm ${
                filtro === 'todas' ? 'bg-[#f5a524] text-white' : 'bg-gray-200'
              }`}
            >
              Todas
            </button>
            <button 
              onClick={() => setFiltro('reuniones')}
              className={`px-3 py-1 rounded-md mr-2 text-sm ${
                filtro === 'reuniones' ? 'bg-[#f5a524] text-white' : 'bg-gray-200'
              }`}
            >
              Reuniones
            </button>
            <button 
              onClick={() => setFiltro('otras')}
              className={`px-3 py-1 rounded-md text-sm ${
                filtro === 'otras' ? 'bg-[#f5a524] text-white' : 'bg-gray-200'
              }`}
            >
              Otras
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Mostrando {notificacionesFiltradas.length} notificaciones
          </div>
        </div>

        {/* Lista de notificaciones */}
        <div className="divide-y divide-gray-200">
          {notificacionesFiltradas.length > 0 ? (
            notificacionesFiltradas.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-5 hover:bg-gray-50 transition-colors ${!notif.leida ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start">
                  {/* Icono según tipo */}
                  <div className={`p-3 rounded-full mr-4 ${
                    notif.tipo === 'reunion' ? 'bg-[#25466a] text-white' : 
                    'bg-[#f5a524] text-white'
                  }`}>
                    {notif.tipo === 'reunion' ? (
                      <FaUserFriends className="text-lg" />
                    ) : (
                      <FaBell className="text-lg" />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-medium ${!notif.leida ? 'text-[#01335E]' : 'text-gray-700'}`}>
                        {notif.titulo}
                      </h3>
                      {!notif.leida && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          Nuevo
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mt-1">{notif.descripcion}</p>

                    {/* Fecha y hora */}
                    <div className="mt-3 flex flex-wrap items-center text-sm text-gray-500">
                      <div className="flex items-center mr-4 mb-1">
                        <FaCalendarAlt className="mr-1" />
                        <span>{formatFecha(notif.fecha)}</span>
                      </div>
                      {notif.hora && (
                        <div className="flex items-center mb-1">
                          <FaClock className="mr-1" />
                          <span>{notif.hora} hrs</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No hay notificaciones en esta categoría
            </div>
          )}
        </div>

        {/* Pie de página */}
        <div className="p-4 border-t text-center text-sm text-gray-500">
          {filtro === 'reuniones' 
            ? 'Mostrando solo reuniones programadas' 
            : filtro === 'otras' 
              ? 'Mostrando otras notificaciones' 
              : 'Mostrando todas las notificaciones'}
        </div>
      </div>
    </div>
  );
}