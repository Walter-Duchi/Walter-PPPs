'use client';
import { useEffect, useState } from "react";
import { FaPiggyBank, FaHeartbeat, FaTags } from "react-icons/fa";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import benefisocialGif from "@/app/assets/image/benefisocial.gif";
import bienesaludGif from "@/app/assets/image/bienesalud.gif";
import creditoahoGif from "@/app/assets/image/creditoaho.gif";
import desconveGif from "@/app/assets/image/desconve.gif";

const images = [
  [creditoahoGif],
  [bienesaludGif],
  [desconveGif]
];

const SocialBenefitsPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState([0, 0, 0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex.map((index, i) => (index + 1) % images[i].length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 md:space-y-20">
      <header className="p-8 bg-[rgba(37,70,106,1)] text-white rounded-2xl shadow-xl text-center transform transition-all duration-300">
        <h1 className="text-3xl font-bold mb-2">Beneficios Sociales</h1>
        <p className="text-lg font-medium">
          Descubre los beneficios que ofrecemos para mejorar tu calidad de vida.
        </p>
      </header>

      <section className="flex items-center space-x-10 mt-8 px-4 border-4 border-[rgba(37,70,106,1)] rounded-2xl shadow-xl">
        <div className="flex-shrink-0">
          <img
            className="w-[400px] h-[250px] object-cover rounded-xl"
            src={benefisocialGif.src}
            alt="Beneficios Especiales"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-[rgba(37,70,106,1)]">
            Beneficios Especiales para Ti
          </h2>
          <p className="text-lg text-gray-500">(en desarrollo)</p>
          <p className="text-black text-lg">
            Nuestros beneficios están diseñados para mejorar tu bienestar y brindarte soluciones que
            contribuyan a una vida más plena. Aprovecha cada uno de los programas que tenemos
            disponibles para ti, que van desde servicios financieros hasta bienestar y descuentos exclusivos.
          </p>
        </div>
      </section>

      {/* TARJETAS DE BENEFICIOS */}
      <FadeInEffect className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
          {/* TARJETA 1 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border-4 border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
            <div className="flex items-center gap-4 mb-4">
              <FaPiggyBank className="text-[rgba(37,70,106,1)] text-3xl hover:text-blue-800 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                Crédito y Ahorro
              </h3>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Acceso a Créditos Favorables
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Tasas de interés más bajas que los bancos tradicionales, ofreciendo mejores opciones de financiamiento.
            </p>
            <div className="relative w-full h-40">
              <img
                className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                src={images[0][currentImageIndex[0]].src}
                alt="Crédito y Ahorro"
              />

              <p className="text-lg text-gray-500">(en desarrollo)</p>

            </div>
          </div>

          {/* TARJETA 2 */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border-4 border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
            <div className="flex items-center gap-4 mb-4">
              <FaHeartbeat className="text-red-500 text-3xl hover:text-red-700 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                Bienestar y Salud
              </h3>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Seguros Asequibles
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Proporcionamos seguros y pólizas a precios accesibles para proteger a los asociados y sus familias.
            </p>
            <div className="relative w-full h-40">
              <img
                className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                src={images[1][currentImageIndex[1]].src}
                alt="Bienestar y Salud"
              />

              <p className="text-lg text-gray-500">(en desarrollo)</p>
            </div>
          </div>

          {/* TARJETA 3 - DESCUENTOS Y CONVENIOS */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border-4 border-[rgba(37,70,106,1)] hover:border-[rgba(37,70,106,1)]">
            <div className="flex items-center gap-4 mb-4">
              <FaTags className="text-green-500 text-3xl hover:text-green-700 transition-colors duration-300" />
              <h3 className="text-2xl font-bold text-white bg-[rgba(37,70,106,1)] p-2 rounded-md">
                Descuentos y Convenios
              </h3>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Beneficios Exclusivos
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Accede a descuentos especiales en tiendas, farmacias y servicios gracias a convenios con diversas empresas.
            </p>
            <div className="relative w-full h-40">
              <img
                className="w-full h-full object-cover rounded-xl mt-6 shadow-md hover:scale-105 transition-transform duration-300"
                src={images[2][currentImageIndex[2]].src}
                alt="Descuentos y Convenios"
              />

              <p className="text-lg text-gray-500">(en desarrollo)</p>
            </div>
          </div>
        </div>
      </FadeInEffect>

      <div className="flex justify-center mt-10">
        <Link href="/partners/FinancialEducationPartners" passHref>
          <Button
            className="text-white bg-gradient-to-r from-[rgba(37,70,106,1)] to-[rgba(37,70,106,1)] hover:from-[rgba(37,70,106,1)] hover:to-[rgba(37,70,106,1)] transition-all duration-300"
            size="lg"
          >
            ¡Descubre más!
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default SocialBenefitsPage;
