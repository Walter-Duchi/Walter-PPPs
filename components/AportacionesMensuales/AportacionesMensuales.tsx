import { useState, useEffect } from 'react';
import ModalPago from '@/components/ModalPago/ModalPago';
import Link from 'next/link';

interface Aporte {
  month: string;
  aporte: number;
  pagado: boolean;
}

interface AportesData {
  [year: number]: Aporte[];
}

interface MontosData {
  [year: number]: {
    [monthIndex: number]: number;
  };
}

interface PagosData {
  [year: number]: {
    [monthIndex: number]: boolean;
  };
}

function AportacionesMensuales() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [aportes, setAportes] = useState<AportesData>({});
  const [montos, setMontos] = useState<MontosData>({});
  const [pagos, setPagos] = useState<PagosData>({});
  const [showModalPago, setShowModalPago] = useState<boolean>(false);
  const [mesAPagar, setMesAPagar] = useState<number | null>(null);

  // Generate years array from 2022 to 2030
  const years = Array.from({ length: 9 }, (_, i) => 2022 + i);
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Initialize data
  const initializeData = (): AportesData => {
    const initialData: AportesData = {};
    years.forEach(year => {
      initialData[year] = months.map(month => {
        if (year < 2024) {
          const aporte = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
          return {
            month,
            aporte,
            pagado: true
          };
        } else {
          return {
            month,
            aporte: 0,
            pagado: false
          };
        }
      });
    });
    return initialData;
  };

  // Load data on mount
  useEffect(() => {
    setAportes(initializeData());
  }, []);

  // Handle amount change
  const handleMontoChange = (year: number, monthIndex: number, value: string) => {
    const newMontos = { ...montos };
    if (!newMontos[year]) newMontos[year] = {};
    newMontos[year][monthIndex] = Number(value);
    setMontos(newMontos);
    
    const newAportes = { ...aportes };
    newAportes[year][monthIndex].aporte = Number(value) || 0;
    setAportes(newAportes);
  };

  // Open payment modal
  const handleAbrirModalPago = (monthIndex: number) => {
    setMesAPagar(monthIndex);
    setShowModalPago(true);
  };

  // Handle completed payment
  const handlePagoCompletado = () => {
    if (mesAPagar !== null) {
      const newPagos = { ...pagos };
      if (!newPagos[selectedYear]) newPagos[selectedYear] = {};
      newPagos[selectedYear][mesAPagar] = true;
      setPagos(newPagos);
    } else {
      const newPagos = { ...pagos };
      if (!newPagos[selectedYear]) newPagos[selectedYear] = {};
      
      months.forEach((_, index) => {
        if (aportes[selectedYear][index].aporte > 0) {
          newPagos[selectedYear][index] = true;
        }
      });
      
      setPagos(newPagos);
    }
    setMesAPagar(null);
  };

  // Calculate pending total
  const calcularPendiente = (): number => {
    if (!aportes[selectedYear]) return 0;
    
    return aportes[selectedYear].reduce((total, item, index) => {
      const estaPagado = selectedYear < 2024 || (pagos[selectedYear] && pagos[selectedYear][index]);
      const tieneMonto = item.aporte > 0;
      return (!estaPagado && tieneMonto) ? total + item.aporte : total;
    }, 0);
  };

  // Get months with pending amount
  const mesesConPendiente = (): number => {
    if (!aportes[selectedYear]) return 0;
    return aportes[selectedYear].filter((item, index) => {
      const estaPagado = selectedYear < 2024 || (pagos[selectedYear] && pagos[selectedYear][index]);
      return item.aporte > 0 && !estaPagado;
    }).length;
  };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-xl shadow-md font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Aportaciones Mensuales</h1>
        <Link 
          href="/estadofinanciero"
          className="mt-2 md:mt-0 bg-[#01335E] text-white px-4 py-2 rounded hover:bg-[#1a2d3a] transition-colors text-sm md:text-base text-center"
        >
          ← Volver a Estados Financieros
        </Link>
      </div>
      
      {/* Years list - Responsive */}
      <div className="flex gap-2 mb-4 md:mb-6 pb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-[#253b4a] scrollbar-track-gray-100">
        {years.map(year => (
          <button
            key={year}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-md transition-all whitespace-nowrap text-xs md:text-sm ${
              selectedYear === year 
                ? 'bg-[#01335E]  text-white font-bold shadow-md' 
                : 'bg-white text-black hover:bg-[#01335E] hover:-translate-y-0.5'
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      
      {/* Contributions display - Responsive */}
      {selectedYear && (
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            Aportaciones {selectedYear}
          </h2>
          
          {/* Mobile version (cards) */}
          <div className="md:hidden space-y-3">
            {aportes[selectedYear]?.map(({month, aporte}, index) => {
              const estaPagado = selectedYear < 2024 || (pagos[selectedYear] && pagos[selectedYear][index]);
              const tieneMonto = aporte > 0;
              
              return (
                <div key={month} className="p-3 border border-gray-200 rounded-lg bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium">{month}</span>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                      !tieneMonto && selectedYear >= 2024 
                        ? 'bg-gray-100 text-gray-600' 
                        : estaPagado 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {!tieneMonto && selectedYear >= 2024 ? 'Sin monto' : 
                      estaPagado ? 'Pagado' : 'Pendiente'}
                    </span>
                  </div>
                  
                  {selectedYear >= 2024 && (
                    <div className="mb-2">
                      <label className="block text-xs text-gray-500 mb-1">Monto a Aportar</label>
                      <input
                        type="number"
                        min="0"
                        value={montos[selectedYear]?.[index] || ''}
                        onChange={(e) => handleMontoChange(selectedYear, index, e.target.value)}
                        placeholder="Ingrese monto"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:border-[#253b4a] focus:outline-none focus:ring-1 focus:ring-[#253b4a]"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Aporte: ${aporte.toLocaleString()}</span>
                    {selectedYear >= 2024 && tieneMonto && !estaPagado && (
                      <button 
                        className="bg-green-600 text-white px-3 py-1 text-xs rounded hover:bg-green-700 transition-all font-medium"
                        onClick={() => handleAbrirModalPago(index)}
                      >
                        Pagar
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Total for mobile */}
            <div className="p-3 border-2 border-[#253b4a] rounded-lg bg-gray-50 font-bold">
              <div className="text-sm">Total Pendiente</div>
              {selectedYear >= 2024 && calcularPendiente() > 0 ? (
                <div className="text-red-600 text-sm">
                  ${calcularPendiente().toLocaleString()} ({mesesConPendiente()} meses pendientes)
                </div>
              ) : (
                <div className="text-green-600 text-sm">Todos los aportes están pagados</div>
              )}
              
              {selectedYear >= 2024 && mesesConPendiente() > 0 && (
                <button 
                  className="w-full mt-2 bg-green-700 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-800 transition-all font-medium"
                  onClick={() => {
                    setMesAPagar(null);
                    setShowModalPago(true);
                  }}
                >
                  Pagar Todo (${calcularPendiente().toLocaleString()})
                </button>
              )}
            </div>
          </div>
          
          {/* Desktop version (table) */}
          <div className="hidden md:block rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#01335E] text-white">
                    <th className="px-4 py-3 text-left">Mes</th>
                    <th className="px-4 py-3 text-left">Monto a Aportar ($)</th>
                    <th className="px-4 py-3 text-left">Aporte ($)</th>
                    <th className="px-4 py-3 text-left">Estado</th>
                    <th className="px-4 py-3 text-left">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {aportes[selectedYear]?.map(({month, aporte}, index) => {
                    const estaPagado = selectedYear < 2024 || (pagos[selectedYear] && pagos[selectedYear][index]);
                    const tieneMonto = aporte > 0;
                    
                    return (
                      <tr key={month} className="hover:bg-gray-50 border-b border-gray-200">
                        <td className="px-4 py-3">{month}</td>
                        <td className="px-4 py-3">
                          {selectedYear >= 2024 && (
                            <input
                              type="number"
                              min="0"
                              value={montos[selectedYear]?.[index] || ''}
                              onChange={(e) => handleMontoChange(selectedYear, index, e.target.value)}
                              placeholder="Ingrese monto"
                              className="border border-gray-300 rounded px-3 py-2 w-32 focus:border-[#253b4a] focus:outline-none focus:ring-1 focus:ring-[#253b4a]"
                            />
                          )}
                        </td>
                        <td className="px-4 py-3">{aporte.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-3 py-1 rounded-md text-center min-w-[90px] font-medium ${
                            !tieneMonto && selectedYear >= 2024 
                              ? 'bg-gray-100 text-gray-600' 
                              : estaPagado 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                          }`}>
                            {!tieneMonto && selectedYear >= 2024 ? 'Sin monto' : 
                            estaPagado ? 'Pagado' : 'Pendiente'}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {selectedYear >= 2024 && tieneMonto && !estaPagado && (
                            <button 
                              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all hover:-translate-y-0.5 shadow hover:shadow-md font-medium"
                              onClick={() => handleAbrirModalPago(index)}
                            >
                              Pagar
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="font-bold bg-gray-50">
                    <td className="px-4 py-3 border-t-2 border-[#253b4a]" colSpan={2}>Total Pendiente</td>
                    <td className="px-4 py-3 border-t-2 border-[#253b4a]" colSpan={3}>
                      {selectedYear >= 2024 && calcularPendiente() > 0 ? (
                        <span className="text-red-600">
                          ${calcularPendiente().toLocaleString()} ({mesesConPendiente()} meses pendientes)
                        </span>
                      ) : (
                        <span className="text-green-600">Todos los aportes están pagados</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {selectedYear >= 2024 && mesesConPendiente() > 0 && (
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg text-center md:text-right">
              <button 
                className="w-full md:w-auto bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-green-800 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-bold text-sm md:text-base"
                onClick={() => {
                  setMesAPagar(null);
                  setShowModalPago(true);
                }}
              >
                Pagar Todo (${calcularPendiente().toLocaleString()})
              </button>
              <p className="text-gray-600 text-xs md:text-sm mt-2">
                Se marcarán como pagados los {mesesConPendiente()} meses con aporte registrado
              </p>
            </div>
          )}
        </div>
      )}

      {/* Payment modal */}
      {showModalPago && (
        <ModalPago 
          onClose={() => setShowModalPago(false)}
          onPagoCompletado={handlePagoCompletado}
          montoAportaciones={
            mesAPagar !== null 
              ? aportes[selectedYear][mesAPagar].aporte 
              : calcularPendiente()
          }
        />
      )}
    </div>
  );
}

export default AportacionesMensuales;