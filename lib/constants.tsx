export const aboutLinks: navLink[] = [
  {
    title: "Estructura",
    href: "/about/structure",
    description: "Más información sobre la estructura de la cooperativa",
  },
  {
    title: "Misión y Visión",
    href: "/about/mission",
    description: "Conóce más acerca de nuestra misión y visión",
  },
  {
    title: "Objetivo",
    href: "/about/goal",
    description: "Conoce más acerca de nuestro objetivo",
  },
  {
    title: "Educación financiera",
    href: "/about/financial-education",
    description: "Aprende más acerca de la educación financiera",
  },
];

export const shareholdersLinks: navLink[] = [
  {
    title: "Requisitos",
    href: "/shareholders/requirements",
    description: "Conoce los requisitos para ser accionista",
  },
  {
    title: "Beneficios",
    href: "/shareholders/benefits",
    description: "Conoce los beneficios de ser accionista",
  },
  {
    title: "Afiliate",
    href: "/shareholders/join",
    description: "Puedes ser accionista con una inversión mínima",
  },
  {
    title: "Rendimiento",
    href: "/shareholders/performance",
    description: "Conoce el rendimiento de la inversión",
  },
  {
    title: "Dividendos",
    href: "/shareholders/dividends",
    description: "Conoce los dividendos",
  },

  {
    title: "Preguntas frecuentes",
    href: "/shareholders/faq",
    description: "Preguntas frecuentes",
  },
];

export const cooperativaWords = [
  {
    text: "¿Quieres",
    className: "text-white",
  },
  {
    text: "ser",
    className: "text-white",
  },
  {
    text: "Accionista?",
    className: "text-white",
  },
];
export const HomePageWords = [
  {
    text: "Confiabilidad",
    className: "text-primary",
  },
  {
    text: "y",
  },
  {
    text: "Calidad",
    className: "text-primary",
  },
  {
    text: "para",
  },
  {
    text: "un",
  },
  {
    text: "futuro",
  },
  {
    text: "finaciero",
  },
  {
    text: "solido",
  },
];

import { navLink } from "@/types";

import {
  HiBanknotes,
  HiBuildingStorefront,
  HiCreditCard,
  HiDocumentText,
  HiOutlineBuildingOffice2,
  HiOutlineExclamationTriangle,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
} from "react-icons/hi2";

export const mainFunctions = [
  {
    title: "Accionistas",
    description:
      "Conviértete en accionista de nuestra cooperativa y obtén beneficios exclusivos",
    href: "/shareholders",
    icon: <HiOutlineUserPlus size={40} />,
  },
  {
    title: "Socios",
    description:
      "Conoce a nuestros socios y descubre cómo puedes ser parte de nuestra cooperativa",
    href: "/partners",
    icon: <HiOutlineUserGroup size={40} />,
  },
  {
    title: "Empleos o vacantes",
    description:
      "Descubre las vacantes disponibles y únete a nuestro equipo de trabajo",
    href: "/jobs",
    icon: <HiOutlineBuildingOffice2 size={40} />,
  },
  {
    title: "Denuncias o reclamos",
    description:
      "Realiza una denuncia o reclamo si has tenido algún problema con nuestra cooperativa",
    href: "/reports",
    icon: <HiOutlineExclamationTriangle size={40} />,
  },
];

export const services = [
  {
    title: "Créditos",
    description:
      "Proporcionaremos Créditos Financieros para tu propio emprendimiento o empresa.",
    href: "/services/credits",
    icon: <HiCreditCard size={35} />,
  },
  {
    title: "Empleos",
    description:
      "Exploraremos diversas oportunidades acordes a tu área laboral y desafiaremos tus capacidad para demostrar tu talento.",
    href: "/services/jobs",
    icon: <HiDocumentText size={35} />,
  },
  {
    title: "Agencias y cajeros",
    description:
      "A futuro encontrarás en nuestras diversas Agencias para relizar retiros en nuestros diversos Cajeros a nivel nacional.",
    href: "/services/branches",
    icon: <HiBuildingStorefront size={35} />,
  },
  {
    title: "Inversiones",
    description:
      "Al futuro contribuiremos al crecimiento continuo de nuestros emprendedores mediante préstamos para fortalecimento de capital.",
    href: "/services/investments",
    icon: <HiBanknotes size={35} />,
  },
];

export const corporativeBrands = [
  {
    title: "Fundación ANEUPI",
    src: "/brand.webp",
    href: "#",
  },
  {
    title: "Gatito Plis",
    src: "/gatitoplis.png",
    href: "#",
  },
  {
    title: "LECENI",
    src: "/leceni.png",
    href: "#",
  },
  {
    title: "ANEUPI TV",
    src: "/tv-aneupi.webp",
    href: "#",
  },
  {
    title: "Academia ANEUPI",
    src: "/academia_aneupi.webp",
    href: "#",
  },
 
];
