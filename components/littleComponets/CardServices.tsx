export const CardServices = () => {
    return(
        <div className="flex justify-center items-center gap-8 w-full"> {/*Contenedor de las tarjetas de servicios*/}
            {/*Tarjeta de creditos*/}
            <div className="flex flex-col w-60 h-[250px] gap-3 p-2 bg-[#25466a] rounded-lg items-center justify-center shadow-lg"> 
                <h1 className="text-2xl font-semibold font-serif text-white">Créditos</h1>
                <img 
                    src="/Logos/DollarSymbol.gif" 
                    alt="logoCreditos"
                    width={90} 
                    height={90}
                    className="bg-slate-400 rounded-md"
                />
                <a href="/"> {/*link a pagina de creditos*/}
                    <button className="text-md text-black font-serif bg-gray-300 p-2 rounded-md hover:bg-[#F5A524] hover:shadow-md group">
                        <p className="group-hover:text-white">Ver más</p>
                    </button>
                </a>
            </div>
            {/*Tarjeta de empleos*/}
            <div className="flex flex-col w-60 h-[250px] gap-3 p-2 bg-[#25466a] rounded-lg items-center justify-center shadow-lg">
                <h1 className="text-2xl font-semibold font-serif text-white">Empleos</h1>
                <img 
                    src="/Logos/Empleo.gif" 
                    alt="logoEmpleos"
                    width={90} 
                    height={90}
                    className="bg-slate-400 rounded-md"
                />
                <a href="/"> {/*link a pagina de empleos*/}
                    <button className="text-md text-black font-serif bg-gray-300 p-2 rounded-md hover:bg-[#F5A524] hover:shadow-md group">
                        <p className="group-hover:text-white">Ver más</p>
                    </button>
                </a>
            </div>
            {/*Tarjeta de agencias y cajeros*/}
            <div className="flex flex-col w-60 h-[250px] gap-3 p-2 bg-[#25466a] rounded-lg items-center justify-center shadow-lg">
                <h1 className="text-2xl font-semibold font-serif text-white">Agencias y Cajeros</h1>
                <img 
                    src="/Logos/Cajero.gif" 
                    alt="logoAgenciasCajeros"
                    width={90} 
                    height={90}
                    className="bg-slate-400 rounded-md"
                />
                <a href="/"> {/*link a pagina de agencias y cajeros*/}
                    <button className="text-md text-black font-serif bg-gray-300 p-2 rounded-md hover:bg-[#F5A524] hover:shadow-md group">
                        <p className="group-hover:text-white">Ver más</p>
                    </button>
                </a>
            </div>
            {/*Tarjeta de inversiones*/}
            <div className="flex flex-col w-60 h-[250px] gap-3 p-2 bg-[#25466a] rounded-lg items-center justify-center shadow-lg">
                <h1 className="text-2xl font-semibold font-serif text-white">Inversiones</h1>
                <img 
                    src="/Logos/Inversión.gif" 
                    alt="logoInversiones"
                    width={90} 
                    height={90}
                    className="bg-slate-400 rounded-md"
                />
                <a href="/"> {/*link a pagina de inversiones*/}
                    <button className="text-md text-black font-serif bg-gray-300 p-2 rounded-md hover:bg-[#F5A524] hover:shadow-md group">
                        <p className="group-hover:text-white">Ver más</p>
                    </button>
                </a>
            </div>
        </div>
    );
}