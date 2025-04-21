import { FaBook, FaBookOpen, FaHome, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

function Normativas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
      {/* Fila 1 */}
      <Link 
        href="/reglamento-interno" 
        className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group"
      >
        <FaBook className="text-white text-3xl mx-auto mb-3" />
        <h3 className="text-lg font-medium text-white">Reglamento Interno</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver Reglamento Interno</p>
      </Link>

      <Link 
        href="/resoluciones" 
        className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group"
      >
        <FaBookOpen className="text-white text-3xl mx-auto mb-3" />
        <h3 className="text-lg font-medium text-white">Resoluciones</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Ver Resoluciones</p>
      </Link>

      {/* Fila 2 */}
      <div className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group">
        <FaIdCard className="text-white text-3xl mx-auto mb-3" />
        <h3 className="text-lg font-medium text-white">Cargo</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">Jefe de Area</p>
      </div>

      <div className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25466a] hover:border-white group">
        <FaHome className="text-white text-3xl mx-auto mb-3" />
        <h3 className="text-lg font-medium text-white">Dirección</h3>
        <p className="text-white text-sm opacity-80 group-hover:opacity-100">GUAYAQUIL</p>
      </div>
    </div>
  );
}

export default Normativas;