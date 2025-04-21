"use client"

import React from 'react';
import { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronUp } from "react-icons/vsc";

export const InfoPage: React.FC = () => {
    return (
        <div className="my-8"> {/* contenedor principal */}
            <div className="flex flex-col w-[1000px] gap-4 py-2 items-center justify-center mx-auto">
                <p className="text-lg text-[#25466a] font-serif">
                    Información sujeta a variaciones y verificación de la Institución Financiera. Los cálculos ofrecidos tienen carácter orientativo 
                    y, en cualquier caso, la operación está sujeta a variaciones y aprobación posterior, por lo que no constituye una oferta de 
                    contratación que vincule a la Institución Financiera.
                </p>
                <div className="flex flex-col w-[1000px] gap-2 py-2 text-left mx-auto">
                    <Section title="SEGUROS AL SACAR EL CREDITO">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <div>
                                <div>
                                    <ul className="list-disc pl-5">
                                        <li className="text-[#25466a] text-lg font-serif">
                                            <span className="font-bold underline"> Seguro de Desgravamen: </span>Aplicado en caso de muerte, incapacidad total y permanente o enfermedad catastrófica para titular 
                                            y conyugue, adicional otorga cobertura por desempleo o incapacidad temporal hasta 5 cuotas solo para el titular, 
                                            será cobrado mensual en la tabla de pagos.
                                        </li>
                                        <li className="text-[#25466a] text-lg font-serif ">
                                            <span className="font-bold underline"> Enfermedades Graves: </span>Será cobrado según el producto y subproducto de crédito de forma mensual.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>
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