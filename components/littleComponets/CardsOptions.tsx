import { VscOrganization } from "react-icons/vsc";

export const CardsOptions = () => {
    return (
        <div className = "flex flex-col w-full h-500 gap-3">
            <div className = "flex flex-row gap-6"> {/*Contenedor de las tarjetas de info*/}
                <div className="w-1/4 h-1/4 bg-slate-50 border rounded-sm p-2 shadow-md transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl group"> {/*Tarjeta de info de creditos*/}

                    <h1 className="text-stone-900 font-serif font-extrabold text-xl p-2 transition-all duration-300 group-hover:text-white">Creditos</h1>
                    <div className="">
                        <p className="text-stone-800 font-serif p-3 transition-all duration-300 group-hover:text-white">Te damos el mejor <br /> credito del mercado.</p>
                        <a 
                            href="" //href de la pagina de creditos
                            className="text-stone-950 p-2 font-serif font-semibold underline relative transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-1 
                                      after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 
                                      hover:after:w-full">
                            Más información
                        </a>
                    </div>
                </div>
                <div className="w-1/4 h-1/4 bg-slate-50 border rounded-sm p-2 shadow-md transition-all duration-300 hover:bg-sky-900 hover:shadow-2xl group"> {/*Tarjeta de info de servicios en linea*/}
                    <h1 className="text-stone-900 font-serif font-extrabold text-xl p-2 transition-all duration-300 group-hover:text-white">Servicios en Línea</h1>
                    <div className="">
                        <p className="text-stone-800 p-3 font-serif transition-all duration-300 group-hover:text-white">Tenemos el mejor servicio <br />en linea del mercado.</p>
                        <a 
                            href="" //href de la pagina de servicios en linea
                            className="text-stone-950 p-2 font-serif font-semibold underline relative transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-1 
                                      after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 
                                      hover:after:w-full">
                            Más información
                        </a>
                    </div>
                </div>
                <div className="w-1/4 h-1/4 bg-slate-50 border rounded-sm p-2 shadow-md transition-all duration-300 hover:bg-sky-600 hover:shadow-2xl group"> {/*Tarjeta de info de Empleos y vacantes*/}
                    <h1 className="text-stone-900 font-serif font-extrabold text-xl p-2 transition-all group-hover:text-white">Empleos o vacantes</h1>
                    <div className="">
                        <p className="text-stone-800 font-serif p-3 transition-all group-hover:text-white">Forma parte de la mejor <br /> Cooperativa Financiera.</p>
                        <a 
                            href="" //href de la pagina de servicios en linea
                            className="text-stone-950 p-2 font-serif font-semibold underline relative transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-1 
                                      after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 
                                      hover:after:w-full">
                            Más información
                        </a>
                    </div>
                </div>
                <div className="w-1/4 h-1/4 bg-slate-50 border rounded-sm p-2 shadow-md transition-all duration-300 hover:bg-sky-900 hover:shadow-2xl group"> {/*Tarjeta de info de Accionistas*/}
                    <VscOrganization className="w-10 h-10 group-hover:text-white"/>
                    <h1 className="text-stone-900 font-serif font-extrabold text-xl p-2 transition-all group-hover:text-white">Accionistas</h1>
                    <div className="">
                        <p className="text-stone-800 font-serif p-3 transition-all group-hover:text-white">Se accionista con nosotros <br /> y ten beneficios.</p>
                        <a 
                            href="" //href de la pagina de servicios en linea
                            className="text-stone-950 p-2 font-serif font-semibold underline relative transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-1 
                                      after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 
                                      hover:after:w-full">
                            Más información
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}