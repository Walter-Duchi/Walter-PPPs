import prisma from "@/lib/prisma";
import { userSchema } from "@/lib/zodValidations";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.users.findMany();
  console.log(users);
  return NextResponse.json({ message: "Usuarios:",data:users });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
  
    const {
      id,
      name,
      email,
      phone,
      password,
    } = userSchema.parse(data);
    console.log(data);
    const newUser = await prisma.users.create({
      data: {
        id,
        name,
        email,
        phone,
        password
      },
    });
    if(!newUser) return NextResponse.json({ message: "Error creating user" }, {status: 500});

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error creating user" }, {status: 500});
  }
}
