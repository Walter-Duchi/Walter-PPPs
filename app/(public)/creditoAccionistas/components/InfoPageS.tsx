
import { VscArrowRight } from "react-icons/vsc";
import { VscPerson } from "react-icons/vsc";
import { VscChecklist } from "react-icons/vsc";
import { VscTasklist } from "react-icons/vsc";
import { CiBank } from "react-icons/ci";

export const InfoPageS = () => {
    return(
        <div className="flex flex-col items-center justify-center w-[1000px] gap-8 mx-auto mt-4 mb-4">
            <h1 className="text-3xl text-[#25466a] font-serif font-extrabold">Requisitos y pasos a seguir para obtener un credito</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
                <div className="flex flex-col items-center justify-center w-[220px] h-[280px] p-4 gap-2 bg-[#25466a] rounded-lg text-white group"> {/* Accionistas */}
                    <div className="flex flex-col items-center justify-center">
                        <VscPerson size={50} className="group-hover:text-orange-500"/>
                        <h2 className="text-lg font-serif font-semibold">Accionista</h2>
                    </div>
                    <p className="font-serif">Ser accionista de la institucion financiera ANEUPI.</p>
                </div>
                <VscArrowRight className="text-2xl text-orange-500"/>
                <div className="flex flex-col items-center justify-center w-[220px] h-[280px] p-4 gap-2 bg-[#25466a] rounded-lg text-white group"> {/* Cumplir requisitos */}
                    <div className="flex flex-col items-center justify-center">
                        <VscChecklist size={50} className="group-hover:text-orange-500"/>
                        <h2 className="text-lg font-serif font-semibold">Cumplir requisitos</h2>
                    </div>
                    <ul>
                        <li className="font-serif"> - Llenar el formulario de los accionistas.</li>
                        <li className="font-serif"> - En 15 días hábiles se le hará llegar la aprobación de los ingresos.</li>
                    </ul>
                </div>
                <VscArrowRight className="text-2xl text-orange-500"/>
                <div className="flex flex-col items-center justify-center w-[220px] h-[280px] p-4 gap-2 bg-[#25466a] rounded-lg text-white group"> {/* Esperar Evaluación */}
                    <div className="flex flex-col items-center justify-center">
                        <VscTasklist size={50} className="group-hover:text-orange-500"/>
                        <h2 className="text-lg font-serif font-semibold">Esperar Evaluación</h2>
                    </div>
                    <p className="font-serif">Solicitar en la Asamblea el crédito y la comision aprobara de manera inmediata el crédito.</p>
                </div>
                <VscArrowRight className="text-2xl text-orange-500" />
                <div className="flex flex-col items-center justify-center w-[220px] h-[280px] p-4 gap-2 bg-[#25466a] rounded-lg text-white group"> {/* Desembolso */}
                    <div className="flex flex-col items-center justify-center">
                        <CiBank size={50} className="group-hover:text-orange-500"/>
                        <h2 className="text-lg font-serif font-semibold">Desembolso</h2>
                    </div>
                    <p className="font-serif">El dinero se acreditara <br /> a su cuenta bancaria.</p>
                </div>
            </div>
        </div>
    );
}