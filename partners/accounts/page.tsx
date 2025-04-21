'use client'
import React, { useState } from "react";

import ahorroproImageImage from "@/app/assets/image/ahorropro.png";
import ahorrorenImage from "@/app/assets/image/ahorroren.png";
import cuentaahoImage from "@/app/assets/image/cuentaaho.png";
import cuentacorImage from "@/app/assets/image/cuentacor.png";
import cuentasImage from "@/app/assets/image/cuentas.gif";

import { Button } from "@nextui-org/react";
import { HiCalendar, HiCreditCard, HiOutlineCurrencyDollar, HiWallet } from "react-icons/hi2";

const Accounts: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const cards = [
    {
      image: ahorroproImageImage.src,
      title: "Ahorro Programado",
      description: "(En desarrollo)",
      details: [
        "Gana intereses desde el primer día.",
        "Sin depósito inicial.",
        "Realiza depósitos, retiros, transferencias, pagos en nuestras agencias y canales electrónicos.",
      ],
    },
    {
      image: ahorrorenImage.src,
      title: "Ahorro Rentable",
      description: "(En desarrollo)",
      details: [
        "Intereses competitivos.",
        "Accesible a cualquier persona.",
        "Ahorra en cualquier momento.",
      ],
    },
    {
      image: cuentaahoImage.src,
      title: "Cuenta de Ahorros",
      description: "(En desarrollo)",
      details: [
        "Depósito mínimo bajo.",
        "Acceso a tus fondos en cualquier momento.",
        "Intereses mensuales.",
      ],
    },
    {
      image: cuentacorImage.src,
      title: "Cuenta Corriente",
      description: "(En desarrollo)",
      details: [
        "Cheques disponibles.",
        "Tarjetas de débito incluidas.",
        "Sin costos de mantenimiento mensual.",
      ],
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-2">Opciones de Cuentas</h1>
        <p className="text-lg font-medium">
          Descubre las opciones disponibles para abrir tu cuenta de manera fácil y segura.
        </p>
      </header>

      <div className="flex justify-center gap-6 mt-8">
        {/* Card 1 */}
        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <div className="relative z-10">
            <HiWallet className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-white bg-[rgba(37,70,106,1)] px-4 py-2 rounded-md">Cuentas de Ahorros</h3>
            <p className="text-sm">(En desarrollo)</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <div className="relative z-10">
            <HiOutlineCurrencyDollar className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-white bg-[rgba(37,70,106,1)] px-4 py-2 rounded-md">Ahorro Rentable</h3>
            <p className="text-sm">(En desarrollo)</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <div className="relative z-10">
            <HiCreditCard className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-white bg-[rgba(37,70,106,1)] px-4 py-2 rounded-md">Cuenta Corriente</h3>
            <p className="text-sm">(En desarrollo)</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-6 text-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center"
          style={{ backgroundColor: "rgba(37,70,106,1)" }}>
          <div className="relative z-10">
            <HiCalendar className="text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-white bg-[rgba(37,70,106,1)] px-4 py-2 rounded-md">Ahorro Programado</h3>
            <p className="text-sm">(En desarrollo)</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-12 px-8 border-4 border-[#25466A] rounded-xl p-6 shadow-lg">
        <div className="flex-grow pr-6">
          <h2 className="text-3xl font-semibold text-[rgba(37,70,106,1)]">
            Cuentas
          </h2>

          <p className="text-lg text-gray-500 text">(en desarrollo)</p>
          <p className="text-black text-lg">
            Descubre todas las opciones de cuentas que ofrecemos. Desde cuentas de ahorro hasta planes especiales
            diseñados para maximizar tus beneficios financieros.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            className="w-[500px] h-auto rounded-xl shadow-lg"
            src={cuentasImage.src}
            alt="Cuentas"
          />
        </div>
      </div>

      {/* Sección de Beneficios - Carrusel */}
      <section className="p-8 text-center">
        <h2 className="text-xl font-bold text-[#00325e] dark:text-gray-100 mb-4">
          Beneficios y Opciones
        </h2>

        <p className="text-lg text-gray-500 text">(en desarrollo)</p>
        <div className="relative">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={prevCard}
              className="text-xl text-[#00325e] hover:scale-110 transition duration-300"
            >
              &lt;
            </button>
            <div className="w-full md:w-2/3">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 border-4 border-[rgba(37,70,106,1)]">
                <img
                  src={cards[currentCard].image}
                  alt={cards[currentCard].title}
                  className="mx-auto mb-4 rounded-xl w-80 h-64 object-cover"
                />
                <h3 className="text-lg font-bold mb-2 text-[#00325e]">{cards[currentCard].title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cards[currentCard].description}</p>

                <Button color="primary" className="mt-4" onClick={toggleMoreInfo}>
                  {showMoreInfo ? "Ocultar Información" : "Más Información"}
                </Button>

                {showMoreInfo && (
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    <ul className="list-none pl-6">
                      {cards[currentCard].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={nextCard}
              className="text-xl text-[#00325e] hover:scale-110 transition duration-300"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounts;
