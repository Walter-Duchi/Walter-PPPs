"use client";

import { Button, Link, LinkProps, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface NavItemProps extends LinkProps {
  children: React.ReactNode;
  href: string; // href es obligatorio ya que defines la lógica basada en esto
}

export const NavLink = ({ children, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Button
      //color=""
      as={NavbarItem}
      size="md"
      className="overflow-hidden relative w-34 p-2 h-12 text-white border-none rounded-lg text-xl font-bold cursor-pointer z-10 group"
      
      variant={pathname === rest.href ? "flat" : "light"}
    >
      <Link     
      className="text-lg font-medium"
        {...rest} 
      >
        {children}
      </Link>
    </Button>
  );
};
