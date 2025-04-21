"use client";
import {
  HiHome,
  HiMiniPhone,
  HiMiniWifi,
  HiOutlineBanknotes,
  HiOutlineLightBulb,
  HiTruck,
  HiShieldCheck,
} from "react-icons/hi2";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import serviciosGif from "@/app/assets/image/servicios.gif";

const Services = () => {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const handleMoreInfo = (service: string) => {
    if (expandedServices.includes(service)) {
      setExpandedServices(expandedServices.filter((s) => s !== service));
    } else {
      setExpandedServices([...expandedServices, service]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#25466A]">
      <header className="bg-[rgba(37,70,106,1)] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold">Servicios Disponibles</h1>
        <p className="mt-4 text-xl">
          Explora los servicios que tenemos a tu disposición para facilitarte la vida financiera.
        </p>
        <p className="text-lg mt-2 font-medium italic"></p>
      </header>

      <section className="flex items-center space-x-10 mt-8 px-4 border-4 border-[rgba(37,70,106,1)] rounded-2xl shadow-xl">
  <div className="flex-shrink-0">
    <img
      src={serviciosGif.src}
      alt="Imagen de Servicios"
      className="w-[400px] h-[250px] object-cover rounded-xl"
    />
  </div>
  <div className="flex-grow">
    <h2 className="text-2xl font-semibold text-[rgba(37,70,106,1)]">Servicios</h2>
    <p className="text-lg text-gray-500 text">(en desarrollo)</p>
    <p className="text-black text-lg">
      Aquí podrás encontrar una variedad de servicios diseñados para facilitarte la vida financiera, con
      opciones personalizadas y accesibles para todos. Explora y encuentra lo que mejor se adapte a tus
      necesidades.
    </p>
  </div>
</section>


      <section className="py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Servicio Eléctrico */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiOutlineLightBulb className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Servicio Eléctrico</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Servicio Eléctrico")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Servicio Eléctrico") && (
              <p className="mt-4">
                Con nuestro <strong>Servicio Eléctrico</strong>, te ofrecemos tarifas competitivas y un acceso
                rápido a tu consumo. Además, podrás disfrutar de opciones de pago flexibles que se adaptan a tu
                estilo de vida. Mantente al tanto de las tarifas actualizadas y planifica tu consumo de manera
                eficiente para evitar sorpresas. ¡Deja que nosotros nos encarguemos de la energía mientras tú te
                concentras en lo que importa!
              </p>
            )}
          </div>

          {/* Servicio Potable */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiHome className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Servicio Potable</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Servicio Potable")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Servicio Potable") && (
              <p className="mt-4">
                Nuestro <strong>Servicio Potable</strong> te ofrece el agua limpia y segura que necesitas para
                tu día a día. Sabemos que el agua es esencial, por eso te proporcionamos un servicio confiable
                que garantiza el acceso a agua de calidad. Además, puedes consultar nuestras tarifas y realizar
                tus pagos en línea de manera fácil y rápida. ¡Hidratarte nunca ha sido tan fácil y accesible!
              </p>
            )}
          </div>

          {/* Predios Urbanos */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiOutlineBanknotes className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Predios Urbanos</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Predios Urbanos")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Predios Urbanos") && (
              <p className="mt-4">
                Con el servicio de <strong>Predios Urbanos</strong>, tienes a tu disposición una solución para
                gestionar los pagos de impuestos de tus propiedades. Ya sea que necesites realizar pagos de
                impuestos prediales o mantener tus predios urbanos al día, nosotros te brindamos un sistema
                fácil de usar y accesible en línea. ¡No más complicaciones al manejar tus propiedades!
              </p>
            )}
          </div>

          {/* Internet */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiMiniWifi className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Internet</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Internet")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Internet") && (
              <p className="mt-4">
                En un mundo conectado, el acceso a <strong>Internet</strong> es vital. Con nuestro servicio de
                Internet de alta velocidad, podrás navegar, trabajar y comunicarte sin interrupciones. Ya sea
                que necesites un plan para tu hogar o para tu oficina, te ofrecemos opciones flexibles que se
                adaptan a tus necesidades. ¡Aprovecha los beneficios de una conexión rápida y confiable!
              </p>
            )}
          </div>

          {/* Telefonía */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiMiniPhone className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Telefonía</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Telefonía")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Telefonía") && (
              <p className="mt-4">
                Mantente conectado con el mundo a través de nuestro servicio de <strong>Telefonía</strong>. Ofrecemos
                tarifas competitivas para llamadas nacionales e internacionales. Además, podrás gestionar tus pagos
                y recargas en línea, lo que te da comodidad y flexibilidad. ¡Hablar nunca ha sido tan sencillo y
                económico!
              </p>
            )}
          </div>

          {/* Pensión Alimenticia */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiTruck className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Pensión Alimenticia</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Pensión Alimenticia")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Pensión Alimenticia") && (
              <p className="mt-4">
                El servicio de <strong>Pensión Alimenticia</strong> te brinda una plataforma segura para gestionar
                y realizar tus pagos de pensión alimentaria. Nos encargamos de que el proceso sea sencillo, rápido
                y transparente. Conoce más sobre las tarifas, opciones de pago y cómo puedes facilitar este importante
                compromiso de manera confiable.
              </p>
            )}
          </div>

          {/* Seguros Personales */}
          <div className="bg-[#25466A] text-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
            <HiShieldCheck className="text-4xl mb-4" /> {/* Nuevo ícono de seguro */}
            <h3 className="text-xl font-semibold">Seguros Personales</h3>
            <Button color="secondary" className="mt-4 bg-white text-[#25466A] hover:bg-[#f1f1f1]" onClick={() => handleMoreInfo("Seguros Personales")}>
              Más Información
            </Button>
            <p className="text-lg text-white-500 text-center">(en desarrollo)</p>
            {expandedServices.includes("Seguros Personales") && (
              <p className="mt-4">
                Protege lo que más importa con nuestros <strong>Seguros Personales</strong>. Ofrecemos seguros de vida, salud y accidentes con coberturas adaptadas a tus necesidades. ¡Asegura tu tranquilidad y la de los tuyos!
              </p>
            )}
          </div>

        </div>

        <div className="mt-12 text-center text-[#25466A]">
          <p className="text-lg font-medium">
            En esta institución financiera podrás a futuro realizar pagos de
            servicios para que tengas una facilidad.
          </p>
          <p className="mt-4 text-base">
            Estos servicios serán de ayuda para que puedas realizarlos de manera
            amplia y segura además con confianza y sin contratiempos.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
