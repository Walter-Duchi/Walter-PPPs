export const NoticeSection = () => {
    return(
        <div className="w-full h-[500px] flex flex-col gap-4 border-b-8 border-[#25466a]"> {/*Contenedor de la sección de noticias*/}
            <div className="flex flex-col justify-center items-center"> {/*Contenedor de la noticia*/}
                <a href="/"> {/*Enlace para registrarse en el congreso*/}
                    <img 
                        src="/homeResources/CongresoInternacional.jpg" 
                        alt="Imagen de Congreso Intenacional" 
                    />
                </a>
            </div>
            <div className="flex justify-center items-center"> {/*Contenedor de boton*/}
                <a href="/"> {/*Enlace para registrarse en el congreso*/}
                    <button className="w-[150px] h-[50px] text-white font-serif font-semibold bg-orange-600 rounded-md hover:bg-[#25466a] shadow-xl">
                        Ver más
                    </button>
                </a>
            </div>
        </div>
    );
}