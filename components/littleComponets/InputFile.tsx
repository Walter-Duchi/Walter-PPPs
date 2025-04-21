import { cn } from "@/lib/utils";
import { useRef, forwardRef } from "react";

interface InputFileProps {
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept?: string;
  [key: string]: any; // Para props adicionales
}

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>(
  ({ children, onChange, className, accept, ...rest }, ref) => {
    const fileInput = useRef<HTMLInputElement | null>(null);

    const openFileInput = () => {
      if (fileInput.current) {
        fileInput.current.click();
      }
    };

    return (
      <div onClick={openFileInput} className={cn("h-fit cursor-pointer",className)}>
        {children}
        <input
          type="file"
          className="hidden"
          onChange={onChange}
          ref={fileInput} // Registrar ref aquí para react-hook-form
          accept={accept || "., image/png,image/"}
          {...rest}
        />
      </div>
    );
  }
);

// Asignar displayName para evitar el error
InputFile.displayName = "InputFile";
