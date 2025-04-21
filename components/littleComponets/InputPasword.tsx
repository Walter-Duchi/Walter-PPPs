"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdLock } from "react-icons/md";

export const InputPasword = ({ ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      startContent={<MdLock className="text-default-500" />}
      label="Contraseña"
      labelPlacement="outside"
      placeholder="********"
      type={isVisible ? "text" : "password"}
      endContent={
        <button
          type="button"
          className="focus:outline-none"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <IoMdEye className="text-default-500" />
          ) : (
            <IoMdEyeOff className="text-default-500" />
          )}
        </button>
      }
      {...rest}
    />
  );
};
