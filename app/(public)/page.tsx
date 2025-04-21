"use client";

import { FunctionCard } from "@/components/cards/FunctionCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInEffect } from "@/components/ui/FadeInEffect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {
  cooperativaWords,
  corporativeBrands,
  mainFunctions,
  services,
} from "@/lib/constants";
import { Button, Card, CardFooter, Tooltip } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { ShareholderCard } from "@/components/footer/ShareholderCard";
import Image from "next/image";
import { Image as NextImage } from "@nextui-org/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { CardsOptions } from "@/components/littleComponets/CardsOptions";
import { CardTips } from "@/components/littleComponets/CardTips";
import { CardServices } from "@/components/littleComponets/CardServices";
import { NoticeSection } from "@/components/littleComponets/NoticeSection";
import { Simulator } from "@/components/littleComponets/Simulator";
export default function Home() {
  return (
    <>
      {/* Sección de portada con fade-in y logo de la cooperativa */}
      <div>
        <FadeInEffect
          className="w-full h-[90vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-primary/80 gap-5"
          style={{
            backgroundImage: "url('/portada.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        >
          {/* Sección de funciones principales */}
          <article className="grid md:grid-cols-4 gap-5 absolute bottom-0 w-full">
            {mainFunctions.map(({ title, description, href, icon }, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                key={index}
              >
                <Tooltip
                  placement="bottom"
                  classNames={{
                    content: "bg-primary text-white w-52",
                  }}
                  delay={1000}
                  content={description}
                >
                  <Button
                    size="lg"
                    fullWidth
                    color="warning"
                    startContent={icon}
                    as={Link}
                    href={href}
                    className="text-lg"
                  >
                    {title}
                  </Button>
                </Tooltip>
              </motion.div>
            ))}
          </article>
        </FadeInEffect>
        {/* Marquee para mostrar mensaje de confianza */}
        <div className="bg-[#25466a] text-white font-serif p-2">
          <Marquee>
            {" "}
            Gracias por la confianza a todas las personas por ser parte como
            accionistas de esta Institución Financiera y además, a todos los
            ciudadanas(os) que están interesadas a sumarse contáctarse por
            medios oficiales.
          </Marquee>
        </div>
      </div>
      {/* Sección de Nuestros Servicios*/}
      <main className="mb-14 space-y-10 md:space-y-10 w-[90%] mx-auto mt-5">
        <section className="text-center py-6 border-t-8 border-b-8 border-[#25466a]">
          <h3 className="text-3xl font-semibold text-[#25466a]">
            Nuestros Servicios
          </h3>

          {/* Sección de botones */}
          <article className="mt-10">
            <CardServices />
            {/*<div className="flex justify-center items-center gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#25466a] text-white p-6 rounded-2xl shadow-lg w-64 h-72 transform hover:scale-105 transition-transform"
                  initial={{ y: 0 }}
                  animate={{ y: [-60, 0, -60] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <div
                    className="w-full h-32 bg-cover rounded-lg mb-4"
                    style={{ backgroundImage: "url('/homeResources/personasFinancieras.jpg')" }}

                  ></div>
                  <Button
                    size="lg"
                    as={Link}
                    href={service.href}
                    color="default"
                    className="w-full border-2 border-[#25466a] bg-transparent hover:bg-[#25466a] hover:text-white text-[#25466a]"
                  >
                    <span className="bg-white text-[#25466a] py-1 px-2 rounded-lg">
                      Ver más
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>*/}
          </article>
        </section>
        <section>
          {" "}
          {/*Seccion de eventos a realizar*/}
          <NoticeSection />
        </section>
        <section>
          {" "}
          {/*Seccion de simulador de creditos*/}
          <Simulator />
        </section>
        <section>
          {" "}
          {/*Seccion de tarjetas de opciones que te podrian interesar */}
          {/*<CardsOptions />*/}
        </section>
        <section className="w-full h-full">
          {" "}
          {/*Seccion de Tips para un mejor ahorro*/}
          {/*<CardTips/>*/}
        </section>
        <section className="border-primary border-3 rounded-2xl py-5">
          {" "}
          {/*Sección Marcas Corporativas*/}
          <h2 className="text-center text-xl md:text-3xl font-serif font-bold text-primary dark:text-neutral-200 relative">
            NUESTRAS MARCAS CORPORATIVAS
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto gap-10">
            {corporativeBrands.map((brand, index) => (
              <Link key={index} href={brand.href} target="_blank">
                <Image
                  className="hover:scale-125 transition-transform"
                  alt={brand.title}
                  src={brand.src}
                  width={150}
                  height={150}
                />
              </Link>
            ))}
          </div>
        </section>
        <ReviewCard /> {/*Seccion de caja de opinion*/}
      </main>
    </>
  );
}
