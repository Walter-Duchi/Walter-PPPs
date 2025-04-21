"use client";
import Image from "next/image";
import { Card } from "@/components/ui/apple-cards-carousel";

export function Brands() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full flex flex-col items-start gap-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Marcas Corporativas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">{cards}</div>
      {/* <Carousel items={cards} /> */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/public/leceni.webp"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Fundación ANEUPI",
    title: "Fundación ANEUPI",
    src: "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Faneupi.webp?alt=media&token=9d012783-6f5d-4bdd-9b07-502b50cf4ec7",
    href: "https://aneupi.com/",
    brand:
      "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Fbrand.webp?alt=media&token=ff7a802a-7547-4ac8-9907-5af68e92964a",
    content: <DummyContent />,
  },
  {
    category: "Constructora LECENI",
    title: "Constructora LECENI",
    href: "https://www.constructoraleceni.com/",
    src: "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Fleceni.webp?alt=media&token=8bf55361-ddd7-4d07-854d-c2d49690f243",
    brand:
      "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Fbrand_leceni.webp?alt=media&token=6daf4543-7280-4065-a5b4-0a4bbd2d6c1a",
    content: <DummyContent />,
  },
  {
    category: "Academia ANEUPI",
    title: "Academia ANEUPI",
    href: "https://academia.fundacionaneupi.com/",
    src: "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2FDALL%C2%B7E%202024-09-28%2017.12.48%20-%20A%20realistic%20classroom%20setting%20with%20students%20of%20various%20ages%20seated%20at%20desks%2C%20attentively%20listening%20to%20a%20professor%20at%20the%20front%20of%20the%20room.%20The%20profes.webp?alt=media&token=03e3d5da-cfb7-40b9-a64a-7d920cd0f2d7",
    brand:
      "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Facademia_aneupi.webp?alt=media&token=a059ad00-5b54-44cb-934f-71cde4c041bf",
    content: <DummyContent />,
  },
  {
    category: "ANEUPI TV",
    title: "ANEUPI TV",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href:"https://academia.fundacionaneupi.com/tv-aneupi",
    brand:
      "https://firebasestorage.googleapis.com/v0/b/cooperativa-aneupi.appspot.com/o/interfaceImages%2Ftv-aneupi.webp?alt=media&token=6d939e9a-3746-4f8f-9b5a-527dd57f430e",
    content: <DummyContent />,
  },
];
