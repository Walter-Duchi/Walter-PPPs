import { Button } from "@nextui-org/react";
import Image from "next/image";
import { HiBriefcase } from "react-icons/hi2";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const BrandButtons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex  border rounded-2xl", className)}>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 1,
              ease: "easeOut",
              once: true,
            },
          }}
        >
          <Button
            className="text-black h-14"
            variant="bordered"
            color="primary"
            endContent={
              <Image
                src="/Academialogo.png"
                width={40}
                height={40}
                alt="logo"
              />
            }
          >
            <div className="flex flex-col gap-0">
              <span>Academia</span>
              <span>Internacional</span>
            </div>{" "}
            | <p>ANEUPI</p>
          </Button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 2,
              ease: "easeOut",
              once: true,
            },
          }}
        >
          <Button
            className="border-[#fb5c00] h-14"
            variant="bordered"
            startContent={
              <Image src="/lecenilogo.png" width={40} height={40} alt="logo" />
            }
          >
            <div className="text-[#034967]">
              <p className="font-bold">LECENI</p>
              <p className="text-xs font-semibold">
                Constructora e inmoviliaria
              </p>
            </div>
          </Button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 3,
              ease: "easeOut",
              once: true,
            },
          }}
        >
          <Button
            startContent={<HiBriefcase size={30} />}
            fullWidth
            className="bg-[#00335f] text-white h-14"
          >
            <div className="flex flex-col items-start gap-0">
              <p className="font-light">Prácticas</p>
              <p className="font-medium">Pre profesionales</p>
            </div>
          </Button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2 * 4,
              ease: "easeOut",
              once: true,
            },
          }}
        >
          {" "}
          <Button
            className="text-black border-primary h-14"
            variant="bordered"
            endContent={
              <Image
                src="/Academialogo.png"
                width={40}
                height={40}
                alt="logo"
              />
            }
          >
            <div className="flex flex-col gap-0">
              <span>Fundación</span>
              <span>Internacional</span>
            </div>{" "}
            | <p>ANEUPI</p>
          </Button>
        </motion.div>
      </div>
  );
};
