"use client";
import { useState } from 'react';

export default function Ganancias() {
  // Años disponibles (2023-2030)
  const years = Array.from({length: 8}, (_, i) => 2023 + i);
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Estado para selección
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(0);

  // Generar datos mensuales aleatorios con sumas acumuladas
  const generateYearData = () => {
    return years.map(year => {
      // Generar datos para los 12 meses
      const monthlyData = months.map(month => ({
        name: month,
        intereses: Math.floor(Math.random() * 3000) + 1000, // Entre 1,000 y 4,000
        creditos: Math.floor(Math.random() * 5000) + 2000,  // Entre 2,000 y 7,000
        otros: Math.floor(Math.random() * 2000) + 500,      // Entre 500 y 2,500
      }));
      
      // Calcular total anual sumando todos los meses
      const totalAnual = monthlyData.reduce((sum, month) => {
        return sum + month.intereses + month.creditos + month.otros;
      }, 0);
      
      return {
        year,
        monthlyData,
        totalAnual,
        limite: 135000 // Límite fijo para todos los años
      };
    });
  };

  const [yearsData] = useState(generateYearData());
  
  // Datos actuales
  const currentYearData = yearsData.find(y => y.year === selectedYear) || yearsData[1];
  const currentMonthData = currentYearData.monthlyData[selectedMonth];
  const monthTotal = currentMonthData.intereses + currentMonthData.creditos + currentMonthData.otros;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-with bg-white rounded-xl shadow-md overflow-hidden p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#01335E] mb-6">Ganancias Anuales y Mensuales</h1>

        {/* Selector de años */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#25466a]">Seleccione un Año</h2>
          <div className="flex flex-wrap gap-2">
            {yearsData.map(({ year }) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg ${
                  selectedYear === year
                    ? 'bg-[#01335E] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Barra verde anual - Suma de todos los meses */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#25466a]">Resumen Anual - {selectedYear}</h2>
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-200 rounded-full h-8 mb-2">
              <div 
                className="bg-green-500 h-8 rounded-full flex items-center justify-end pr-2"
                style={{ 
                  width: `${(currentYearData.totalAnual / currentYearData.limite) * 100}%`,
                  maxWidth: '100%'
                }}
              >
                <span className="text-white font-bold">${currentYearData.totalAnual.toLocaleString()}</span>
              </div>
            </div>
            <div className="w-full flex justify-between text-sm text-gray-600">
              <span>Total acumulado: ${currentYearData.totalAnual.toLocaleString()}</span>
              <span>Límite anual: ${currentYearData.limite.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Selector de meses */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[#25466a]">Seleccione un Mes</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {currentYearData.monthlyData.map((month, index) => (
              <button
                key={month.name}
                onClick={() => setSelectedMonth(index)}
                className={`p-2 rounded-lg text-sm ${
                  selectedMonth === index
                    ? 'bg-[#01335E] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {month.name.substring(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Barra verde mensual - Suma de categorías */}
        <div className="bg-[#f0f8ff] p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[#25466a]">
            Detalle de {currentMonthData.name} {selectedYear}
          </h2>
          
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-200 rounded-full h-8 mb-2">
              <div 
                className="bg-green-500 h-8 rounded-full flex items-center justify-end pr-2"
                style={{ 
                  width: `${(monthTotal / 15000) * 100}%`,
                  maxWidth: '100%'
                }}
              >
                <span className="text-white font-bold">${monthTotal.toLocaleString()}</span>
              </div>
            </div>
            <div className="w-full text-sm text-gray-600">
              <span>Total del mes (Intereses + Créditos + Otros)</span>
            </div>
          </div>
        </div>

        {/* Detalle de categorías */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#01335E] text-white">
                <th className="py-3 px-4 text-left">Concepto</th>
                <th className="py-3 px-4 text-right">Monto</th>
                <th className="py-3 px-4 text-right">% del total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Intereses</td>
                <td className="py-3 px-4 text-right">${currentMonthData.intereses.toLocaleString()}</td>
                <td className="py-3 px-4 text-right">{((currentMonthData.intereses / monthTotal) * 100).toFixed(1)}%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Créditos</td>
                <td className="py-3 px-4 text-right">${currentMonthData.creditos.toLocaleString()}</td>
                <td className="py-3 px-4 text-right">{((currentMonthData.creditos / monthTotal) * 100).toFixed(1)}%</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Otros ingresos</td>
                <td className="py-3 px-4 text-right">${currentMonthData.otros.toLocaleString()}</td>
                <td className="py-3 px-4 text-right">{((currentMonthData.otros / monthTotal) * 100).toFixed(1)}%</td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td className="py-3 px-4">Total {currentMonthData.name}</td>
                <td className="py-3 px-4 text-right text-[#01335E]">
                  ${monthTotal.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-right">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}