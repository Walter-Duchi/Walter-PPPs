import { HiCurrencyDollar, HiOutlineDocumentText } from "react-icons/hi";
import { HiBuildingLibrary, HiMiniBanknotes, HiMiniHandThumbUp } from "react-icons/hi2";

const Loan = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">
      <header className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 text-center rounded-lg">
        <div className="absolute inset-0 bg-opacity-30 bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Crédito Exclusivo para Socios</h1>
          <p className="mt-4 text-xl">Impulsa tus sueños con beneficios únicos</p>
          <p className="text-lg font-medium mt-2">Aprovecha nuestras tasas preferenciales y planes de pago flexibles diseñados solo para ti</p>
        </div>
      </header>
        <section className="py-16 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-400 mb-6 text-center">Beneficios Exclusivos</h2>
            <p className="text-lg mb-8 text-center">Nuestros socios merecen las mejores tasas reducidas, atención prioritaria y asesoramiento experto.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold text-center">Tasas de interés reducidas</h3>
                  <HiBuildingLibrary className="mx-auto text-4xl mb-2"/>
                  <p className="mt-2 text-center">Disfrutarán de tasas más bajas en sus créditos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold text-center">Asesoramiento financiero personalizado</h3>
                  <HiCurrencyDollar className="mx-auto text-4xl mb-2"/>
                  <p className="mt-2 text-center">Tendrán consultas gratuitas con nuestros expertos financieros.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold text-center">Aprobación rápida</h3>
                  <HiMiniHandThumbUp className="mx-auto text-4xl mb-2"/>
                  <p className="mt-2 text-center">Procesamiento prioritario para solicitudes de crédito.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold text-center">Bonificaciones de fidelidad</h3>
                  <HiMiniBanknotes className="mx-auto text-4xl mb-2"/>
                  <p className="mt-2">Tendrán descuentos y recompensas por ser un socio leal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold text-center">Planes de pago personalizados</h3>
                  <HiOutlineDocumentText className="mx-auto text-4xl mb-2"/>
                  <p className="mt-2 text-center">Opciones de pago adaptadas a tus necesidades y circunstancias.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 bg-blue-100 dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-6">Formulario de préstamos</h2>
            <p className="text-lg mb-8">Descarga el formulario para aplicar a nuestros préstamos exclusivos para socios.</p>
            <a href="/loan-form.pdf" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Descargar Formulario</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loan;
