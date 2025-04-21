import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{ params }: { params: { id: string } }) {
  const userFinded = await prisma.users.findUnique({
    where: {
      id:parseInt(params.id),
    },
  });
  if(!userFinded) return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
  return NextResponse.json(userFinded);
}
