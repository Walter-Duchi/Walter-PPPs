import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaHome, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

function Informacion() {
  return (
    <div className="max-w-[90%] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: <FaEnvelope />, title: "Email", text: "arevalofernando@gmail.com" },
          { icon: <FaPhone />, title: "Teléfono", text: "+593 979358461" },
          { icon: <FaMapMarkerAlt />, title: "Locación", text: "SISTEMAS" },
          { icon: <FaBriefcase />, title: "Puesto", text: "Jefe de Area" },
          { icon: <FaHome />, title: "Dirección", text: "GUAYAQUIL" },
          { icon: <FaIdCard />, title: "Carnet", text: "Ver credencial", link: true },
        ].map((item, index) => (
          item.link ? (
            <Link 
              key={index}
              href="/carnet"
              className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md flex flex-col items-center"
            >
              <div className="text-gray-600 text-2xl w-10 h-10 flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <h3 className="text-gray-700 font-medium mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </Link>
          ) : (
            <div 
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 hover:shadow-md flex flex-col items-center"
            >
              <div className="text-gray-600 text-2xl w-10 h-10 flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <h3 className="text-gray-700 font-medium mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Informacion;