import { z } from "zod";

export function processZodError(error: any) {
  if (!error || !error.errors) return {};

  return error.errors.reduce((acc: any, err: any) => {
    if (err.path && err.path.length > 0) {
      acc[err.path[0]] = err.message;
    }
    return acc;
  }, {});
}

export const userSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  phone: z.string().min(10),
});

export const loginSchema = z.object({
  id: z.coerce.number({
    required_error: "El número de cédula es requerido",
    invalid_type_error: "El número de cédula es inválido",
  }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña es inválida",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    }),
});

const imageFileTypes = ["image/jpeg", "image/png", "image/gif"];

export const reviewSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre es requerido",
    })
    .max(50, {
      message: "El nombre debe tener menos de 50 caracteres",
    }),
  email: z.string().email({
    message: "El email es requerido",
  }),
  review: z
    .string()
    .min(10, {
      message: "La reseña es requerida",
    })
    .max(250, {
      message: "La reseña debe tener menos de 250 caracteres",
    }),
  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Debe ser un archivo",
    })
    .refine((file) => imageFileTypes.includes(file.type), {
      message: "El archivo debe ser una imagen (JPEG, PNG o GIF)",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "El archivo debe ser menor a 5MB",
    }),
});
