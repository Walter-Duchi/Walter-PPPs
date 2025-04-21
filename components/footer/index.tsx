import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SocialButton } from "../buttons/SocialButton";
import { Brand } from "../littleComponets/Brand";
import Link from "next/link";
import { HiEnvelope, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiLocationMarker, HiOfficeBuilding } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className=" mt-0">
      <Card
        as="footer"
        className="rounded-none rounded-t-2xl p-0 md:px-6 bg-[#25466a]  mx-auto"
        shadow="none"
      >
        <CardBody className="grid grid-cols-3 gap-5 mx-auto py-2">
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal font-serif">
              Servicios
            </h3>
            <div className="flex flex-col gap-1 text-white">
              <Link
                className="font-serif relative inline-block cursor-pointer after:content-[''] 
                          after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                        after:bg-white after:transition-all after:duration-300 
                          hover:after:w-full"
                href="#"
              >
                Ser accionista
              </Link>
              <Link
                className="font-serif relative inline-block cursor-pointer after:content-[''] 
                              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                            after:bg-white after:transition-all after:duration-300 
                              hover:after:w-full"
                href="#"
              >
                Consulta accionista
              </Link>
              <Link
                className="font-serif relative inline-block cursor-pointer after:content-[''] 
                              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                            after:bg-white after:transition-all after:duration-300 
                              hover:after:w-full"
                href="#"
              >
                Denuncias
              </Link>
            </div>
          </section>
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal font-serif">
              Matríz
            </h3>
            <div className="flex flex-col gap-1 text-white">
              <Link className="" href="#">
                <p className="flex items-center gap-1 font-serif">
                  <HiOfficeBuilding size={20} />
                  Cede principal: Susudel - Ecuador
                </p>
              </Link>

              <Link className="" href="#">
                <p className="flex items-center gap-1 font-serif">
                  <HiLocationMarker size={20} />
                  Av. Las Escondidas por la Panamericana Sur
                </p>
              </Link>
            </div>
          </section>
          <section className="space-y-2 text-sm">
            <h3 className="text-default-300 text-lg font-normal font-serif">
              Contáctanos
            </h3>
            <div className="flex flex-col gap-1 text-white">
              <Link
                className="flex items-center gap-2"
                href="mailto:cooperativafinanciera.aneupi@gmail.com"
              >
                <HiEnvelope size={20} />
                <p
                  className="font-serif relative inline-block cursor-pointer after:content-[''] 
                              after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                            after:bg-white after:transition-all after:duration-300 
                              hover:after:w-full"
                >
                  cooperativafinanciera.aneupi@gmail.com
                </p>
              </Link>
              <Link
                className="flex items-center gap-2 font-serif"
                target="_blank"
                href="https://wa.me/593983341084"
              >
                <RiWhatsappFill size={20} />
                +593 0983341084
              </Link>
            </div>
          </section>
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-between w-[70%] mx-auto py-0">
          <p className="text-white text-sm font-serif">
            © 2021 Cooperativa de Ahorro y Crédito
          </p>
          <div className="flex items-center gap-5">
            <SocialButton>
              <FaFacebook />
            </SocialButton>
            <SocialButton>
              <FaTiktok />
            </SocialButton>
            <SocialButton>
              <FaYoutube />
            </SocialButton>
            <SocialButton>
              <FaInstagram />
            </SocialButton>
            <SocialButton>
              <FaXTwitter />
            </SocialButton>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
