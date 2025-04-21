"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaHandshake,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaCreditCard,
  FaUserShield,
  FaRegQuestionCircle,
  FaComments,
} from "react-icons/fa";

export default function AyudaSocios() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState(5000);

  const beneficios = [
    {
      icon: FaUsers,
      color: "#eea73d",
      title: "Beneficios en Eventos",
      description:
        "Acceso exclusivo a eventos y actividades organizadas para socios.",
    },
    {
      icon: FaCreditCard,
      color: "#58a8ff",
      title: "Tarjetas Preferenciales",
      description: "Obtén tarjetas preferenciales con beneficios exclusivos.",
    },
    {
      icon: FaLightbulb,
      color: "#ea6710",
      title: "Asesoría Personalizada",
      description:
        "Accede a asesoría personalizada para gestionar tus finanzas de manera efectiva.",
    },
  ];

  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Chat Flotante */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          className={`bg-[#25466a] rounded-xl shadow-xl ${
            isChatOpen ? "w-96 h-96" : "w-16 h-16"
          } transition-all duration-300`}
        >
          {!isChatOpen ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full h-full flex items-center justify-center"
              onClick={() => setIsChatOpen(true)}
            >
              <FaComments className="text-2xl text-[#eea73d]" />
            </motion.button>
          ) : (
            <div className="p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#fefefe]">Asistente Virtual</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-[#eea73d] hover:text-[#ea6710] text-xl"
                >
                  ×
                </button>
              </div>
              <div className="flex-1 bg-[#0b4762]/20 rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="text-sm text-[#fefefe] opacity-75">
                  Conectando con el asistente...
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Sección Hero */}
      <section className="pt-28 pb-20 bg-[#002135] px-4 md:px-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-[#fefefe]"
        >
          Ayuda para Socios de la
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#eea73d] to-[#ea6710]">
            Instituación Financiera ANEUPI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl mb-8 text-[#fefefe]/80"
        >
          Conectamos contigo a través de una experiencia digital sin
          precedentes.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-[#eea73d] text-[#25466a] font-bold rounded-lg shadow-lg hover:bg-[#ea6710] transition-all duration-300 flex items-center gap-2"
          >
            <FaChartLine className="text-xl" />
            <span>Explorar Servicios</span>
          </a>
        </motion.div>
      </section>

      {/* Bienvenida */}
      <section className="py-16 bg-[#0b4762] relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-72 h-72 mx-auto bg-[#25466a] rounded-full flex flex-col justify-center items-center shadow-2xl text-center px-6 mb-2 transform hover:scale-105 transition-all group border-2 border-[#eea73d]/20"
        >
          <FaHandshake className="text-5xl mb-4 text-[#eea73d] animate-pulse" />
          <h2 className="text-2xl font-bold mb-2 text-[#fefefe]">
            Estamos contigo, socio
          </h2>
          <p className="text-sm text-[#fefefe]/80">
            Todo lo que necesitas está aquí mismo.
          </p>
        </motion.div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-[#fefefe] px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#25466a]"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FaChartLine,
              color: "#0b4762",
              title: "Simula tu Crédito",
              description:
                "Descubre cuánto puedes solicitar y en qué condiciones.",
            },
            {
              icon: FaCreditCard,
              color: "#ea6710",
              title: "Bloqueo de Tarjetas",
              description: "Procede al bloqueo inmediato.",
            },
            {
              icon: FaUserShield,
              color: "#eea73d",
              title: "Seguridad de Claves",
              description: "Administra o recupera tus claves de forma segura.",
            },
            {
              icon: FaPhone,
              color: "#25466a",
              title: "Atención Telefónica",
              description: "Llámanos al 1800-ANEUPI.",
            },
            {
              icon: FaEnvelope,
              color: "#0b4762",
              title: "Soporte por Correo",
              description: "soporte@aneupi.fin.ec",
            },
            {
              icon: FaMapMarkerAlt,
              color: "#ea6710",
              title: "Encuéntranos",
              description: "Guayaquil, Quito, Cuenca y Machala.",
            },
          ].map(({ icon: Icon, color, title, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#25466a]/10 hover:border-[#eea73d]/40 transition-all"
            >
              <Icon className={`text-4xl mb-6`} style={{ color }} />
              <h3 className="text-2xl font-bold text-[#25466a] mb-4">
                {title}
              </h3>
              <p className="text-[#454442]/90">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-[#0b4762] px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#fefefe]"
        >
          Beneficios Exclusivos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map(
            ({ icon: Icon, color, title, description }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-[#25466a] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <Icon className="text-4xl mb-6" style={{ color }} />
                <h3 className="text-2xl font-bold text-[#fefefe] mb-4">
                  {title}
                </h3>
                <p className="text-[#fefefe]/80">{description}</p>
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
