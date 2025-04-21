import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tr } from 'framer-motion/client';

interface Credito {
  month: string;
  monto: number;
  estado: 'positivo' | 'negativo';
}

function CreditosEF() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [creditos, setCreditos] = useState<Credito[]>([]);

  // Generate years array from 2022 to 2030
  const years = Array.from({ length: 9 }, (_, i) => 2022 + i);
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Generate random credit data
  const generateRandomCreditos = (): Credito[] => {
    return months.map(month => {
      const monto = parseFloat((Math.random() * 5000 - 1000).toFixed(2));
      const estado = monto >= 0 ? 'positivo' as const : 'negativo' as const;
      return { month, monto, estado };
    });
  };

  // Initialize data
  useEffect(() => {
    setCreditos(generateRandomCreditos());
  }, []);

  // Handle year change
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setCreditos(generateRandomCreditos());
  };

  const total = creditos.reduce((sum, { monto }) => sum + monto, 0);
  const totalEstado = total >= 0 ? 'positivo' : 'negativo';

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-xl shadow-md font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Total de Ingresos</h1>
        <Link 
          href="/estadofinanciero"
          className="mt-2 md:mt-0 bg-[#01335E] text-white px-4 py-2 rounded hover:bg-[#1a2d3a] transition-colors text-sm md:text-base text-center"
        >
          ← Volver a Estados Financieros
        </Link>
      </div>
      
      {/* Year selector with return button */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4 pb-2">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-[#253b4a] scrollbar-track-gray-100">
          {years.map(year => (
            <button
              key={year}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-all whitespace-nowrap text-xs md:text-sm ${
                selectedYear === year
                  ? 'bg-[#01335E] text-white font-medium shadow'
                  : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
              }`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      
      {/* Credits display - Responsive */}
      {selectedYear && (
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-3 md:mb-4">
            Créditos {selectedYear}
          </h2>
          
          {/* Mobile version (cards) */}
          <div className="md:hidden space-y-3">
            {creditos.map(({ month, monto, estado }) => (
              <div key={month} className="p-3 border border-gray-800 rounded-lg bg-white">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{month}</span>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    estado === 'positivo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {estado === 'positivo' ? 'Positivo' : 'Negativo'}
                  </span>
                </div>
                <div className="text-gray-800">
                  ${monto.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            ))}
            
            {/* Total for mobile */}
            <div className="p-3 border-2 border-gray-800 rounded-lg bg-white font-bold">
              <div className="flex justify-between items-center mb-1">
                <span>Total</span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                  totalEstado === 'positivo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {total >= 0 ? 'Positivo' : 'Negativo'}
                </span>
              </div>
              <div className="text-gray-800">
                ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
          
          {/* Desktop version (table) */}
          <div className="hidden md:block rounded-lg overflow-hidden border border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#01335E] text-white">
                    <th className="px-4 py-3 text-left font-medium border-r border-gray-600">Mes</th>
                    <th className="px-4 py-3 text-left font-medium border-r border-gray-600">Monto ($)</th>
                    <th className="px-4 py-3 text-left font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {creditos.map(({ month, monto, estado }) => (
                    <tr key={month} className="hover:bg-gray-50 border-b border-gray-800">
                      <td className="px-4 py-3 text-black border-r border-gray-600">{month}</td>
                      <td className="px-4 py-3 text-black border-r border-gray-600">
                        {monto.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="px-4 py-3 text-black">
                        <span className={`inline-block px-3 py-1 rounded-md text-center min-w-[80px] font-medium ${
                          estado === 'positivo' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {estado === 'positivo' ? 'Positivo' : 'Negativo'}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="font-bold border-t-2 border-gray-800">
                    <td className="px-4 py-3 bg-[#01335E] text-white border-r border-gray-600">Total</td>
                    <td className="px-4 py-3 text-black border-r border-gray-600">
                      {total.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td className="px-4 py-3 text-black">
                      <span className={`inline-block px-3 py-1 rounded-md text-center min-w-[80px] font-medium ${
                        totalEstado === 'positivo' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {total >= 0 ? 'Positivo' : 'Negativo'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreditosEF;