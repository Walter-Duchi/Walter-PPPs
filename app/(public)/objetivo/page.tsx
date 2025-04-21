"use client";
"use client";

import { motion } from "framer-motion";
import {
  FaBullseye,
  FaBuilding,
  FaChartBar,
  FaLeaf,
  FaRegHandshake,
  FaGlobeAmericas,
  FaUsers,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaCity,
} from "react-icons/fa";

export default function Objetivo() {
  return (
    <>
      <div className="bg-[#0f2537] min-h-screen text-white p-8 relative overflow-hidden flex flex-col font-sans">
        {/* Fondo de gradientes y patrones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2537] to-[#102030] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/background-objetivo.png')] bg-cover bg-center opacity-40"></div>

        {/* Elementos decorativos */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0f2537] rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ffc107] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#ffc107] rounded-full opacity-10 blur-2xl rotate-45"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#102030] rounded-full opacity-10 blur-2xl rotate-45"></div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-16">
          {/* Título principal */}
          <motion.h1
            className="text-6xl font-extrabold uppercase tracking-widest text-[#ffc107] drop-shadow-2xl text-center mt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Nuestro Objetivo
          </motion.h1>

          {/* Objetivo principal */}
          <motion.div
            className="backdrop-blur-lg bg-[#1e3855]/80 p-12 rounded-3xl shadow-xl border border-[#ffca2c]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold text-[#ffca2c] flex items-center justify-center gap-2 mb-8">
              <FaBullseye /> Objetivo Principal
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-200">
              El Banco ANEUPI busca transformar la experiencia financiera en
              Ecuador, ofreciendo soluciones innovadoras que impulsen el
              crecimiento económico de nuestros socios...
            </p>
            <motion.div
              className="mt-6 p-8 bg-[#102030]/80 text-white italic rounded-lg shadow-lg border border-[#ffc107]/30"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-2xl text-center text-[#fcd34d]">
                “El éxito no es solo tener dinero, sino tener el control total
                sobre nuestras decisiones financieras.”
              </p>
            </motion.div>
          </motion.div>

          {/* Resultados y Metas */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {[
              {
                title: "Nuestra Misión",
                progress: "85%",
                description:
                  "Impulsar el desarrollo integral de las comunidades en Ecuador...",
              },
              {
                title: "Nuestra Visión",
                progress: "70%",
                description:
                  "Ser la institución financiera líder en innovación y sostenibilidad...",
              },
              {
                title: "Nuestros Valores",
                progress: "75%",
                description: (
                  <ul className="list-disc pl-5 text-left">
                    <li>Integridad</li>
                    <li>Innovación</li>
                    <li>Sostenibilidad</li>
                    <li>Compromiso Social</li>
                    <li>Transparencia</li>
                  </ul>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center backdrop-blur-lg bg-[#1e3855]/80 p-8 rounded-2xl shadow-xl border border-[#ffca2c]/20 transform hover:scale-105 transition-transform"
              >
                <h3 className="text-3xl font-semibold text-[#ffca2c] mb-6">
                  {item.title}
                </h3>
                <motion.div
                  className="h-2 bg-[#ffc107] rounded-lg"
                  initial={{ width: 0 }}
                  animate={{ width: item.progress }}
                  transition={{ duration: 2 }}
                ></motion.div>
                <p className="mt-4 text-lg text-gray-200">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Metas Estratégicas */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: FaChartBar,
                title: "Crecimiento Sostenible",
                content: "Alcanzar USD $500 millones en activos para 2026",
                progress: 65,
                color: "from-[#ffca2c] to-[#ffd95b]",
              },
              {
                icon: FaUsers,
                title: "Impacto Social",
                content: "50,000 familias beneficiadas hasta 2025",
                progress: 40,
                color: "from-[#00c49a] to-[#00e6b8]",
              },
              {
                icon: FaLeaf,
                title: "Sostenibilidad",
                content: "100% operaciones carbono neutral para 2027",
                progress: 25,
                color: "from-[#00b4d8] to-[#90e0ef]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1e3855] to-[#152536] p-8 rounded-3xl border border-[#2a4660] backdrop-blur-sm"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="mb-6">
                  <div
                    className={`p-4 bg-gradient-to-r ${item.color} rounded-xl w-max mb-4`}
                  >
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[#c0d0e0]">{item.content}</p>
                </div>
                <div className="h-1 bg-[#2a4660] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Presencia Nacional */}
          <motion.div
            className="backdrop-blur-lg bg-[#1e3855]/80 p-12 rounded-3xl shadow-xl border border-[#ffca2c]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-[#ffca2c] flex items-center justify-center gap-2 mb-8">
              <FaGlobeAmericas /> Presencia Nacional
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              Con sede principal en Cuenca, Banco ANEUPI tiene presencia en
              Guayaquil, Quito y Machala...
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { icon: <FaBuilding />, name: "Cuenca" },
                { icon: <FaRegHandshake />, name: "Guayaquil" },
                { icon: <FaBuilding />, name: "Quito" },
                { icon: <FaBuilding />, name: "Machala" },
              ].map((city, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-[#102030]/80 rounded-xl shadow-lg border border-[#ffc107]/20 transform hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl text-[#ffc107]">{city.icon}</div>
                  <p className="mt-2 text-xl text-white">{city.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Historia y trayectoria */}
          <motion.div
            className="mb-20 backdrop-blur-lg bg-[#1e3855]/80 p-12 rounded-3xl shadow-xl border border-[#ffca2c]/20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-semibold text-[#ffca2c] mb-8 text-center">
              Historia y Trayectoria
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              Fundada con el compromiso de mejorar las condiciones
              financieras...
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Con una visión futurista y un legado de integridad, nuestro
              historial es testimonio...
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#0f2537] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10  relative z-10">
          {/* Sección de Objetivo Principal */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12  items-center p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#ffca2c] rounded-xl">
                  <FaBullseye className="text-3xl text-[#0f2537]" />
                </div>
                <h2 className="text-4xl font-bold">Compromiso Institucional</h2>
              </div>

              <p className="text-lg leading-relaxed text-[#c0d0e0]">
                Como cooperativa líder en el Austro ecuatoriano, nos
                comprometemos a:
              </p>

              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#ffca2c] rounded-full" />
                  <span className="text-xl">
                    Impulsar el desarrollo económico regional
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#ffca2c] rounded-full" />
                  <span className="text-xl">
                    Digitalizar los servicios financieros
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#ffca2c] rounded-full" />
                  <span className="text-xl">
                    Promover la inclusión financiera
                  </span>
                </li>
              </ul>
            </div>

            {/* Tarjeta de Presencia Nacional */}
            <motion.div
              className="bg-gradient-to-br from-[#1e3855] to-[#152536] p-8 rounded-3xl shadow-2xl border border-[#2a4660] backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6 bg-[#0f2537]/50 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FaCity className="text-[#ffca2c]" />
                  Cobertura Nacional
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Cuenca (Matriz)", "Guayaquil", "Quito", "Machala"].map(
                    (ciudad, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#ffca2c] rounded-full" />
                        <span>{ciudad}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="relative h-64 bg-[url('/cuidades.jpg')] rounded-xl overflow-hidden border border-[#2a4660] bg-cover bg-center "></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Linea de Tiempo Mejorada */}
      <div className="bg-gradient-to-b from-[#0f2537] to-[#242a20] p-20">
        <motion.div
          className=" backdrop-blur-lg bg-[#1e3855]/90 p-9 rounded-3xl shadow-2xl border border-[#ffca2c]/20 mx-auto w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-[#ffca2c] mb-12 text-center flex items-center justify-center gap-3">
            <FaChartBar className="text-3xl" />
            Hoja de Ruta 2024-2027
          </h3>

          <div className="relative flex flex-col gap-8 pl-8 before:absolute before:left-0 before:top-4 before:h-[calc(100%-2rem)] before:w-1 before:bg-gradient-to-b before:from-[#ffca2c] before:to-[#ffd95b]">
            {[
              {
                year: "2024",
                goals: [
                  "Plataforma digital completa",
                  "Expansión a 5 nuevas provincias",
                ],
                icon: FaMoneyCheckAlt,
                color: "from-[#ffd95b] to-[#ffca2c]",
              },
              {
                year: "2025",
                goals: [
                  "Alianzas internacionales",
                  "Fondo de inversión social",
                ],
                icon: FaRegHandshake,
                color: "from-[#00c49a] to-[#00e6b8]",
              },
              {
                year: "2026",
                goals: ["Certificación B Corp", "Sucursal internacional"],
                icon: FaLeaf,
                color: "from-[#00b4d8] to-[#90e0ef]",
              },
              {
                year: "2027",
                goals: ["Liderazgo regional", "Modelo 100% sostenible"],
                icon: FaGlobeAmericas,
                color: "from-[#a78bfa] to-[#c4b5fd]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative z-10 group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -left-9 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-[#ffca2c] to-[#ffd95b] rounded-full shadow-lg transition-transform duration-300 group-hover:scale-125" />

                <div className="p-6 bg-gradient-to-r from-[#1e3855] to-[#152536] rounded-xl border border-[#2a4660] backdrop-blur-sm hover:border-[#ffca2c]/40 transition-all">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${item.color}`}
                    >
                      <item.icon className="text-2xl text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-[#ffd95b] mb-2">
                        {item.year}
                      </h4>
                      <ul className="space-y-2">
                        {item.goals.map((goal, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-[#c0d0e0] hover:text-white transition-colors"
                          >
                            <div className="w-2 h-2 bg-[#ffca2c] rounded-full" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
