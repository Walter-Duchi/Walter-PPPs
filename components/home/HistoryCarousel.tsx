import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import ReactPlayer from "react-player";
import Autoplay from "embla-carousel-autoplay";
export const HistoryCarousel = () => {
  return (
    <section className="space-y-5  bg-default-100 rounded-2xl p-4">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
            Historia
          </h2>
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      
    >
      <CarouselContent >
        <CarouselItem className="grid grid-cols-2 gap-10">
          <article className="flex flex-col justify-center">
            <p className="text-xl font-medium text-default-500">
              Los primeros accionistas reunidos en la asamblea de manera
              presencial y online para tratar los temas de los avances del
              proyecto de la cooperativa financiera ANEUPI.
            </p>
          </article>
          <article className="">
            <Image
            
              removeWrapper
              alt="asamblea"
              src="/homeResources/asamblea.webp"
              className="w-full h-full"
            />
          </article>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2">
          <article className=""></article>
          <article className=""></article>
        </CarouselItem>
        <CarouselItem className="grid grid-cols-2">
          <article className=""></article>
          <article className=""></article>
        </CarouselItem>
      </CarouselContent>

    </Carousel>
    </section>
  );
};
