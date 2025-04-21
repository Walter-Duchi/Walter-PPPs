"use client";
import Link from "next/link";
import { ThemeSwitch } from "../littleComponets/ThemeSwitch";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { useState } from "react";
import { GroupAssociation } from "../littleComponets/GroupAssociation";
import { Navbar_principal} from "./Navbar_principal";
export const Navbar = ({ session }: { session: Session | null }) => {
  {/*const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];*/}
  return (

      <>
        <div className="flex flex-col items-center gap-4">
          <GroupAssociation/> {/*Encabezado*/}
          <Navbar_principal/> {/*Barra de navegacion principal*/}   
        </div>
      </>
  );
};

{/*const ListItem = ({
  className,
  title,
  children,
  href,
  ref,
  ...props
}: {
  className?: string;
  title: string;
  children: string;
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
}) => {
  return (
    <li
      className={cn(
        "flex flex-col justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
    >
      <NavigationMenuLink asChild>
        <Link ref={ref} href={href} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-wrap max-w-full">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";*/}
