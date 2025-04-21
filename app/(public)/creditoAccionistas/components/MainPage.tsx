"use client";

import { useState } from "react";

export const MainPage = () => {

    const tiposCredito = {
        "Crédito Francés": {
            descripcion:
            "Cuotas constantes durante todo el plazo. Al inicio se paga más interés y menos capital, pero con el tiempo se invierte.",
                calcularCuota: (monto: number, plazo: number, tasa: number) => {
                    const i = tasa / 12;
                    const cuota = (monto * i) / (1 - Math.pow(1 + i, -plazo));
                    return cuota;
                },
        },
        "Crédito Alemán": {
            descripcion:
                "Cuotas decrecientes. Se paga la misma cantidad de capital cada mes, y los intereses se calculan sobre el saldo pendiente (la cuota inicial es la mayor).",
                calcularCuota: (monto: number, plazo: number, tasa: number) => {
                    const i = tasa / 12;
                    // Se retorna la cuota del primer mes, que es la mayor
                    const cuotaPrimerMes = monto / plazo + monto * i;
                    return cuotaPrimerMes;
                },
        },
        "Crédito Americano": {
                descripcion:
                "Se pagan solo intereses mensuales y el capital se paga al final del plazo.",
                    calcularCuota: (monto: number, plazo: number, tasa: number) => {
                    const i = tasa / 12;
                    return monto * i; // Interés mensual fijo
                    },
        },
        "Crédito Bullet": {
                descripcion:
                "No se pagan cuotas mensuales, solo se abona el capital y los intereses completos al final del plazo.",
                    calcularCuota: (monto: number, plazo: number, tasa: number) => {
                        const i = tasa / 12;
                        const interesTotal = monto * i * plazo;
                        const pagoTotal = monto + interesTotal;
                        return pagoTotal;
                    },
        },
        "Crédito Lineal": {
                descripcion:
                "Cuotas fijas que combinan una amortización constante con intereses calculados sobre el saldo inicial (la cuota inicial es la más alta y disminuye con el tiempo).",
                    calcularCuota: (monto: number, plazo: number, tasa: number) => {
                        const i = tasa / 12;
                        // Retornamos la cuota del primer mes, la cual es la máxima
                        const cuotaPrimerMes = monto / plazo + monto * i;
                        return cuotaPrimerMes;
                    },
        },
    };
    
    const [monto, setMonto] = useState(10000);
    const [plazo, setPlazo] = useState(24);
    const [tipo, setTipo] = useState<keyof typeof tiposCredito>("Crédito Francés");
    
    const tasaAnual = 0.08;
    const tasaMensual = tasaAnual / 12;
    const credito = tiposCredito[tipo];
    const cuota = credito.calcularCuota(monto, plazo, tasaMensual);

    return(
        <div className="flex flex-col w-full gap-8 items-center justify-center my-14"> {/* contenedor principal */}
            <div className="flex flex-col text-left">
                <h1 className="text-6xl text-[#25466a] font-serif font-bold">Simulador de crédito</h1>
                <div className="flex w-[1000px] h-[10px] bg-[#25466a] rounded-full"/>
            </div>
            <h2 className="text-4xl text-[#25466a] font-bold">Calcula la cuota del tipo de crédito al que te gustaría acceder</h2>
            {/* Simulador */}
            <div className="flex flex-row w-[970px] bg-white text-[#25466a] p-8 rounded-3xl shadow-2xl gap-10">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        Crédito
                    </h2>
                    <label className="block mb-4">
                        ¿Cuánto dinero necesitas?
                        <input
                            type="range"
                            min="500"
                            max="15000"
                            step="100"
                            value={monto}
                            onChange={(e) => setMonto(parseInt(e.target.value))}
                            className="w-full mt-2"
                        />
                        <p className="text-right">$ {monto}</p>
                    </label>
                    <label className="block mb-4">
                        ¿A qué tiempo deseas financiarlo?
                        <input
                            type="range"
                            min="3"
                            max="60"
                            step="1"
                            value={plazo}
                            onChange={(e) => setPlazo(parseInt(e.target.value))}
                            className="w-full mt-2"
                        />
                        <p className="text-right">{plazo} meses</p>
                    </label>
                    <label className="block mb-6">
                        Seleccione el tipo de crédito:
                        <select
                            className="w-full mt-2 p-2 rounded-lg bg-[#25466a] text-white"
                            value={tipo}
                            onChange={(e) =>
                                setTipo(e.target.value as keyof typeof tiposCredito)
                            }
                        >
                            {Object.keys(tiposCredito).map((tipoNombre, i) => (
                            <option key={i} value={tipoNombre}>
                                {tipoNombre}
                            </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="flex flex-col text-center text-xl px-6 items-center justify-center border-1 border-[#25466a] rounded-3xl shadow-2xl w-[465px] h-[350px]">
                    {tipo === "Crédito Bullet" ? (
                    <>
                        <p className="font-bold">Pago Total al Final</p>
                        <p className="text-3xl mt-2 text-green-700">
                            $ {cuota.toFixed(2)}
                        </p>
                    </>
                        ) : (
                    <>
                        <p className="text-3xl font-bold">Cuota Mensual Aproximada</p>
                        <p className="text-3xl mt-2 text-green-700">
                            $ {cuota.toFixed(2)}
                        </p>
                    </>
                        )}
                        <p className="text-3xl mt-1">Tasa de interés anual: 8%</p>
                        <p className="text-sm italic text-gray-500">
                            * No incluye valores de seguros.
                        </p>
                </div>
            </div>
            <div className="flex w-[1000px] h-[10px] bg-[#25466a] rounded-full"/>
        </div>
    );
}