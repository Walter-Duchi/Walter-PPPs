import { CheckMessage } from "@/components/littleComponets/CheckMessage";
import { Button } from "@nextui-org/react";
import { HiArrowSmallRight, HiChevronRight } from "react-icons/hi2";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-5 w-5/6 mx-auto min-h-[70vh]">
      <section className="flex flex-col justify-center gap-4">
        <h3 className="text-3xl md:text-5xl font-semibold md:leading-tight">
          ¿Quieres formar parte de nuestros Accionistas?
        </h3>
        <p className="text-default-500">
          {" "}
          Descubriremos en un corto plazo un mundo de oportunidades con
          beneficios personalizados, recompensas exclusivas y servicios
          prioritarios diseñados especialmente para ti.
        </p>
        <div className="text-default-500 space-y-3">
          <CheckMessage>Préstamos y Cuentas de Ahorro</CheckMessage>
          <CheckMessage>Solidaridad y Comunidad</CheckMessage>
          <CheckMessage>Programas Educativos y Formación</CheckMessage>
          <CheckMessage>Equidad de Género e Inclusión</CheckMessage>
        </div>
        <div className="flex gap-5">
          <Button
            radius="full"
            color="primary"
            endContent={<HiChevronRight />}
          >
            Únete Ahora 
          </Button>
          <Button radius="full" variant="light" color="primary">
            Más Información
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center"></section>
    </div>
  );
}
