import { uploadEventImage } from "@/lib/firebase";
import prisma from "@/lib/prisma";
import { processZodError, reviewSchema } from "@/lib/zodValidations";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const review = formData.get("review") as string;
    const image = formData.get("image");

    const { data,success,error } = reviewSchema.safeParse({
      name,
      email,
      review,
      image,
    });
    if(!success){
      const errors = processZodError(error);
      return NextResponse.json({message:"Error en los datos enviados",errors },{status:400});
    }
    if(!image){
      return NextResponse.json({message:"La imagen es requerida",errors: {
        image: "La imagen es requerida",
      }},{status:400});
    }
    const reviewFinded = await prisma.reviews.findFirst({
      where: {
        email,
      },
    });
    console.log(reviewFinded);
    if (reviewFinded && reviewFinded.email === email) {
      return NextResponse.json(
        { message: "Ya has dejado una reseña" },
        { status: 400 }
      );
    }

    const url = await uploadEventImage(image as File, "reviews/");

    if (!url)
      return NextResponse.json(
        { message: "No se ha podido subir la imagen" },
        { status: 400 }
      );

    const response = await prisma.reviews.create({
      data: {
        name,
        email,
        review,
        image: url,
      },
    });

    if (!response) {
      return NextResponse.json(
        { message: "No se ha podido guardar la reseña" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "Reseña guardada correctamente" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}
