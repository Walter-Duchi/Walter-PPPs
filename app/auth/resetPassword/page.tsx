"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [carnetCode, setCarnetCode] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  // Validación simplificada del correo
  const validateEmail = (email: string) => {
    return email.includes("@") && email.includes(".com");
  };

  const validateCarnetCode = (code: string) => {
    return code.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Debe ingresar un correo válido.");
      return;
    }

    if (!validateCarnetCode(carnetCode)) {
      setError("Debe ingresar un código de carnet válido.");
      return;
    }

    setTimeout(() => {
      setEmailSent(true);
    }, 2000);
  };

  const isFormValid = validateEmail(email) && validateCarnetCode(carnetCode);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#25466A] to-[#1E3A56] p-6">
      {!emailSent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/20 backdrop-blur-lg shadow-2xl p-10 rounded-3xl max-w-lg w-full border border-white/30"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="text-white text-sm text-center mb-6">
            Ingresa tu correo institucional y el código del carnet para recibir
            una nueva contraseña temporal.
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              startContent={<MdMail className="text-[rgb(37,70,106)]" />}
              label="Correo Institucional"
              placeholder="tucorreo@bancoaneupi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black placeholder-gray-500 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#F3B61F]"
            />
            <Input
              label="Código del Carnet"
              placeholder="Código de 10 caracteres"
              value={carnetCode}
              onChange={(e) => setCarnetCode(e.target.value)}
              className="bg-white text-black placeholder-gray-500 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#F3B61F]"
            />
            <Button
              type="submit"
              disabled={!isFormValid} // Deshabilitar el botón si el formulario no es válido
              className={`${
                isFormValid
                  ? "bg-[rgb(37,70,106)] hover:bg-[rgb(30,60,90)]"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 focus:ring-4 focus:ring-[rgb(37,70,106)]/50`}
            >
              Enviar correo de recuperación
            </Button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/20 backdrop-blur-lg shadow-2xl p-10 rounded-3xl max-w-lg w-full border border-white/30 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto"
          >
            ✅
          </motion.div>
          <h2 className="text-2xl font-bold text-white mt-4">
            ¡Correo enviado!
          </h2>
          <p className="text-white text-sm mt-2">
            Revisa tu bandeja de entrada para obtener la nueva contraseña
            temporal.
          </p>
        </motion.div>
      )}
    </div>
  );
}
