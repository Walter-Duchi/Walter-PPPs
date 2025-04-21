import { FaBalanceScale, FaHome, FaIdCard } from 'react-icons/fa';
import { FaMoneyCheckDollar, FaMoneyBillTrendUp } from 'react-icons/fa6';
import Link from 'next/link';

function ContactCard({ href, icon: Icon, title, description }) {
  return (
    <Link 
      href={href} 
      className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#01335E] hover:border-[#253b4a] group"
    >
      <Icon className="text-white text-3xl mx-auto mb-3" />
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-white text-sm opacity-80 group-hover:opacity-100">{description}</p>
    </Link>
  );
}

export default function EstadoFinanciero() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 max-w-[90%] mx-auto">
        {/* Fila 1 */}
        <ContactCard
          href="/creditosEF"
          icon={FaMoneyCheckDollar}
          title="Total"
          description="de ingresos"
        />

        <ContactCard
          href="/aportaciones-mensuales"
          icon={FaMoneyBillTrendUp}
          title="Aportaciones Mensuales"
          description="Ver Aportaciones Mensuales"
        />

        <ContactCard
          href="/Balances"
          icon={FaBalanceScale}
          title="Balances"
          description="Mensuales"
        />

        {/* Fila 2 */}
        <div className="bg-[#01335E] rounded-xl p-5 text-center shadow-sm border-3 border-[#f5a524] transition-all duration-300 hover:-translate-y-1 hover:bg-[#253b4a] hover:border-[#253b4a] group">
          <FaIdCard className="text-white text-3xl mx-auto mb-3" />
          <h3 className="text-lg font-medium text-white">Otros</h3>
          <p className="text-white text-sm opacity-80 group-hover:opacity-100">ingresos</p>
        </div>

        <ContactCard
          href="/ganancias"
          icon={FaHome}
          title="Ganacias"
          description="Mensuales"
        />
      </div>
    </div>
  );
}