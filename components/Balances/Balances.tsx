import { useState } from 'react';
import Link from 'next/link';

function Balances() {
  const [selectedYear, setSelectedYear] = useState(2023);
  const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const expenses = [
    { name: "Sueldos y salarios", amount: 0 },
    { name: "Alquiler", amount: 0 },
    { name: "Servicios públicos", amount: 0 },
    { name: "Marketing", amount: 0 },
    { name: "Gastos administrativos", amount: 0 },
    { name: "Impuestos", amount: 0 }
  ];

  // Datos de ejemplo
  const monthlyIncome = 31;
  const totalIncome = monthlyIncome * months.length;
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const netProfit = totalIncome - totalExpenses;

  return (
    <div className="w-full md:max-w-[90%] mx-auto p-4 md:p-5 bg-white rounded-xl shadow-md font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-5">
        <h1 className="text-xl md:text-2xl font-bold text-[#253b4a]">Balances Mensuales</h1>
        <Link 
          href="/estadofinanciero"
          className="mt-2 md:mt-0 bg-[#01335E] text-white px-4 py-2 rounded hover:bg-[#1a2d3a] transition-colors text-sm md:text-base text-center"
        >
          ← Volver a Estados Financieros
        </Link>
      </div>
      
      {/* Selector de años - Responsive */}
      <div className="flex gap-2 mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#253b4a] scrollbar-track-gray-100">
        {years.map(year => (
          <button
            key={year}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full transition-all whitespace-nowrap text-sm md:text-base ${
              selectedYear === year
                ? 'bg-[#01335E] text-white border-[#253b4a]'
                : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      
      {/* Versión móvil (stacked) */}
      <div className="md:hidden space-y-4">
        {months.map((month) => (
          <div key={month} className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 font-semibold bg-gray-100 border-b border-gray-300">
              {month}
            </div>
            
            <div className="p-3">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
                <span className="text-green-700">Ingresos:</span>
                <span className="font-mono">${monthlyIncome}</span>
              </div>
              
              {expenses.map((expense) => (
                <div key={expense.name} className="flex justify-between items-center py-1 text-sm">
                  <span className="text-gray-600">{expense.name}:</span>
                  <span className="font-mono text-red-700">${expense.amount}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Totales móvil */}
        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
          <div className="p-3 font-semibold bg-gray-100 border-b border-gray-300">
            Totales Anuales
          </div>
          <div className="p-3 space-y-2">
            <div className="flex justify-between">
              <span>Total Ingresos:</span>
              <span className="font-mono">${totalIncome}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Egresos:</span>
              <span className="font-mono text-red-700">${totalExpenses}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
              <span>Ganancia Neta:</span>
              <span className="text-green-700">${netProfit}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Versión escritorio (tabla) */}
      <div className="hidden md:block border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div className="flex bg-gray-100 border-b border-gray-300">
          <div className="flex-1 p-3 font-semibold text-center text-green-700 border-r border-gray-300">
          Ingreso mensuales de los Accionistas
          </div>
          <div className="flex-1 p-3 font-semibold text-center text-red-700">
          Ingresos mensuales de los creditos
          </div>
        </div>
        
        <div className="flex">
          {/* Columna de Ingresos */}
          <div className="flex-1 border-r border-gray-300">
            {months.map((month) => (
              <div key={month} className="flex border-b border-gray-200 last:border-b-0">
                <div className="flex-[2] p-3">{month}</div>
                <div className="flex-1 p-3 text-right font-mono">${monthlyIncome}</div>
              </div>
            ))}
            <div className="flex border-b-0 bg-gray-50 font-bold">
              <div className="flex-[2] p-3">Total Ingresos Anuales</div>
              <div className="flex-1 p-3 text-right font-mono">${totalIncome}</div>
            </div>
          </div>
          
          {/* Columna de Egresos */}
          <div className="flex-1">
            {expenses.map((expense) => (
              <div key={expense.name} className="flex border-b border-gray-200 last:border-b-0">
                <div className="flex-[2] p-3">{expense.name}</div>
                <div className="flex-1 p-3 text-right font-mono">${expense.amount}</div>
              </div>
            ))}
            <div className="flex border-b-0 bg-gray-50 font-bold">
              <div className="flex-[2] p-3">Total Egresos</div>
              <div className="flex-1 p-3 text-right font-mono">${totalExpenses}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ganancia neta - solo en escritorio (en móvil está incluido en los totales) */}
      <div className="hidden md:block mt-5 text-right text-base p-3 bg-gray-100 rounded-lg">
        Ganancia Neta: <span className="font-bold text-green-700">${netProfit}</span>
      </div>
    </div>
  );
}

export default Balances;