"use client"

import { useState, useEffect } from "react";
import React from "react";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";

export const HeaderPage: React.FC = () => {
    const images = ["/homeResources/familia4.jpg", "/homeResources/familia5.jpg", "/homeResources/familia3.jpg", "/homeResources/Casa1.jpg"];
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageAnimation, setImageAnimation] = useState('slideUp');
        useEffect(() => {
            const interval = setInterval(() => {
                setImageAnimation(imageAnimation === 'slideUp' ? 'slideDown' : 'slideUp');
                setCurrentImage((prevImage) => {
                    const currentIndex = images.indexOf(prevImage);
                    const nextIndex = (currentIndex + 1) % images.length;
                    return images[nextIndex];
                });
            }, 5000);
    
            return () => clearInterval(interval);
        }, [imageAnimation]);
    return(
        <div className="flex flex-col w-full gap-10 mb-8">
            <div className="flex w-[1000px] items-center justify-center mx-auto"> {/* contenedor del banner - imagen */}
                <div className="relative w-full h-[300px]">
                    {/* Imagen */}
                    <img
                        src={currentImage}
                        alt="Imagen representativa"
                        width={1000}
                        height={300}
                        className={`w-full h-full object-cover rounded-2xl transition-all duration-1000 border-3 border-[#25466a] opacity-50 ${imageAnimation === 'slideUp' ? 'animate-slideUp' : 'animate-slideDown'}`}
                    />

                    {/* Texto sobre la imagen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-[#25466a] text-3xl font-bold drop-shadow-lg">Prueba nuestro crédito uno de los mejores <br /> creditos que encontraras en el mercado</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2"> {/* contenedor del texto */}
                <h1 className="text-6xl text-[#25466a] font-serif font-bold">CRÉDITO EMERGENTE</h1>
                <p className="text-xl text-[#25466a] font-serif text-center">
                    Estos créditos son inmediatos, para resolver cualquier necesidad del socio a un plazo 
                    y tasa preferencial.
                </p>
            </div>
            <div className="flex flex-col gap-3"> {/* contenedor de los requisitos generales y casos */}
                <Section title="REQUISITOS GENERALES">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div>
                                <ul className="list-disc pl-5">
                                    <li>Copia de cédula de identidad y papeleta de votación</li>
                                    <li>Planilla de un servicio básico (agua, luz, teléfono)</li>
                                    <li>Pago del predio actualizado</li>
                                    <li>Justificativo de Ingresos (RUC-RISE-ROL DE PAGOS)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="Aplica para los siguientes casos: ">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div>
                            <div>
                                <ul className="list-disc pl-5">
                                    <li>Gastos mortuorios</li>
                                    <li>Gastos causados por desastres naturales</li>
                                    <li>Incendio / Robo / Inundaciones / Derrumbes</li>
                                    <li>Gastos médicos de emergencia</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
                <div className="flex items-center justify-center gap-3 mt-5"> {/* contenedor del boton de atencion al cliente */}
                    <button 
                        className="bg-[#25466a] text-white font-bold p-3 rounded-lg hover:bg-orange-500 
                        hover:text-white transition duration-300 ease-in-out shadow-2xl"
                        
                    >
                        Atencion al Cliente
                    </button>
                </div>
            </div>
        </div>
    );
}

const Section: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="flex flex-col w-[1000px] mb-2 items-center justify-center mx-auto rounded-lg">
        <button
          className=" w-[1000px] text-right text-white font-bold p-3 flex items-center justify-between bg-[#25466a] rounded-lg hover:text-orange-500 transition duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span className="text-2xl">{isOpen ?  <VscChevronUp /> : <VscChevronDown /> }</span>
        </button>
        {isOpen && <div className="flex w-[1000px] p-5 bg-slate-200 text-left rounded-b-lg shadow-lg transition duration-1000">{children}</div>}
      </div>
    );
  };