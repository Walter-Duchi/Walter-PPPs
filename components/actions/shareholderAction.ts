"use server";
import { ci } from "ecuador-validator";
export async function getShareholder(prevState: any, formData: FormData) {
  const cedula = formData.get("cedula") as string;
  if(!ci(cedula)) return { message: "Por favor, ingrese un número de cédula válido" }
  const res = await fetch(`${process.env.PUBLIC_URL}/api/shareholder/${cedula}`);
  const user = await res.json()
  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }


  return { message: "Usuario encontrado",user };
}
