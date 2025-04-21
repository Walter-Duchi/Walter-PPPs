import Image from "next/image";
import { cn } from "@/lib/utils";
export const Brand = ({
  className,
}:{
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-2 with-400">
      <Image alt="brand" src="/Cooperativa.svg" width={60} height={60} />
      <h1 className={cn("hidden md:block text-3xl font-bold text-default-200 dark:text-white",className)}>
        Cooperativa Financiera
      </h1>
    </div>
  );
};
