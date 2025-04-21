import { FaHome, FaIdCard } from 'react-icons/fa';
import { FaMoneyCheckDollar, FaMoneyBill } from 'react-icons/fa6';
import Link from 'next/link';

function SolicitudCredito() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
      {/* Fila 1 */}
      <Link 
        href="/paquete-financiero" 
        className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group flex flex-col justify-center min-h-[180px]"
      >
        <FaMoneyBill className="text-white text-4xl mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white">Paquete Financiero</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver</p>
      </Link>

      <Link 
        href="/creditos" 
        className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group flex flex-col justify-center min-h-[180px]"
      >
        <FaMoneyCheckDollar className="text-white text-4xl mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white">Créditos Otorgados al Público</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver</p>
      </Link>

      {/* Fila 2 */}
      <div className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group flex flex-col justify-center min-h-[180px]">
        <FaIdCard className="text-white text-4xl mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white">Créditos Otorgados a Usted</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver</p>
      </div>

      <div className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group flex flex-col justify-center min-h-[180px]">
        <FaHome className="text-white text-4xl mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white">Solicitud de Crédito</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver</p>
      </div>
    </div>
  );
}

export default SolicitudCredito;