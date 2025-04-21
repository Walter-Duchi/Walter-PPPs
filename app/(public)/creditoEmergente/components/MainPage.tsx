"use client";

import { useState, useEffect } from "react";
  

export const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [montoInput, setMontoInput] = useState<string>(""); // <-- texto para el input
    const [monto, setMonto] = useState<number>(); // <-- valor limpio para calculos
    const [plazo, setPlazo] = useState<number | null>(null);
    const [interesAnual] = useState<number>(8.0);
    const [cuota, setCuota] = useState<number | null>(null);
    const [metodo, setMetodo] = useState<"frances" | "aleman">("frances");
    const [detalle, setDetalle] = useState({
        capital: 0, 
        interes: 0,
        seguro: 0,
        total: 0,
    });

    const calcularCredito = () => {
        if(!monto || !plazo) return;

        const tasaMensual = interesAnual / 12 / 100;
        let cuotaMensual = 0;
        let totalInteres = 0;
        let seguro = monto * 0.002 * plazo;
        let total = 0;

        if (metodo === "frances"){
            cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, -plazo));
            totalInteres = cuotaMensual * plazo - monto;
            total = cuotaMensual * plazo + seguro;
        } else if ( metodo === "aleman"){
            const amortizacion = monto / plazo;
            let saldo = monto;

            for (let i = 0; i < plazo; i++){
                const interesMes = saldo * tasaMensual;
                totalInteres += interesMes;
                saldo -= amortizacion;
            }

            cuotaMensual = amortizacion + (monto * tasaMensual);
            total = monto + totalInteres + seguro;
        }

        setCuota(cuotaMensual);
        setDetalle({
            capital: monto,
            interes: totalInteres,
            seguro,
            total,
        });
    };

    return(
        <div className="flex flex-col w-[1000px] gap-8 items-center justify-center my-14"> {/* contenedor principal */}
            <div className="flex w-[1000px] h-[10px] bg-[#25466a] rounded-full"/>
            <h2 className="text-4xl text-[#25466a] font-bold">Calcule la cuota del tipo de crédito al que te gustaría acceder: </h2>
            {/* Simulador */}
            <div className="flex flex-col w-[970px] bg-white text-[#25466a] p-8 rounded-3xl shadow-2xl gap-3 mx-auto">
                <div className="flex flex-col">
                    <h2 className="text-5xl font-bold">
                        Simulador Crédito
                    </h2>
                </div>
                <div className="flex flex-row w-[900px] gap-4">
                    {/* contenedor del formulario */}
                    <div className="flex flex-col w-[450px] px-12 py-8 gap-3">
                        {/* Pregunta 1 */}
                        <div className="flex flex-col w-[500px] gap-2">
                            <h3 className="text-lg text-[#25466a] font-serif">¿Cuánto dinero necesitas que te prestamos?</h3>
                            <div>
                                <input 
                                    type="text"
                                    id="monto"
                                    placeholder="Ej. $1000"
                                    value ={montoInput}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;

                                        // Limpiar caracteres no númericos
                                        const soloNumeros = inputValue.replace(/\D/g, "")

                                        // Eliminar ceros a la izquierda
                                        const limpio = soloNumeros.replace(/^0+/, "");

                                        setMontoInput(limpio);
                                        setMonto(limpio === "" ? 0 : parseInt(limpio, 10));
                                    }}
                                    className="w-[325px] h-[50px] p-3 border-1 border-[#25466a] rounded-lg font-serif outline-none" 
                                />
                                <p className="text-sm text-slate-500 font-serif ml-2">Max. $2000,00</p>
                            </div>
                        </div>
                        {/* Pregunta 2 */}
                        <div className="flex flex-col w-[500px] gap-2">
                            <h3 className="text-lg text-[#25466a] font-serif">¿En cuanto tiempo quieres pagarlo?</h3>
                            <div className="relative inline-block text-left">
                                <button 
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="inline-flex w-[325px] h-[50px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 items-center justify-center"
                                >
                                    {plazo ? `${plazo} meses` : "Selecciona tu plazo"}
                                </button>
                                
                                {/* opciones del boton desplegable */}
                                {isOpen && (
                                    <div className="absolute mt-2 w-[325px] max-h-[200px] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div className="flex flex-col">
                                            {[...Array(10)].map((_, i) => {
                                                const val = (i + 3) * 1;
                                                return (
                                                    <button
                                                        key={val}
                                                        onClick={() => {
                                                            setPlazo(val);
                                                            setIsOpen(false);
                                                        }}
                                                        className="block w-full text-left px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {val} meses
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Pregunta 3 */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg text-[#25466a] font-serif">¿Como quieres pagar tus intereses?</h3>
                            {/* contenedor de metodos */}
                            <div className="flex flex-row gap-2">
                                <button 
                                    onClick={() => setMetodo("frances")}
                                    className={`w-[80] h-[80] p-2 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 
                                                ${metodo === "frances" ? "border-[#25466a] bg-[#f0f4f8]" : "border-gray-300"}`}>
                                    <div className="flex flex-col gap-2 text-left">
                                        <h3 className="text-medium text-[#25466a] font-serif">Método Frances</h3>
                                        <p className="text-medium text-[#25466a] font-serif">Cuotas se <br /> mantienen fijas en <br /> el tiempo</p>
                                    </div>
                                </button>
                                <button 
                                     onClick={() => setMetodo("aleman")}
                                     className={`w-[80] h-[80] p-2 px-5 border rounded-lg hover:bg-gray-50 ${
                                       metodo === "aleman" ? "border-[#25466a] bg-[#f0f4f8]" : "border-gray-300"
                                     }`}
                                >
                                    <div className="flex flex-col gap-2 text-left">
                                        <h3 className="text-medium text-[#25466a] font-serif">Método Aleman</h3>
                                        <p className="text-medium text-[#25466a] font-serif">Cuotas variables <br /> que decrecen en <br /> el tiempo</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        {/* boton simular */}
                        <div className="flex">
                            <button 
                                onClick={calcularCredito}
                                className="w-[320px] h-[50px] text-medium text-[#25466a] font-bold font-serif hover:text-gray-300
                                 bg-white border border-gray-300 rounded-lg hover:bg-[#25466a] shadow-lg"
                            >
                                Simular
                            </button>
                        </div>
                    </div>
                    {/* contenedor de resultados */}
                    <div className="h-[500px] border-2 border-[#25466a] " />
                    <div className="flex flex-col w-[600px] h-[500px] gap-4 py-4 items-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="text-md text-[#25466a] font-serif font-bold">Tus pagos mensuales serán</h3>
                            <div className="flex flex-row items-center justify-center gap-5">
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-md text-[#25466a] font-serif">${detalle.capital ? (detalle.capital / (plazo ?? 1)).toFixed(2) : '0.00'}</p>
                                    <p className="text-md text-[#25466a] font-serif">Capital</p>
                                </div>
                                <p className="text-md text-[#25466a]">+</p>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-md text-[#25466a] font-serif">${detalle.interes ? (detalle.interes / (plazo ?? 1)).toFixed(2) : '0.00'}</p>
                                    <p className="text-md text-[#25466a] font-serif">Interés</p>
                                </div>
                                <p className="text-md text-[#25466a]">+</p>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-md text-[#25466a] font-serif">${detalle.seguro ? (detalle.seguro / (plazo ?? 1)).toFixed(2) : '0.00'}</p>
                                    <p className="text-md text-[#25466a] font-serif">Seguro</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] border border-gray-300" />
                        <div className="flex flex-col gap-2 items-center justify-center py-7">
                            <h2 className="text-5xl text-[#25466a] font-semibold">${cuota ? cuota.toFixed(2) : '0.00'}</h2>
                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-medium text-[#25466a] font-serif">Durante {plazo} meses ({(plazo ?? 0) / 12} años)</h3>
                                <p className="text-medium text-[#25466a] font-serif">Con una tasa de interés del {interesAnual}%</p>
                            </div>
                        </div>

                        <div className="w-[300px] border border-gray-300" />

                        {/* contenedor de detalle de crédito */}
                        <div className="flex flex-col w-[300px] items-center justify-center gap-2">
                            <h2 className="text-lg text-[#25466a] font-serif font-bold">Detalle de tu crédito</h2>
                            <div className="flex flex-row w-full items-center justify-between">
                                <p className="text-[15px] text-[#25466a] font-serif">Capital</p>
                                <p className="text-[15px] text-[#25466a] font-serif">${detalle.capital.toFixed(2)}</p>
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <p className="text-[15px] text-[#25466a] font-serif">Total de interés:</p>
                                <p className="text-[15px] text-[#25466a] font-serif">${detalle.interes.toFixed(2)}</p>
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <p className="text-[15px] text-[#25466a] font-serif">Total seguro de desgravamen:</p>
                                <p className="text-[15px] text-[#25466a] font-serif">${detalle.seguro.toFixed(2)}</p>
                            </div>
                            <div className="flex w-full flex-row items-center justify-between">
                                <p className="text-[15px] text-[#25466a] font-serif">Total a pagar:</p>
                                <p className="text-[15px] text-[#25466a] font-serif">${detalle.total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}