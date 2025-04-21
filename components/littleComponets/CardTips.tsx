import { div } from "framer-motion/client";

export const CardTips = () => {
    return (
        <div className="justify-center flex flex-col items-center gap-1 shadow-2xl p-5 rounded-2xl border-3 border-sky-900">
            <h1 className="font-bold font-serif text-3xl p-5 text-sky-950">Tips de Ahorro</h1>
            <div className="w-full flex flex-row items-center gap-5">
                <div className="w-full flex flex-row items-center gap-5 p-3">
                    <div className="w-80 bg-sky-900 flex flex-row gap-4 p-4 rounded-md"> {/*Tip 1*/}
                        <img 
                            src="/homeResources/objetivoAhorro.jpg" //src de la imagen del tip 1
                            alt="Imagen Tip 1" 
                            width={150} height={120}
                            className="rounded-md bg-slate-50"
                        />
                        <div className="flex flex-col gap-4 justify-center">
                            <h2 className="text-xl font-bold text-white">Tip #1</h2>
                            <p className="text-medium font-serif text-white">Fijar un objetivo de ahorro <br /> y definir cuánto <br /> y cuando ahorrar.</p>
                        </div>
                    </div>
                    <div className="w-80 bg-sky-900 flex flex-row gap-4 p-4 rounded-md"> {/*Tip 2*/}
                        <img 
                            src="/homeResources/reducirGastos.jpg" //src de la imagen del tip 2
                            alt="Imagen Tip 2" 
                            width={160} height={120}
                            className="rounded-md bg-slate-50"
                        />
                        <div className="flex flex-col gap-4 justify-center">
                            <h2 className="text-xl font-bold text-white">Tip #2</h2>
                            <p className="text-medium font-serif text-white">Reducir gastos innecesarios <br /> y evitar compras impulsivas.</p>
                        </div>
                    </div>
                    <div className="w-96 bg-sky-900 flex flex-row gap-4 p-4 rounded-md"> {/*Tip 3*/}
                        <img 
                            src="/homeResources/automatizaAhorro.png" //src de la imagen del tip 3
                        alt="Imagen Tip 3" 
                        width={160} height={170}
                        className="rounded-md bg-slate-50"
                        />
                        <div className="flex flex-col gap-4 justify-center">
                            <h2 className="text-xl font-bold text-white">Tip #3</h2>
                            <p className="text-medium font-serif text-white">Automatizar el <br /> ahorro con los <br /> servicios de tu <span className="font-bold">cooperativa financiera Aneupi</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}