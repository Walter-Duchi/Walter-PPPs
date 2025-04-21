import prisma from "@/lib/prisma";
import { loginSchema, processZodError } from "@/lib/zodValidations";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const validatedData = loginSchema.parse(data);
    const userFinded = await prisma.users.findUnique({
      where: {
        id: validatedData.id,
      },
    });
    if (!userFinded)
      return NextResponse.json(
        { message: "Usuario no encontrado" },
        { status: 404 }
      );

    const isMatched = userFinded.password === validatedData.password;

    if (!isMatched)
      return NextResponse.json(
        { message: "El usuario o la contraseña están incorrectos" },
        { status: 401 }
      );

    return NextResponse.json({
      id: userFinded.id,
      name: userFinded.name,
      email: userFinded.email,
      phone: userFinded.phone,
    });
  } catch (error) {
    const errors = processZodError(error);
    return NextResponse.json(
      { message: "Error al iniciar sesión", error: errors },
      { status: 500 }
    );
  }
}
