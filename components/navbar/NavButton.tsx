import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

// Tipamos los props condicionalmente dependiendo del componente
interface NavButtonProps<C extends React.ElementType> {
  children: React.ReactNode;
  as?: C; // `as` puede ser cualquier tipo de componente o etiqueta HTML
  href?: C extends "a" | typeof Link ? string : never; // `href` es requerido si `as` es 'a' o `Link`
}

// Usamos un componente genérico que permite cambiar la etiqueta
export const NavButton = <C extends React.ElementType = "button">({
  children,
  as,
  href,
  ...rest
}: NavButtonProps<C> & React.ComponentProps<C>) => {
  const Component = as || "button"; // Si no se pasa `as`, usa 'button' como valor por defecto

  // Verificamos si se requiere el `href` y lo pasamos adecuadamente
  return (
    <Component
      className={styles.navButton}
      {...(Component === Link || Component === "a" ? { href } : {})}
      {...rest}
    >
      {children}
    </Component>
  );
};
