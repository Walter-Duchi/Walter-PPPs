"use client";

import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ChangePasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Validar la longitud de la nueva contraseña (puedes ajustar esta validación según tus necesidades)
    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setTimeout(() => {
      setPasswordChanged(true);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#25466A] to-[#1E3A56] p-6">
      {!passwordChanged ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/20 backdrop-blur-lg shadow-2xl p-10 rounded-3xl max-w-lg w-full border border-white/30"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Modificar Contraseña
          </h2>
          <p className="text-white text-sm text-center mb-6">
            Ingresa tu nueva contraseña y confírmala.
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Nueva Contraseña"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-white text-black placeholder-gray-500 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#F3B61F]"
            />
            <Input
              label="Confirmar Nueva Contraseña"
              type="password"
              placeholder="Confirma tu nueva contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white text-black placeholder-gray-500 border border-white/50 rounded-xl focus:ring-2 focus:ring-[#F3B61F]"
            />
            <Button
              type="submit"
              className="bg-[rgb(37,70,106)] hover:bg-[rgb(30,60,90)] text-white font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-105 focus:ring-4 focus:ring-[rgb(37,70,106)]/50"
            >
              Cambiar Contraseña
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
            ¡Contraseña cambiada con éxito!
          </h2>
          <p className="text-white text-sm mt-2">
            Ahora puedes acceder con tu nueva contraseña.
          </p>
        </motion.div>
      )}
    </div>
  );
}
