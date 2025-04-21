"use client";

import {
  FaBalanceScale,
  FaBuilding,
  FaUserTie,
  FaChartPie,
  FaClipboardList,
  FaHandshake,
  FaRegLightbulb,
  FaMoneyCheckAlt,
  FaArrowAltCircleDown,
  FaRegClock,
  FaCoins,
  FaChartLine,
  FaShieldAlt,
  FaPercentage,
  FaPiggyBank,
  FaCalculator,
  FaIdCard,
  FaFileContract,
  FaHandHoldingUsd,
  FaHistory,
  FaHandHoldingHeart,
  FaUniversity,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sections = [
  {
    icon: <FaChartPie className="text-3xl" />,
    title: "Estados Financieros Auditados",
    desc: "Acceso a balances generales y estados de resultados certificados por auditoría externa",
    details: {
      features: ["Últimos 5 años", "Comparativo trimestral", "Proyecciones"],
      requirements: [
        "Acceso exclusivo para accionistas",
        "Autenticación de dos factores",
      ],
      documents: [
        "Balance General",
        "Estado de Resultados",
        "Flujos de Efectivo",
      ],
    },
  },
  {
    icon: <FaCoins className="text-3xl" />,
    title: "Política de Dividendos",
    desc: "Distribución de excedentes según acuerdo de asamblea general de accionistas",
    details: {
      features: [
        "Histórico de pagos",
        "Calculadora de rendimientos",
        "Calendario de distribución",
      ],
      requirements: [
        "Mínimo 6 meses de antigüedad",
        "Saldo promedio mantenido",
      ],
      documents: [
        "Acta de Asamblea",
        "Política de distribución",
        "Calculadora interactiva",
      ],
    },
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Protección de Aportes",
    desc: "Garantía de fondos respaldada por la Corporación de Seguro de Depósitos",
    details: {
      features: [
        "Cobertura hasta $32,000",
        "Seguro actualizado 2024",
        "Protección inmediata",
      ],
      requirements: ["Aportes registrados", "Cuenta activa"],
      documents: [
        "Certificado de cobertura",
        "Documentos legales",
        "Procedimientos de reclamo",
      ],
    },
  },
  {
    icon: <FaClipboardList className="text-3xl" />,
    title: "Actas de Asambleas",
    desc: "Archivo histórico de decisiones tomadas desde 1985 hasta la actualidad",
    details: {
      features: [
        "Búsqueda por fecha",
        "Descarga en PDF",
        "Resúmenes ejecutivos",
      ],
      requirements: ["Acceso nivel 2", "Verificación de identidad"],
      documents: ["Acta 2023", "Histórico completo", "Acuerdos relevantes"],
    },
  },
  {
    icon: <FaBalanceScale className="text-3xl" />,
    title: "Marco Regulatorio",
    desc: "Normativa de la Superintendencia de Economía Popular y Solidaria (SEPS)",
    details: {
      features: [
        "Actualizaciones en tiempo real",
        "Análisis legal",
        "Comparativo normativo",
      ],
      requirements: ["Nivel de acceso 3", "Certificado digital"],
      documents: [
        "Reglamento SEPS",
        "Guías de cumplimiento",
        "Formatos oficiales",
      ],
    },
  },
  {
    icon: <FaHandHoldingUsd className="text-3xl" />,
    title: "Certificados de Aporte",
    desc: "Inversiones desde $500 con tasas competitivas y plazos flexibles",
    details: {
      features: [
        "Simulador de rendimientos",
        "Renovación automática",
        "Diversificación",
      ],
      requirements: ["Monto mínimo $500", "Documentación completa"],
      documents: ["Contrato tipo", "Tabla de tasas", "Calculadora financiera"],
    },
  },
  {
    icon: <FaUniversity className="text-3xl" />,
    title: "Educación Financiera",
    desc: "Programas de capacitación en gestión de inversiones y finanzas personales",
    details: {
      features: [
        "Webinars mensuales",
        "Material descargable",
        "Asesoría personalizada",
      ],
      requirements: ["Registro previo", "Cuenta activa"],
      documents: [
        "Calendario 2024",
        "Guías prácticas",
        "Formulario de inscripción",
      ],
    },
  },
  {
    icon: <FaRegClock className="text-3xl" />,
    title: "Agenda Institucional",
    desc: "Calendario de asambleas generales y eventos corporativos",
    details: {
      features: [
        "Recordatorios automáticos",
        "Sincronización digital",
        "Detalles de eventos",
      ],
      requirements: ["Acceso nivel 1", "Correo verificado"],
      documents: [
        "Agenda ejecutiva",
        "Protocolos de participación",
        "Formatos de poder",
      ],
    },
  },
  {
    icon: <FaFileContract className="text-3xl" />,
    title: "Documentación Legal",
    desc: "Estatutos sociales actualizados y contratos tipo de certificados",
    details: {
      features: [
        "Versiones comparativas",
        "Firmas digitales",
        "Histórico de cambios",
      ],
      requirements: ["Acceso nivel 3", "Autenticación biométrica"],
      documents: ["Estatutos 2024", "Contratos tipo", "Reglamentos internos"],
    },
  },
];

const metricasFinancieras = [
  {
    label: "ROE (2023)",
    value: "14.2%",
    icon: <FaPercentage className="text-2xl" />,
  },
  {
    label: "Crecimiento de Activos",
    value: "+8.4%",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    label: "Liquidez Corriente",
    value: "1.28:1",
    icon: <FaPiggyBank className="text-2xl" />,
  },
];

const historialInstitucional = [
  "Fundada en 1985 en Guayaquil",
  "+38 años de trayectoria ininterrumpida",
  "Presencia en 8 provincias del Ecuador",
  "50,000 socios activos registrados",
];

const faqs = [
  {
    question: "¿Cómo se calculan mis dividendos?",
    answer:
      "Los excedentes se distribuyen proporcionalmente al monto y tiempo de permanencia de sus aportes.",
  },
  {
    question: "¿Qué garantías ofrecen?",
    answer:
      "Protegemos sus aportes hasta $32,000 a través del Seguro de Depósitos.",
  },
  {
    question: "¿Cómo participar en decisiones?",
    answer:
      "Accionistas con más de $1,000 en aportes pueden votar en asambleas.",
  },
];

export default function AyudaAccionista() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fefefe] text-[#2a2a2a] overflow-x-hidden">
      {/* Sección Principal */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 xl:px-16 bg-gradient-to-br from-[#00335f] via-[#183980] to-[#1c5165]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Cooperativa de Ahorro y Crédito ANEUPI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#e8a339] font-light">
              Plataforma Integral del Accionista
            </p>
          </motion.div>

          {/* Tarjetas de Servicios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                layout
                className={`group relative bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg transition-all ${
                  expandedSection === index ? "lg:col-span-3" : ""
                }`}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-[#e8a339]/10 rounded-lg text-[#25466a]">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#25466a] mb-1 sm:mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#454442]">
                        {section.desc}
                      </p>

                      <AnimatePresence>
                        {expandedSection === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 sm:mt-6"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                              <div className="p-3 sm:p-4 bg-[#f8f9fa] rounded-lg">
                                <h4 className="font-bold text-[#004562] mb-2 sm:mb-3 text-sm sm:text-base">
                                  Características
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  {section.details.features.map(
                                    (feature, i) => (
                                      <li
                                        key={i}
                                        className="flex items-center gap-2 text-xs sm:text-sm"
                                      >
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e8a339] rounded-full" />
                                        {feature}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              <div className="p-3 sm:p-4 bg-[#f8f9fa] rounded-lg">
                                <h4 className="font-bold text-[#1c5165] mb-2 sm:mb-3 text-sm sm:text-base">
                                  Requisitos
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  {section.details.requirements.map(
                                    (req, i) => (
                                      <li
                                        key={i}
                                        className="flex items-center gap-2 text-xs sm:text-sm"
                                      >
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1c5165] rounded-full" />
                                        {req}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              <div className="p-3 sm:p-4 bg-[#f8f9fa] rounded-lg">
                                <h4 className="font-bold text-[#f65612] mb-2 sm:mb-3 text-sm sm:text-base">
                                  Documentación
                                </h4>
                                <ul className="space-y-1 sm:space-y-2">
                                  {section.details.documents.map((doc, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2 text-xs sm:text-sm"
                                    >
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f65612] rounded-full" />
                                      {doc}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 flex justify-end">
                    <button
                      onClick={() => toggleExpansion(index)}
                      className="flex items-center text-[#25466a] hover:text-[#e8a339] transition-colors text-sm sm:text-base"
                    >
                      <span className="font-medium">
                        {expandedSection === index
                          ? "Mostrar menos"
                          : "Más información"}
                      </span>
                      <motion.div
                        animate={{
                          rotate: expandedSection === index ? 180 : 0,
                        }}
                        className="ml-1 sm:ml-2"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Métricas Clave */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#25466a]"
        >
          Indicadores Financieros Clave
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {metricasFinancieras.map((metrica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-[#93a2b7]/30"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-[#e8a339]">{metrica.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-[#25466a]">
                  {metrica.label}
                </h3>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-center text-[#1c5165]">
                {metrica.value}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección Histórica */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-[#93a2b7]/30"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaHistory className="text-2xl sm:text-3xl text-[#004562]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#25466a]">
                Nuestra Trayectoria
              </h3>
            </div>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-sm sm:text-base text-[#454442]">
              {historialInstitucional.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-[#93a2b7]/30"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaHandHoldingHeart className="text-2xl sm:text-3xl text-[#ea660c]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#25466a]">
                Impacto Social
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#454442]">
              <div className="flex items-center gap-3 sm:gap-4">
                <FaCoins className="text-[#1c5165] text-lg sm:text-xl" />
                <span>USD 2.8M en microcréditos productivos (2023)</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FaUniversity className="text-[#25466a] text-lg sm:text-xl" />
                <span>15 programas de educación financiera anuales</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <FaHandshake className="text-[#e8a339] text-lg sm:text-xl" />
                <span>Apoyo a 35 cooperativas de base comunitaria</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#25466a]"
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-[#93a2b7]/30 pb-3 sm:pb-4"
              onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-base sm:text-lg font-semibold text-[#25466a] hover:text-[#1c5165] transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                  className="text-[#e8a339] text-sm sm:text-base"
                >
                  ▼
                </motion.div>
              </div>
              <AnimatePresence>
                {activeFAQ === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-2 sm:pt-4 text-sm sm:text-base text-[#454442]"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Herramientas */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 bg-gradient-to-b from-[#00335f] to-[#183980]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white"
        >
          Herramientas Digitales
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-sm sm:shadow-lg border border-white/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaCalculator className="text-2xl sm:text-3xl text-[#25466a]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#25466a]">
                Simulador de Inversiones
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#454442]">
              Calcule proyecciones de rendimiento basadas en montos y plazos
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-sm sm:shadow-lg border border-white/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaIdCard className="text-2xl sm:text-3xl text-[#25466a]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#25466a]">
                Credencial Digital
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#454442]">
              Acceso prioritario en sucursales y verificaciones instantáneas
            </p>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-sm sm:shadow-lg border border-white/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaFileContract className="text-2xl sm:text-3xl text-[#25466a]" />
              <h3 className="text-lg sm:text-xl font-bold text-[#25466a]">
                Documentación en Línea
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#454442]">
              Acceso 24/7 a contratos, estatutos y actas certificadas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
