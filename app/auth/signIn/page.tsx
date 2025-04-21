/*
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdMail } from "react-icons/md";
import { useEffect, useState } from "react";

function SignInPageContent() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors: { email?: string; password?: string; general?: string } = {};
    if (!formData.email.trim())
      newErrors.email = "El correo electrónico es obligatorio.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Usted no es accionista.";
    if (!formData.password.trim())
      newErrors.password = "La contraseña no es valido.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await signIn("credentials", {
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      setErrors({ general: "Credenciales incorrectas." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/9edfb0_631e5371c2ab4bd2a3da4b2167fb6512~mv2.png/v1/fill/w_1280,h_584,al_c,q_90,enc_avif,quality_auto/9edfb0_631e5371c2ab4bd2a3da4b2167fb6512~mv2.png')",
      }}
    >
      <section
        className="flex flex-col gap-6 max-w-md w-full mx-auto p-8 rounded-2xl shadow-2xl text-white bg-opacity-95 border border-gray-500 backdrop-blur-md"
        style={{ backgroundColor: "rgb(37, 70, 106)" }}
      >
        <h2 className="font-bold text-3xl text-center tracking-wide">
          Bienvenido a <br />
          Banco ANEUPI
        </h2>
        <p className="text-neutral-300 text-center text-sm">
          Ingrese sus credenciales para acceder a su cuenta.
        </p>

        {errors.general && (
          <p className="text-red-500 text-center font-medium">
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <fieldset className="flex flex-col gap-0.1">
            <label className="text-sm font-medium">Correo Electrónico</label>
            <Input
              startContent={<MdMail className="text-gray-400" />}
              name="email"
              placeholder="Ejemplo: usuario.bancoaneupi@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg w-full text-white bg-gray-100 mt-3"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <InputPasword
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg w-full text-white bg-gray-100 mt-3"
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password}</p>
            )}
            <Link
              href="/auth/resetPassword"
              className="text-blue-300 text-xs mt-1 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </fieldset>

          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 transition-all duration-300 ease-in-out shadow-md"
            isDisabled={loading}
          >
            {loading ? "Ingresando..." : "Iniciar Sesión"}
          </Button>

          <p className="text-sm text-center">
            ¿No tienes una cuenta?{" "}
            <Link
              className="text-blue-300 font-semibold hover:underline"
              href="/auth/signUp"
            >
              Regístrate aquí
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default function SignInPage() {
  return (
    <SessionProvider>
      <SignInPageContent />
    </SessionProvider>
  );
}

*/

"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdMail } from "react-icons/md";
import { useState } from "react";

function SignInPageContent() {
  const router = useRouter();

  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Redirigir directamente a la página de inicio que migramos
    router.push("/inicio");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/9edfb0_631e5371c2ab4bd2a3da4b2167fb6512~mv2.png/v1/fill/w_1280,h_584,al_c,q_90,enc_avif,quality_auto/9edfb0_631e5371c2ab4bd2a3da4b2167fb6512~mv2.png')",
      }}
    >
      <section
        className="flex flex-col gap-6 max-w-md w-full mx-auto p-8 rounded-2xl shadow-2xl text-white bg-opacity-95 border border-gray-500 backdrop-blur-md"
        style={{ backgroundColor: "rgb(37, 70, 106)" }}
      >
        <h2 className="font-bold text-3xl text-center tracking-wide">
          Bienvenido a <br />
          Banco ANEUPI
        </h2>
        <p className="text-neutral-300 text-center text-sm">
          Ingrese sus credenciales para acceder a su cuenta.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <fieldset className="flex flex-col gap-0.1">
            <label className="text-sm font-medium">Correo Electrónico</label>
            <Input
              startContent={<MdMail className="text-gray-400" />}
              name="email"
              placeholder="Ejemplo: usuario.bancoaneupi@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg w-full text-white bg-gray-100 mt-3"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg w-full text-white bg-gray-100 mt-3"
            />
            <Link
              href="/auth/resetPassword"
              className="text-blue-300 text-xs mt-1 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </fieldset>

          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 transition-all duration-300 ease-in-out shadow-md"
          >
            Iniciar Sesión
          </Button>

          <p className="text-sm text-center">
            ¿No tienes una cuenta?{" "}
            <Link
              className="text-blue-300 font-semibold hover:underline"
              href="/auth/signUp"
            >
              Regístrate aquí
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}

export default function SignInPage() {
  return <SignInPageContent />;
}
