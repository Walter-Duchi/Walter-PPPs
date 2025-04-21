"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaChalkboardTeacher, FaWallet } from "react-icons/fa";

export default function EducacionFinanciera() {
  return (
    <div className="bg-[#102030] min-h-screen text-white overflow-hidden relative">
      {/* Fondo y patrones flotantes */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/fondo-educacion-financiera.png')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 py-20 flex flex-col items-center">
        {/* Título de la página */}
        <motion.h1
          className="text-5xl font-extrabold uppercase text-[#ffca2c] text-center mb-16 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Impulsa tu Educación Financiera
        </motion.h1>

        {/* Sección con 2 columnas para el contenido */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-20 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Texto y explicación */}
          <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl max-w-[600px]">
            <h2 className="text-3xl font-semibold text-[#ffca2c] mb-6">
              Educación Financiera para el Futuro
            </h2>
            <p className="text-lg text-white leading-relaxed">
              En Banco ANEUPI, te ofrecemos acceso a cursos prácticos que te
              permitirán entender y gestionar tus finanzas personales, tomar
              decisiones informadas y aprender sobre inversiones, ahorro y
              créditos. ¡Es momento de tomar control de tu futuro económico!
            </p>
          </div>

          {/* Imagen interactiva */}
          <motion.div
            className="relative bg-[#0f2537] rounded-xl shadow-xl overflow-hidden max-w-[600px] max-h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/educacion-taller.png"
              alt="Educación Financiera"
              className="object-cover w-full h-full transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </motion.div>
        </motion.div>

        {/* Gráficos y estadísticas */}
        <motion.div
          className="w-full max-w-4xl mx-auto my-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold text-[#ffca2c] mb-12">
            Impacto Real de la Educación Financiera
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Estadísticas */}
            <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-4xl text-[#ffca2c] font-semibold">92%</h3>
              <p className="text-xl text-white">
                Socios mejoraron su ahorro mensual.
              </p>
            </div>
            <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-4xl text-[#ffca2c] font-semibold">75%</h3>
              <p className="text-xl text-white">
                Mayor confianza en inversiones a largo plazo.
              </p>
            </div>
            <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
              <h3 className="text-4xl text-[#ffca2c] font-semibold">85%</h3>
              <p className="text-xl text-white">
                Reducción de deuda gracias a educación sobre crédito.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sección con 3 columnas de consejos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Consejos */}
          <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
            <FaWallet className="text-6xl text-[#ffca2c] mb-4" />
            <h3 className="text-2xl font-semibold text-[#ffca2c] mb-4">
              Ahorra con Propósito
            </h3>
            <p className="text-lg text-white">
              Define objetivos claros para tu ahorro: compra de vivienda, fondo
              de emergencias o inversión a largo plazo.
            </p>
          </div>
          <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
            <FaLightbulb className="text-6xl text-[#ffca2c] mb-4" />
            <h3 className="text-2xl font-semibold text-[#ffca2c] mb-4">
              Inversiones Inteligentes
            </h3>
            <p className="text-lg text-white">
              Aprende a identificar oportunidades de inversión de bajo riesgo
              que se adapten a tu perfil financiero.
            </p>
          </div>
          <div className="bg-[#1e3855] p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
            <FaChalkboardTeacher className="text-6xl text-[#ffca2c] mb-4" />
            <h3 className="text-2xl font-semibold text-[#ffca2c] mb-4">
              Gestión Responsable de Crédito
            </h3>
            <p className="text-lg text-white">
              Aprende a utilizar el crédito de manera efectiva y a evitar caer
              en deudas que afecten tu estabilidad financiera.
            </p>
          </div>
        </motion.div>

        {/* Testimonios */}
        <motion.div
          className="w-full max-w-4xl mx-auto my-16 px-8 py-12 bg-[#102030] rounded-xl shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-[#ffca2c] mb-8 text-center">
            Opiniones de Nuestros Socios
          </h3>
          <div className="text-lg text-white italic mb-6">
            “La educación financiera que ofrece Banco ANEUPI me ha permitido
            entender cómo manejar mi dinero de manera inteligente y alcanzar mis
            metas a corto plazo.”
          </div>
          <div className="text-lg text-white italic">
            “Gracias a los cursos de inversión, ahora puedo tomar decisiones más
            informadas y aumentar mis ahorros de forma segura.”
          </div>
        </motion.div>
      </div>
    </div>
  );
}
