"use client";
import { HiOutlineIdentification } from "react-icons/hi";
import { AuroraBackground } from "../ui/AuroraBackground";
import { Button } from "@nextui-org/react";
import { getShareholder } from "../actions/shareholderAction";
import { useFormState } from "react-dom";
import { ShareholderModal } from "../modals/ShareholderModal";

const initialState = {
  message: "",
  user: null,
};

export const ShareholderCard = () => {
  const [state, formAction] = useFormState(getShareholder, initialState);

  return (
    <AuroraBackground className="max-h-fit">
      <div className=" rounded-2xl md:p-8 grid md:grid-cols-2 items-center  md:gap-10">
        <h3 className="text-lg md:text-2xl font-bold text-[#3f78b6] dark:text-primary">
          ¿Quieres conocer si perteneces al grupo de accionistas de la
          Cooperativa?
        </h3>

        <div>
          <form
            action={formAction}
            className="group transition-colors bg-black/80 dark:bg-white/85 hover:bg-black dark:hover:bg-white dark:focus-within:bg-white  focus-within:bg-black rounded-full md:pl-4 md:pr-2 px-2 py-2 w-full flex items-center gap-3 cursor-text   "
          >
            <HiOutlineIdentification
              className="text-white dark:text-black"
              size={25}
            />
            <input
              type="number"
              name="cedula"
              className="grow outline-none bg-transparent text-white dark:text-black placeholder:text-default-300 dark:placeholder:text-default-200"
              placeholder="Escribe tu número de cédula"
            />
            <Button
              size="sm"
              type="submit"
              className="bg-white dark:bg-black dark:text-white text-black px-4 py-2 rounded-full"
            >
              Consultar
            </Button>
          </form>
          <p>
            
          </p>
        </div>

        <ShareholderModal user={state?.user} />
      </div>
    </AuroraBackground>
  );
};
