"use client";
import { useState } from "react";
import { createUser } from "@/components/actions/createUser";
import { InputPasword } from "@/components/littleComponets/InputPasword";
import { Button, Input } from "@nextui-org/react";
import { HiOutlineIdentification, HiOutlineUser } from "react-icons/hi";
import {
  MdMail,
  MdPhone,
  MdFingerprint,
  MdCreditCard,
  MdLock,
} from "react-icons/md";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";

interface FormValues {
  name: string;
  lastname: string;
  cedula: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  fingerprintCode: string;
  accountNumber: string;
  ultimosDigitosCarnet: string;
}

export default function Page() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

  const validate = (formData: FormValues): boolean => {
    let newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (
      !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,50}(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,50})*$/.test(
        formData.name
      )
    ) {
      newErrors.name =
        "El nombre debe contener solo letras y espacios. Longitud mínima de 2 caracteres y máxima de 50.";
    }

    if (
      !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,50}(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,50})*$/.test(
        formData.lastname
      )
    ) {
      newErrors.lastname =
        "Los apellidos deben contener solo letras y espacios. Longitud mínima de 2 caracteres y máxima de 50.";
    }

    if (!/^[0-9]{10}$/.test(formData.cedula)) {
      newErrors.cedula =
        "La cédula debe tener exactamente 10 dígitos numéricos.";
    } else {
      // Valida si la cédula tiene un formato correcto para Ecuador (ejemplo: primer dígito no puede ser mayor que 6)
      const firstDigit = parseInt(formData.cedula.charAt(0), 10);
      if (firstDigit > 6 || firstDigit === 0) {
        newErrors.cedula =
          "La cédula no es válida. El primer dígito debe estar entre 1 y 6.";
      }
    }

    if (!/^[\w.-]+@institucional\.edu(\.ec)?$/.test(formData.email)) {
      newErrors.email =
        "Correo inválido. Debe ser institucional (@institucional.edu.ec).";
    }

    if (
      !/^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>]).{10,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "La contraseña debe tener 10 caracteres, 2 mayúsculas, 2 minúsculas, 3 números y 2 caracteres especiales.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    } else if (
      !/^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>]).{10,}$/.test(
        formData.password
      )
    ) {
      newErrors.confirmPassword =
        "La confirmación de contraseña no cumple con los requisitos.";
    }

    if (!/^[0-9]{16}$/.test(formData.accountNumber)) {
      newErrors.accountNumber =
        "El número de cuenta debe tener exactamente 16 dígitos numéricos.";
    }

    const birthDate = new Date(formData.birthDate);
    const today = new Date();
    if (birthDate > today) {
      newErrors.birthDate = "La fecha de nacimiento no puede ser en el futuro.";
    } else if (today.getFullYear() - birthDate.getFullYear() < 18) {
      newErrors.birthDate = "Debes ser mayor de 18 años para registrarte.";
    }

    if (!/^[a-zA-Z0-9]{6,12}$/.test(formData.fingerprintCode)) {
      newErrors.fingerprintCode =
        "El código dactilar debe tener entre 6 y 12 caracteres alfanuméricos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formDataEntries = Object.fromEntries(new FormData(target).entries());
    const formData: FormValues = {
      name: String(formDataEntries.name),
      lastname: String(formDataEntries.lastname),
      cedula: String(formDataEntries.cedula),
      email: String(formDataEntries.email),
      password: String(formDataEntries.password),
      confirmPassword: String(formDataEntries.confirmPassword),
      birthDate: String(formDataEntries.birthDate),
      fingerprintCode: String(formDataEntries.fingerprintCode),
      accountNumber: String(formDataEntries.accountNumber),
      ultimosDigitosCarnet: String(formDataEntries.ultimosDigitosCarnet),
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl p-10 rounded-xl max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-1">Crea tu cuenta</h2>
        <p className="text-center mb-3">Solo Accionistas</p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Input
            label="Nombre"
            name="name"
            startContent={<HiOutlineUser className="text-xl text-gray-500" />}
          />
          <Input
            label="Apellidos"
            name="lastname"
            startContent={<HiOutlineUser className="text-xl text-gray-500" />}
          />
          <Input
            label="Correo Institucional"
            name="email"
            startContent={<MdMail className="text-xl text-gray-500" />}
          />
          <Input
            label="Cédula"
            name="cedula"
            type="number"
            startContent={
              <HiOutlineIdentification className="text-xl text-gray-500" />
            }
          />
          <Input
            label="Fecha de Nacimiento"
            name="birthDate"
            type="date"
            startContent={<FaCalendarAlt className="text-xl text-gray-500" />}
          />
          <Input
            label="Código Dactilar"
            name="fingerprintCode"
            startContent={<MdFingerprint className="text-xl text-gray-500" />}
          />
          <Input
            label="Número de Cuenta Bancaria"
            name="accountNumber"
            type="number"
            startContent={<MdCreditCard className="text-xl text-gray-500" />}
          />
          <Input
            label="Ultimos 4 dígitos de su carnet"
            name="ultimosDigitosCarnet"
            type="number"
            startContent={<FaBuilding className="text-xl text-gray-500" />}
          />
          <InputPasword
            label="Contraseña"
            name="password"
            startContent={<MdLock className="text-xl text-gray-500" />}
          />
          <InputPasword
            label="Confirmar Contraseña"
            name="confirmPassword"
            startContent={<MdLock className="text-xl text-gray-500" />}
          />

          <div className="col-span-1 md:col-span-2">
            <Button
              fullWidth
              type="submit"
              className="bg-blue-600 text-white rounded-xl"
            >
              Registrarse
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
