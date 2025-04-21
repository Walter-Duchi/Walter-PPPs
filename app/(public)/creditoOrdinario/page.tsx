"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaFileDownload,
  FaPercentage,
  FaClock,
  FaHandsHelping,
  FaStar,
  FaChartLine,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const ParticleBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-[#004169]/20 rounded-full"
        initial={{
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function CreditoOrdinario() {
  const colors = {
    primary: "#25466a",
    secondary: "#eea73d",
    accent: "#004169",
    dark: "#454442",
    light: "#fefefe",
    highlight: "#0b4762",
    orange: "#ea6710",
  };

  const tiposCredito = {
    "Crédito Francés": {
      descripcion:
        "Cuotas constantes con amortización progresiva. Ideal para planificación financiera a largo plazo.",
      calcularCuota: (monto: number, plazo: number, tasa: number) => {
        const i = tasa / 12;
        return (monto * i) / (1 - Math.pow(1 + i, -plazo));
      },
    },
    "Crédito Alemán": {
      descripcion:
        "Amortización constante con intereses decrecientes. Perfecto para reducir intereses totales.",
      calcularCuota: (monto: number, plazo: number, tasa: number) =>
        monto / plazo + monto * (tasa / 12),
    },
    "Crédito Americano": {
      descripcion:
        "Intereses mensuales con capital al final. Excelente para proyectos a corto plazo.",
      calcularCuota: (monto: number) => (monto * 0.08) / 12,
    },
    "Crédito Bullet": {
      descripcion:
        "Pago único al vencimiento. Para inversiones con retorno garantizado.",
      calcularCuota: (monto: number, plazo: number) =>
        monto * (1 + (0.08 * plazo) / 12),
    },
    "Crédito Lineal": {
      descripcion:
        "Cuotas decrecientes con amortización fija. Optimiza tus pagos iniciales.",
      calcularCuota: (monto: number, plazo: number) =>
        monto / plazo + (monto * 0.08) / 12,
    },
  };

  const [monto, setMonto] = useState(10000);
  const [plazo, setPlazo] = useState(24);
  const [tipo, setTipo] =
    useState<keyof typeof tiposCredito>("Crédito Francés");
  const tasaAnual = 0.08;
  const cuota = tiposCredito[tipo].calcularCuota(monto, plazo, tasaAnual);

  const [paymentSchedule, setPaymentSchedule] = useState<number[]>([]);

  const generarDatosProyeccion = (
    monto: number,
    plazo: number,
    tasaAnual: number,
    tipo: keyof typeof tiposCredito
  ) => {
    const datos = [];
    let saldo = monto;
    const tasaMensual = tasaAnual / 12;

    for (let mes = 1; mes <= plazo; mes++) {
      let cuota = 0;

      switch (tipo) {
        case "Crédito Francés":
          cuota =
            (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
          break;
        case "Crédito Alemán":
          cuota = monto / plazo + saldo * tasaMensual;
          break;
        case "Crédito Americano":
          cuota =
            mes === plazo ? monto + monto * tasaMensual : monto * tasaMensual;
          break;
        case "Crédito Bullet":
          cuota = mes === plazo ? monto * (1 + tasaAnual) : 0;
          break;
        case "Crédito Lineal":
          cuota = monto / plazo + saldo * tasaMensual;
          break;
      }

      datos.push({
        mes,
        cuota: Number(cuota.toFixed(2)),
        saldo: Number(saldo.toFixed(2)),
      });

      if (tipo !== "Crédito Americano" && tipo !== "Crédito Bullet") {
        saldo -= cuota - saldo * tasaMensual;
      }
    }

    return datos;
  };

  useEffect(() => {
    const calculatePaymentSchedule = () => {
      const schedule = [];
      let remainingBalance = monto;
      const monthlyRate = tasaAnual / 12;

      switch (tipo) {
        case "Crédito Francés":
          const cuotaFija = tiposCredito[tipo].calcularCuota(
            monto,
            plazo,
            tasaAnual
          );
          return Array(plazo).fill(cuotaFija);

        case "Crédito Alemán":
          const principal = monto / plazo;
          return Array.from({ length: plazo }, (_, i) => {
            const interest = remainingBalance * monthlyRate;
            remainingBalance -= principal;
            return principal + interest;
          });

        case "Crédito Americano":
          const interest = monto * monthlyRate;
          return [...Array(plazo - 1).fill(interest), monto + interest];

        case "Crédito Bullet":
          return [...Array(plazo - 1).fill(0), monto * (1 + tasaAnual)];

        case "Crédito Lineal":
          const principalLineal = monto / plazo;
          return Array.from({ length: plazo }, (_, i) => {
            const interest = remainingBalance * monthlyRate;
            remainingBalance -= principalLineal;
            return principalLineal + interest;
          });

        default:
          return Array(plazo).fill(cuota);
      }
    };

    setPaymentSchedule(calculatePaymentSchedule());
  }, [tipo, monto, plazo, tasaAnual]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefefe] to-[#f6f9fc] relative overflow-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#25466a] to-[#0b4762]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Simulador de Crédito Ordinario
          </motion.h1>
          <p className="text-lg text-[#454442] max-w-2xl mx-auto font-medium">
            Calcule fácilmente su plan de pagos con nuestras opciones de crédito
            personalizadas
          </p>
        </div>

        {/* Contenedor Principal */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Panel de Control */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0]"
            whileHover={{ scale: 1.005 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#25466a]">
              <div className="p-3 bg-[#eea73d]/10 rounded-xl">
                <FaCalculator className="text-[#eea73d] text-2xl" />
              </div>
              <span>Parámetros del Simulador</span>
            </h2>

            <div className="space-y-6">
              {/* Selector de Tipo */}
              <div>
                <label className="block text-sm font-semibold text-[#454442] mb-2">
                  Tipo de Crédito:
                </label>
                <select
                  title="Seleccione el tipo de crédito"
                  className="w-full bg-white border-2 border-[#e0e6ed] rounded-xl p-3 text-[#25466a] font-medium focus:border-[#004169] focus:ring-2 focus:ring-[#004169]/20 transition-all"
                  value={tipo}
                  onChange={(e) =>
                    setTipo(e.target.value as keyof typeof tiposCredito)
                  }
                >
                  {Object.keys(tiposCredito).map((tipo) => (
                    <option key={tipo} value={tipo} className="bg-white">
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deslizadores */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-[#454442]">
                      Monto Solicitado:
                    </span>
                    <span className="font-semibold text-[#25466a]">
                      $ {monto.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="100"
                    value={monto}
                    onChange={(e) => setMonto(Number(e.target.value))}
                    title="Seleccione el monto solicitado"
                    placeholder="Seleccione el monto solicitado"
                    className="w-full h-2 bg-gradient-to-r from-[#004169] to-[#0b4762] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#eea73d] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-[#666] mt-1">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-[#454442]">
                      Plazo de Pago:
                    </span>
                    <span className="font-semibold text-[#25466a]">
                      {plazo} meses
                    </span>
                  </div>
                  <input
                    title="Plazo"
                    type="range"
                    min="3"
                    max="60"
                    value={plazo}
                    onChange={(e) => setPlazo(Number(e.target.value))}
                    className="w-full h-2 bg-gradient-to-r from-[#004169] to-[#0b4762] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#eea73d] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-[#666] mt-1">
                    <span>3 meses</span>
                    <span>60 meses</span>
                  </div>
                </div>
              </div>

              {/* Resultado */}
              <motion.div
                className="bg-gradient-to-br from-[#004169] via-[#0b4762] to-[#25466a] p-[2px] rounded-2xl shadow-lg"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-center">
                    <p className="text-sm text-[#666] mb-1">
                      {tipo.includes("Bullet") ? "PAGO TOTAL" : "CUOTA MENSUAL"}
                    </p>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#25466a] to-[#0b4762]">
                      $ {cuota.toFixed(2)}
                    </p>
                    <div className="mt-3 inline-flex items-center bg-[#eea73d]/10 px-3 py-1 rounded-full text-sm text-[#eea73d]">
                      <FaPercentage className="mr-2" />
                      Tasa anual fija: {(tasaAnual * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Detalles y Características */}
          <div className="space-y-6">
            {/* Descripción del Crédito */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#004169]/10 rounded-xl">
                  <FaFileDownload className="text-2xl text-[#004169]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#25466a]">
                    {tipo}
                  </h3>
                  <p className="text-[#666] leading-relaxed font-medium">
                    {tiposCredito[tipo].descripcion}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Gráfico Interactivo */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#0b4762]/10 rounded-xl">
                  <FaChartLine className="text-2xl text-[#0b4762]" />
                </div>
                <h3 className="text-xl font-bold text-[#25466a]">
                  Proyección de Pagos
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={generarDatosProyeccion(monto, plazo, tasaAnual, tipo)}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis
                      dataKey="mes"
                      stroke="#666"
                      tick={{ fill: "#454442" }}
                      tickFormatter={(value) => `M${value}`}
                    />
                    <YAxis stroke="#666" tick={{ fill: "#454442" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "2px solid #e0e6ed",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                      }}
                      formatter={(value) => [
                        `$${Number(value).toFixed(2)}`,
                        "Cuota",
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="cuota"
                      stroke="#004169"
                      strokeWidth={2}
                      dot={{ fill: "#eea73d", strokeWidth: 2 }}
                      activeDot={{
                        r: 8,
                        fill: "#eea73d",
                        stroke: "#fff",
                        strokeWidth: 2,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Detalles de la Inversión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0]"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#eea73d]/10 rounded-xl">
              <FaChartLine className="text-2xl text-[#eea73d]" />
            </div>
            <h2 className="text-2xl font-bold text-[#25466a]">
              Detalles Financieros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resumen de Pagos */}
            <div className="col-span-full bg-[#f8f9fc] p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-[#25466a]">
                Resumen del Crédito
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-[#e0e6ed]">
                  <p className="text-sm text-[#666] mb-1">Total Intereses</p>
                  <p className="text-xl font-bold text-[#25466a]">
                    $
                    {(
                      paymentSchedule.reduce((a, b) => a + b, 0) - monto
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#e0e6ed]">
                  <p className="text-sm text-[#666] mb-1">Total a Pagar</p>
                  <p className="text-xl font-bold text-[#25466a]">
                    ${paymentSchedule.reduce((a, b) => a + b, 0).toFixed(2)}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#e0e6ed]">
                  <p className="text-sm text-[#666] mb-1">Tasa Efectiva</p>
                  <p className="text-xl font-bold text-[#25466a]">
                    {(
                      paymentSchedule.reduce((a, b) => a + b, 0) / monto -
                      1
                    ).toFixed(2)}
                    %
                  </p>
                </div>
              </div>
            </div>

            {/* Desglose Matemático */}
            <div className="bg-[#f8f9fc] p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-[#25466a]">
                Cálculos Clave
              </h3>
              <div className="space-y-4">
                <div className="pb-2 border-b border-[#e0e6ed]">
                  <p className="text-sm text-[#666]">Principal:</p>
                  <p className="text-lg font-bold text-[#25466a]">
                    ${monto.toLocaleString()}
                  </p>
                </div>
                <div className="pb-2 border-b border-[#e0e6ed]">
                  <p className="text-sm text-[#666]">Tasa Mensual:</p>
                  <p className="text-lg font-bold text-[#25466a]">
                    {((tasaAnual * 100) / 12).toFixed(2)}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#666]">Número de Pagos:</p>
                  <p className="text-lg font-bold text-[#25466a]">{plazo}</p>
                </div>
              </div>
            </div>

            {/* Tabla de Amortización */}
            <div className="bg-[#f8f9fc] p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-[#25466a]">
                Tabla de Amortización
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-[#25466a] border-b-2 border-[#e0e6ed]">
                      <th className="pb-3 text-left">Mes</th>
                      <th className="pb-3 text-right">Capital</th>
                      <th className="pb-3 text-right">Interés</th>
                      <th className="pb-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentSchedule.slice(0, 5).map((pago, index) => (
                      <tr
                        key={index}
                        className="text-sm border-b border-[#e0e6ed] hover:bg-[#f6f9fc]"
                      >
                        <td className="py-3 text-left">{index + 1}</td>
                        <td className="py-3 text-right">
                          ${(monto / plazo).toFixed(2)}
                        </td>
                        <td className="py-3 text-right">
                          ${(pago - monto / plazo).toFixed(2)}
                        </td>
                        <td className="py-3 text-right">${pago.toFixed(2)}</td>
                      </tr>
                    ))}
                    {paymentSchedule.length > 5 && (
                      <tr className="text-center text-[#004169]">
                        <td colSpan={4} className="pt-3">
                          ... {paymentSchedule.length - 5} pagos más
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Beneficios */}
        <div className="mt-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#25466a] to-[#0b4762]">
              Beneficios de Nuestros Créditos
            </h2>
            <p className="text-[#666] mt-2">
              Ventajas competitivas que marcan la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaHandsHelping />,
                title: "Asesoría Personalizada",
                color: "#eea73d",
                text: "Nuestros expertos financieros te guiarán en cada paso del proceso crediticio.",
              },
              {
                icon: <FaPercentage />,
                title: "Tasas Competitivas",
                color: "#004169",
                text: "Disfruta de tasas de interés preferenciales desde 8% anual fijo.",
              },
              {
                icon: <FaClock />,
                title: "Aprobación Rápida",
                color: "#0b4762",
                text: "Proceso de evaluación ágil con respuesta en máximo 48 horas hábiles.",
              },
              {
                icon: <FaFileDownload />,
                title: "Documentación Sencilla",
                color: "#25466a",
                text: "Requisitos mínimos y proceso digital 100% en línea.",
              },
              {
                icon: <FaStar />,
                title: "Beneficios Adicionales",
                color: "#ea6710",
                text: "Seguro de vida gratuito y acceso a programas de recompensas.",
              },
              {
                icon: <FaChartLine />,
                title: "Flexibilidad Total",
                color: "#004169",
                text: "Posibilidad de prepago sin penalizaciones y ajuste de cuotas.",
              },
            ].map((beneficio, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0] hover:shadow-2xl transition-all"
              >
                <div
                  className={`p-3 mb-4 rounded-xl w-fit bg-[${beneficio.color}]/10`}
                >
                  {React.cloneElement(beneficio.icon, {
                    className: "text-2xl",
                    style: { color: beneficio.color },
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#25466a]">
                  {beneficio.title}
                </h3>
                <p className="text-[#666] font-medium">{beneficio.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#004169] to-[#0b4762] p-12 rounded-2xl text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para solicitar tu crédito?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-[#fefefe]/90">
            Completa nuestro sencillo formulario y un asesor se pondrá en
            contacto contigo en menos de 24 horas.
          </p>
          <button className="bg-[#eea73d] hover:bg-[#d8962a] text-white font-bold py-4 px-12 rounded-xl transition-all transform hover:scale-105 shadow-lg">
            Solicitar Crédito
          </button>
        </div>

        {/* Contacto */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Teléfono",
              content: "+593 983341084",
              sub: "Lunes a Viernes: 8:00 - 17:00",
              color: "#004169",
            },
            {
              icon: <FaEnvelope />,
              title: "Correo",
              content: "fundacionaneupi2020@gmail.com",
              sub: "Respuesta en menos de 24h",
              color: "#0b4762",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Dirección",
              content: "Cuenca - Ecuador",
              sub: "Oficinas principales",
              color: "#25466a",
            },
          ].map((contacto, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl border-[1.5px] border-[#f0f0f0]"
            >
              <div className={`flex items-center mb-4 gap-4`}>
                <div className={`p-3 rounded-xl bg-[${contacto.color}]/10`}>
                  {React.cloneElement(contacto.icon, {
                    className: "text-2xl",
                    style: { color: contacto.color },
                  })}
                </div>
                <h3 className="text-lg font-semibold text-[#25466a]">
                  {contacto.title}
                </h3>
              </div>
              <p className="text-[#454442] font-medium">{contacto.content}</p>
              <p className="text-sm text-[#666] mt-2">{contacto.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
