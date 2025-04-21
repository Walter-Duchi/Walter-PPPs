"use client";
import React, { useState, useEffect } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function Estructura() {
  // Estado para el carrusel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDirectorio, setShowDirectorio] = useState(false);
  const [showPresidente, setShowPresidente] = useState(false);
  const slides = ["/carrusel1.jpg", "/carrusel2.jpg", "/carrusel3.jpg"];

  // Miembros del directorio
  const miembrosDirectorio = [
    {
      nombre: "Henry Ricardo Erraez",
      cargo: "Presidente de la Fundación ANEUPI",
      correo: "fundacionaneupi2020@gmail.com",
      celular: "+593 983341084",
      direccion: "Cuenca - Ecuador",
    },
    {
      nombre: "Patricio Rodrigo Moscoso",
      cargo: "Director de la Academia ANEUPI",
      correo: "academiaaneupi2020@gmail.com",
      celular: "+593 983341084",
      direccion: "Quito - Ecuador",
    },
    {
      nombre: "Joel Wilfrido Erraez",
      cargo: "Gerente de la Constructora e inmobiliaria LECENI",
      correo: "constructoraleceni@gmail.com",
      celular: "+593 9945472325",
      direccion: "Quito - Ecuador",
    },
    {
      nombre: "Juan Diego Ochoa",
      cargo: "Gerente de la ANEUPI TV",
      correo: "fundacionaneupi2020@gmail.com",
      celular: "+593 983341084",
      direccion: "Cuenca - Ecuador",
    },
    {
      nombre: "Daniel Sebastián Espinoza",
      cargo: "Gerente del proyecto de la Cooperativa Financiera ANEUPI",
      correo: "cooperativa.aneupi@gmail.com",
      celular: "+593 983341084",
      direccion: "Cuenca - Ecuador",
    },
    {
      nombre: "Henry Ricardo Erraez",
      cargo: "Gerente de Gatito Plis",
      correo: "fundacionaneupi2020@gmail.com",
      celular: "+593 983341084",
      direccion: "Cuenca - Ecuador",
    },
  ];

  // Datos del presidente
  const datosPresidente = {
    nombre: "Henry Ricardo Erraez",
    correo: "henry@institucionfinanciera.com",
    cargo: "Presidente de la Fundación ANEUPI",
  };

  // Efecto para el carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Nodos del mapa conceptual
  const nodes = [
    {
      id: "accionista",
      position: { x: 350, y: 0 },
      data: { label: "ACCIONISTA" },
      style: {
        fontWeight: "bold",
        fontSize: "1.25rem",
        background: "transparent",
        border: "none",
        width: 150,
      },
    },
    {
      id: "directorio",
      position: { x: 350, y: 60 },
      data: {
        label: (
          <div
            onClick={() => setShowDirectorio(!showDirectorio)}
            className="cursor-pointer"
          >
            DIRECTORIO
          </div>
        ),
      },
      style: {
        backgroundColor: "#0b4762",
        color: "#fefefe",
        fontWeight: "bold",
        width: 200,
        borderRadius: "8px",
        border: "2px solid #004169",
      },
    },
    {
      id: "auditoria",
      position: { x: 200, y: 120 },
      data: { label: "Auditoría Interna" },
      style: {
        width: 180,
        fontSize: "0.9rem",
        backgroundColor: "#fefefe",
        borderRadius: "6px",
        border: "1px solid #454442",
      },
    },
    {
      id: "cumplimiento",
      position: { x: 500, y: 120 },
      data: { label: "Unidad de Cumplimiento" },
      style: {
        width: 180,
        fontSize: "0.9rem",
        backgroundColor: "#fefefe",
        borderRadius: "6px",
        border: "1px solid #454442",
      },
    },
    {
      id: "presidente",
      position: { x: 350, y: 180 },
      data: {
        label: (
          <div
            onClick={() => setShowPresidente(!showPresidente)}
            className="cursor-pointer"
          >
            Presidente Ejecutivo
          </div>
        ),
      },
      style: {
        backgroundColor: "#004169",
        color: "#fefefe",
        fontWeight: "bold",
        width: 200,
        borderRadius: "8px",
        border: "2px solid #0b4762",
      },
    },
    {
      id: "asesoria",
      position: { x: 350, y: 250 },
      data: { label: "Gerente General" },
      style: {
        width: 280,
        fontSize: "0.9rem",
        backgroundColor: "#fefefe",
        borderRadius: "6px",
        border: "1px solid #454442",
      },
    },
    {
      id: "comercial",
      position: { x: 150, y: 330 },
      data: { label: "Comercial" },
      style: {
        fontWeight: "bold",
        width: 150,
        backgroundColor: "#eea73d",
        borderRadius: "6px",
        border: "1px solid #ea6710",
      },
    },
    {
      id: "mercadeo",
      position: { x: 50, y: 380 },
      data: { label: "Mercadeo" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "medios-pago",
      position: { x: 50, y: 420 },
      data: { label: "Medios de Pago" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "canales-financieros",
      position: { x: 50, y: 460 },
      data: { label: "Canales Financieros" },
      style: {
        width: 140,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "negocios",
      position: { x: 200, y: 380 },
      data: { label: "Negocios" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "salt-servicios",
      position: { x: 200, y: 420 },
      data: { label: "SALT Servicios Bancarios" },
      style: {
        width: 160,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "riesgos",
      position: { x: 550, y: 330 },
      data: { label: "Riesgos Integrales" },
      style: {
        fontWeight: "bold",
        width: 150,
        backgroundColor: "#25466a",
        color: "#fefefe",
        borderRadius: "6px",
        border: "1px solid #0b4762",
      },
    },
    {
      id: "talento-humano",
      position: { x: 450, y: 380 },
      data: { label: "Talento Humano" },
      style: {
        width: 130,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "planificacion",
      position: { x: 450, y: 420 },
      data: { label: "Planificación Estratégica" },
      style: {
        width: 160,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "tesoreria",
      position: { x: 450, y: 460 },
      data: { label: "Tesorería y Finanzas" },
      style: {
        width: 160,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "operaciones",
      position: { x: 620, y: 380 },
      data: { label: "Operaciones Integrales" },
      style: {
        width: 160,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "compras",
      position: { x: 620, y: 420 },
      data: { label: "Compras" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "administracion",
      position: { x: 620, y: 460 },
      data: { label: "Administración" },
      style: {
        width: 130,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "procesos",
      position: { x: 790, y: 380 },
      data: { label: "Procesos" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "tecnologia",
      position: { x: 790, y: 420 },
      data: { label: "Tecnología" },
      style: {
        width: 120,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
    {
      id: "seguridad",
      position: { x: 790, y: 460 },
      data: { label: "Seguridad Bancaria" },
      style: {
        width: 150,
        backgroundColor: "#fefefe",
        borderRadius: "4px",
        border: "1px solid #454442",
      },
    },
  ];

  // Conexiones del mapa conceptual
  const edges = [
    { id: "a-d", source: "accionista", target: "directorio", type: "straight" },
    { id: "d-a", source: "directorio", target: "auditoria", type: "straight" },
    {
      id: "d-c",
      source: "directorio",
      target: "cumplimiento",
      type: "straight",
    },
    { id: "d-p", source: "directorio", target: "presidente", type: "straight" },
    { id: "p-a", source: "presidente", target: "asesoria", type: "straight" },
    { id: "p-r", source: "presidente", target: "riesgos", type: "straight" },
    { id: "a-c", source: "asesoria", target: "comercial", type: "straight" },
    { id: "c-me", source: "comercial", target: "mercadeo", type: "straight" },
    {
      id: "c-mp",
      source: "comercial",
      target: "medios-pago",
      type: "straight",
    },
    {
      id: "c-cf",
      source: "comercial",
      target: "canales-financieros",
      type: "straight",
    },
    { id: "c-n", source: "comercial", target: "negocios", type: "straight" },
    {
      id: "c-ss",
      source: "comercial",
      target: "salt-servicios",
      type: "straight",
    },
    {
      id: "r-th",
      source: "riesgos",
      target: "talento-humano",
      type: "straight",
    },
    {
      id: "r-pe",
      source: "riesgos",
      target: "planificacion",
      type: "straight",
    },
    { id: "r-tf", source: "riesgos", target: "tesoreria", type: "straight" },
    { id: "r-oi", source: "riesgos", target: "operaciones", type: "straight" },
    { id: "r-c", source: "riesgos", target: "compras", type: "straight" },
    {
      id: "r-ad",
      source: "riesgos",
      target: "administracion",
      type: "straight",
    },
    { id: "r-pr", source: "riesgos", target: "procesos", type: "straight" },
    { id: "r-tec", source: "riesgos", target: "tecnologia", type: "straight" },
    { id: "r-sb", source: "riesgos", target: "seguridad", type: "straight" },
  ];

  return (
    <div className="min-h-screen bg-[#fefefe]">
      {/* Modales para mostrar la información */}
      {showDirectorio && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-[#004169]/20 overflow-hidden">
            <div className="bg-[#25466a] p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                <svg
                  className="w-6 h-6 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Miembros del Directorio
              </h3>
              <button
                onClick={() => setShowDirectorio(false)}
                className="text-white hover:text-[#eea73d] transition-colors"
                title="Cerrar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {miembrosDirectorio.map((miembro, index) => (
                  <div
                    key={index}
                    className="bg-[#f8f9fa] p-4 rounded-lg border border-[#454442]/10"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#0b4762] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-[#25466a]">
                          {miembro.nombre}
                        </p>
                        <p className="text-sm text-[#454442]">
                          {miembro.cargo}
                        </p>
                        <p className="text-sm text-[#454442]">
                          <strong>Correo:</strong> {miembro.correo}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowDirectorio(false)}
                  className="bg-[#004169] hover:bg-[#0b4762] text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPresidente && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-[#004169]/20 overflow-hidden">
            <div className="bg-[#25466a] p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                <svg
                  className="w-6 h-6 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Información del Presidente
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-[#0b4762] text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-[#25466a]">
                    {datosPresidente.nombre}
                  </h4>
                  <p className="text-[#454442]">{datosPresidente.cargo}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#eea73d]/10 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-[#eea73d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#454442]/80">
                      Correo electrónico
                    </p>
                    <p className="font-medium text-[#25466a]">
                      {datosPresidente.correo}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#eea73d]/10 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-[#eea73d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#454442]/80">Teléfono</p>
                    <p className="font-medium text-[#25466a]">+593 983341084</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#eea73d]/10 p-2 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-[#eea73d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#454442]/80">Dirección</p>
                    <p className="font-medium text-[#25466a]">
                      Cuenca - Ecuador
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPresidente(false)}
                  className="bg-[#004169] hover:bg-[#0b4762] text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carrusel */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-[#454442]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 text-white max-w-lg">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Soluciones financieras integrales
              </h2>
              <p className="text-sm md:text-base">
                Innovación y seguridad para tus operaciones bancarias
              </p>
            </div>
          </div>
        ))}

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#eea73d]" : "bg-white/50"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Título y botón de descarga */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-[#454442]/20 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#25466a] text-center md:text-left">
            Estructura Organizacional
          </h1>
          <a
            href="/estructura-aneupi.pdf"
            download="Estructura-ANEUPI.pdf"
            className="bg-[#004169] hover:bg-[#0b4762] text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Descargar estructura (PDF)
          </a>
        </div>
      </div>

      {/* Mapa conceptual */}
      <div className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#454442]/10">
          <div className="h-[600px]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              nodesDraggable={false}
              zoomOnScroll={false}
              defaultEdgeOptions={{
                type: "straight",
                style: { stroke: "#454442", strokeWidth: 1.5 },
              }}
            >
              <Background color="#f0f0f0" gap={16} />
              <Controls
                showInteractive={false}
                position="top-right"
                style={{
                  backgroundColor: "white",
                  borderRadius: "4px",
                  padding: "4px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              />
            </ReactFlow>
          </div>
          <div className="mt-6 text-center text-sm text-[#454442]/80">
            <p>
              Haz zoom o desplázate para explorar nuestra estructura
              organizacional
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="bg-[#f8f9fa] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#25466a] mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Canales y agencias */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-[#0b4762] p-4 flex items-center">
                <svg
                  className="w-8 h-8 text-[#eea73d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="ml-3 font-bold text-lg text-white">
                  Canales y agencias
                </h3>
              </div>
              <div className="p-5">
                <p className="text-[#454442] mb-4">Telf: 3731500</p>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Ir a agencias y cajeros
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Conoce nuestros canales
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reclamos */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-[#004169] p-4 flex items-center">
                <svg
                  className="w-8 h-8 text-[#eea73d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="ml-3 font-bold text-lg text-white">Reclamos</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Formulario de Reclamos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Defensor del cliente
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tarifas */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-[#25466a] p-4 flex items-center">
                <svg
                  className="w-8 h-8 text-[#eea73d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="ml-3 font-bold text-lg text-white">Tarifas</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Tarifa de cuentas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Tarjetas y más
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Ver todas
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contáctate */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="bg-[#0b4762] p-4 flex items-center">
                <svg
                  className="w-8 h-8 text-[#eea73d]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <h3 className="ml-3 font-bold text-lg text-white">
                  Contáctate
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Solicita cuentas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Créditos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Tarjetas Pacificard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#004169] hover:text-[#0b4762] hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Servicios
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
