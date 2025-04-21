"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaPiggyBank,
  FaBalanceScale,
} from "react-icons/fa";

export default function MisionVision() {
  return (
    <div className="min-h-screen text-white p-4 sm:p-12 flex items-center justify-center relative overflow-hidden">
      {/* Imagen de fondo original con animación sutil */}
      <motion.div
        className="absolute inset-0 bg-[url('/mision-vision-fondo.jpg')] bg-cover bg-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Overlay de degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3855]/60 via-[#162d4c]/60 to-[#0f1e35]/50 z-1"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-12 uppercase tracking-tighter bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Misión y Visión
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Tarjeta de Misión */}
          <motion.div
            className="group relative bg-gradient-to-br from-[#1e3855]/80 to-[#0f1e35]/80 p-1 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/10 hover:border-amber-400/30 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-[#0a192f]/60 p-8 rounded-[20px] h-full">
              <div className="flex flex-col items-center">
                <div className="mb-6 bg-gradient-to-r from-amber-400 to-orange-500 p-4 rounded-full shadow-lg">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
                  Misión
                </h2>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  En ANEUPI nos comprometemos a fortalecer el desarrollo
                  económico de nuestros socios en Cuenca y la región austral del
                  Ecuador, ofreciendo servicios financieros innovadores, seguros
                  y con altos estándares de calidad. Promovemos la inclusión
                  financiera, el ahorro responsable y el acceso al crédito bajo
                  principios de equidad, transparencia y responsabilidad social.
                </p>

                <motion.div className="w-full" whileHover={{ scale: 1.05 }}>
                  <img
                    src="/crecimiento.jpg"
                    alt="Gráfico de crecimiento"
                    className="w-full h-48 object-cover rounded-xl border-2 border-white/10 hover:border-amber-400/50 transition-all duration-300"
                  />
                </motion.div>

                <div className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full backdrop-blur-sm">
                  <p className="text-sm font-medium italic text-amber-200">
                    "Crecemos juntos, prosperamos unidos"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta de Visión */}
          <motion.div
            className="group relative bg-gradient-to-br from-[#1e3855]/80 to-[#0f1e35]/80 p-1 rounded-3xl shadow-2xl backdrop-blur-lg border border-white/10 hover:border-orange-400/30 transition-all duration-500"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-[#0a192f]/60 p-8 rounded-[20px] h-full">
              <div className="flex flex-col items-center">
                <div className="mb-6 bg-gradient-to-r from-orange-400 to-amber-500 p-4 rounded-full shadow-lg">
                  <FaHandshake className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mb-6">
                  Visión
                </h2>
                <p className="text-lg leading-relaxed text-gray-200 mb-6">
                  Para el 2030, ANEUPI será reconocida como la cooperativa de
                  ahorro y crédito líder en el Austro ecuatoriano, destacando
                  por nuestra solidez financiera, innovación tecnológica y
                  compromiso con el desarrollo sostenible de nuestras
                  comunidades. Aspiramos a ser el referente en educación
                  financiera y en la generación de oportunidades económicas para
                  nuestros socios.
                </p>

                <motion.div className="w-full" whileHover={{ scale: 1.05 }}>
                  <img
                    src="/mision-vision.jpg"
                    alt="Gráfico de misión y visión"
                    className="w-full h-48 object-cover rounded-xl border-2 border-white/10 hover:border-orange-400/50 transition-all duration-300"
                  />
                </motion.div>

                <div className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-full backdrop-blur-sm">
                  <p className="text-sm font-medium italic text-orange-200">
                    "Construyendo futuro financiero para Ecuador"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sección de Valores */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Nuestros Valores Corporativos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaUsers,
                title: "Solidaridad",
                description:
                  "Priorizamos el bienestar colectivo sobre intereses individuales, apoyando el desarrollo de nuestros socios y comunidad.",
                color: "from-blue-400/20 to-blue-600/20",
                textColor: "text-blue-400",
              },
              {
                icon: FaShieldAlt,
                title: "Transparencia",
                description:
                  "Actuamos con honestidad y claridad en todas nuestras operaciones, garantizando la confianza de nuestros socios.",
                color: "from-green-400/20 to-green-600/20",
                textColor: "text-green-400",
              },
              {
                icon: FaPiggyBank,
                title: "Responsabilidad",
                description:
                  "Gestionamos los recursos con eficiencia y prudencia, asegurando la sostenibilidad de la cooperativa.",
                color: "from-amber-400/20 to-amber-600/20",
                textColor: "text-amber-400",
              },
              {
                icon: FaBalanceScale,
                title: "Equidad",
                description:
                  "Ofrecemos igualdad de oportunidades y trato justo a todos nuestros socios, sin discriminación.",
                color: "from-purple-400/20 to-purple-600/20",
                textColor: "text-purple-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${
                  item.color
                } p-1 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-${
                  item.textColor.split("-")[1]
                }-400/30 transition-all duration-500 h-full`}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#0a192f]/60 p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <item.icon className={`text-3xl mr-3 ${item.textColor}`} />
                    <h3 className={`text-xl font-semibold ${item.textColor}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm flex-grow">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección de Objetivos Estratégicos */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-[#1e3855]/60 to-[#0f1e35]/60 p-8 rounded-3xl border border-white/10 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Objetivos Estratégicos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-amber-500/20 p-3 rounded-lg mr-4">
                <FaChartLine className="text-amber-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  Crecimiento Sostenible
                </h3>
                <p className="text-gray-300">
                  Alcanzar una cartera crediticia de $50 millones y 10,000
                  socios activos para 2026, manteniendo índices de solvencia
                  superiores al 12%.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                <FaLightbulb className="text-orange-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  Innovación Tecnológica
                </h3>
                <p className="text-gray-300">
                  Implementar una plataforma digital integral que cubra el 100%
                  de los servicios financieros para 2025.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-500/20 p-3 rounded-lg mr-4">
                <FaHandshake className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Responsabilidad Social
                </h3>
                <p className="text-gray-300">
                  Destinar el 5% de nuestras utilidades a programas de educación
                  financiera y desarrollo comunitario en Cuenca.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-500/20 p-3 rounded-lg mr-4">
                <FaShieldAlt className="text-red-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  Seguridad Financiera
                </h3>
                <p className="text-gray-300">
                  Mantener índices de morosidad inferiores al 2.5% y certificar
                  nuestros procesos bajo normas internacionales.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sección de Compromiso con Cuenca */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative group overflow-hidden rounded-3xl h-96">
            <img
              src="/aneupi-cuenca.jpg"
              alt="Cuenca Ecuador"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e35]/90 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Raíces en Cuenca
                </h3>
                <p className="text-gray-300">
                  Desde nuestra fundación en 1995, hemos crecido junto a la
                  ciudad, apoyando el desarrollo económico local y preservando
                  nuestros valores australes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e3855]/60 to-[#0f1e35]/60 p-8 rounded-3xl border border-white/10 backdrop-blur-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Nuestro Compromiso con la Región
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-amber-500/20 text-amber-400 rounded-full p-1 mr-3">
                  ✓
                </span>
                <span className="text-gray-300">
                  Financiamiento preferencial para emprendimientos productivos
                  locales
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-orange-500/20 text-orange-400 rounded-full p-1 mr-3">
                  ✓
                </span>
                <span className="text-gray-300">
                  Promoción de la cultura del ahorro en jóvenes y adultos
                  mayores
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-500/20 text-yellow-400 rounded-full p-1 mr-3">
                  ✓
                </span>
                <span className="text-gray-300">
                  Apoyo a proyectos de vivienda para familias cuencanas
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-red-500/20 text-red-400 rounded-full p-1 mr-3">
                  ✓
                </span>
                <span className="text-gray-300">
                  Programas de capacitación financiera en colegios y
                  universidades
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-amber-500/10 rounded-xl border border-amber-500/20">
              <p className="text-amber-200 italic text-sm">
                "En ANEUPI creemos que el progreso de Cuenca se construye con el
                esfuerzo de todos. Por más de 25 años hemos sido parte activa
                del desarrollo económico de nuestra ciudad."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Barra de progreso final */}
        <motion.div
          className="mt-16 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "circOut", delay: 1 }}
        />
      </div>
    </div>
  );
}
