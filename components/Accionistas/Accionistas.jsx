import { FaUsers, FaBuilding, FaListAlt } from 'react-icons/fa';
import Link from 'next/link';

function ContactCard({ href, icon: Icon, title, description }) {
  return (
    <Link 
      href={href} 
      className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group"
    >
      <Icon className="text-white text-3xl mx-auto mb-3" />
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-white text-sm opacity-80 group-hover:opacity-100">{description}</p>
    </Link>
  );
}

export default function Accionistas() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
        {/* Card 1 - Directiva */}
        <ContactCard
          href="/directiva"
          icon={FaUsers}
          title="Directiva"
          description="Conoce a los miembros de la directiva"
        />

        {/* Card 2 - Departamentos */}
        <ContactCard
          href="/departamentos"
          icon={FaBuilding}
          title="Departamentos"
          description="Estructura organizacional por áreas"
        />

        {/* Card 3 - Lista de Accionistas */}
        <ContactCard
          href="/lista-accionistas"
          icon={FaListAlt}
          title="Lista de Accionistas"
          description="Consulta el registro completo de accionistas"
        />
      </div>
    </div>
  );
}