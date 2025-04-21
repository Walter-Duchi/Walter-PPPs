"use client";

import { VscChevronDown, VscMenu, VscAccount } from "react-icons/vsc";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  description: string;
  href: string;
}

const DropdownButton: React.FC<{
  label: string;
  items: DropdownItem[];
  positionClass?: string;
  // Prop opcional para diferenciar entre menú de escritorio y versión móvil
  mobile?: boolean;
}> = ({ label, items, positionClass = "left-0", mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detecta si alguna de las rutas del menú está activa
  const isActive = items.some((item) => pathname === item.href);

  // Para la versión de escritorio usamos onMouseEnter y onMouseLeave;
  // para móvil solo se usará click.
  useEffect(() => {
    if (!mobile) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [mobile]);

  return (
    <div
      className="relative"
      // Si es versión escritorio, activamos onMouseEnter/onLeave.
      {...(!mobile && {
        onMouseEnter: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false),
      })}
      ref={menuRef}
    >
      {/* Botón con menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex flex-row items-center gap-2 relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                    after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                    after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${
                      isActive ? "after:scale-x-100" : "after:scale-x-0"
                    }
                    hover:after:scale-x-100`}
      >
        <p>{label}</p>
        <VscChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div
          className={`absolute ${positionClass} mt-0 ${
            mobile ? "min-w-full" : "min-w-[510px]"
          } bg-white/90 text-black shadow-lg rounded-lg overflow-hidden 
                        z-50 backdrop-blur-lg transition-all duration-300 opacity-100 scale-100`}
        >
          <ul
            className={`grid ${
              mobile ? "grid-cols-1" : "grid-cols-2"
            } gap-2 p-2`}
          >
            {items.map((item, index) => {
              const isItemActive = pathname === item.href;
              return (
                <li key={index} className="w-full">
                  <Link
                    href={item.href}
                    className={`block px-6 py-4 border-2 transition-all rounded-lg shadow-md 
                               ${
                                 isItemActive
                                   ? "border-[#25466a] bg-gray-200"
                                   : "border-transparent hover:border-[#25466a] hover:bg-gray-100"
                               }`}
                  >
                    <p className="font-semibold text-sm">{item.label}</p>
                    <span className="text-sm text-gray-500">
                      {item.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const Navbar_principal = () => {
  const pathname = usePathname();
  const isInicioActive = pathname === "/";
  // Estado para controlar la apertura del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#25466a]">
      <div className="h-20 px-6 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex flex-row gap-4 items-center">
          <a href="">
            <img
              src="/Logos/congreso_internacionales.png"
              alt="Logo Cooperativa"
              style={{
                width: "175px",
                height: "50px",
              }}
              className="border-2 border-white transition-transform hover:scale-110 rounded-md"
            />
          </a>
        </div>

        {/* Menú Horizontal para Desktop (se muestra a partir de breakpoint md) */}
        <div className="hidden xl:flex flex-row items-center gap-4">
          <div className="flex flex-row justify-center gap-3">
            <a href="/">
              <button
                className={`relative p-3 font-serif transition-transform duration-500 text-white hover:shadow-xl rounded-lg
                                  after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-[3px] 
                                  after:bg-white after:scale-x-0 after:transition-transform after:duration-300 ${
                                    isInicioActive
                                      ? "after:scale-x-100"
                                      : "after:scale-x-0"
                                  } hover:after:scale-x-100`}
              >
                Inicio
              </button>
            </a>

            <DropdownButton
              label="Nosotros"
              items={[
                {
                  label: "Estructura",
                  description:
                    "Más información sobre la estructura de la cooperativa.",
                  href: "/estructura",
                },
                {
                  label: "Misión y Visión",
                  description: "Conoce más acerca de nuestra misión y visión.",
                  href: "/mision-vision",
                },
                {
                  label: "Objetivo",
                  description: "Conoce más acerca de nuestro objetivo.",
                  href: "/objetivo",
                },
                {
                  label: "Educación financiera",
                  description: "Aprende más acerca de la educación financiera.",
                  href: "/educacion-financiera",
                },
                {
                  label: "Contactanos",
                  description: "Te ayudaremos en lo se pueda.",
                  href: "/contactos",
                },
                {
                  label: "Estatuto",
                  description: "Conoce más acerca de nuestro estatuto.",
                  href: "/estatuto",
                },
                {
                  label: "Organigrama",
                  description: "Conoce más acerca de nuestro organigrama.",
                  href: "organigrama",
                },
              ]}
            />

            <DropdownButton
              label="Articulos"
              items={[
                {
                  label: "Empleos",
                  description: "Trabaja con nosotros.",
                  href: "/articles/jobs",
                },
                {
                  label: "Cuentas",
                  description: "Ten una cuenta con nosotros.",
                  href: "/articules/accounts",
                },
                {
                  label: "Creditos",
                  description: "Saca el credito con nosotros",
                  href: "/articules/credits",
                },
                {
                  label: "Inversiones",
                  description: "Haz tu inversion con nosotros.",
                  href: "/articules/investments",
                },
                {
                  label: "Fideicomisos",
                  description: "Nosotros te ayudamos con tu fideicomiso.",
                  href: "/articules/trusts",
                },
                {
                  label: "Productos",
                  description: "Conoce sobre nuestros productos.",
                  href: "/articules/products",
                },
                {
                  label: "Pago de Servicios e Impuestos",
                  description:
                    "Nosotros te ayudamos en el pago de servicios e impuestos.",
                  href: "/articules/payment-of-services-and-taxes",
                },
                {
                  label: "Nóminas",
                  description: "Conoce acerca de las nóminas.",
                  href: "/articles/payroll",
                },
                {
                  label: "Revistas",
                  description: "Conoce acerca de las revistas.",
                  href: "/articles/magazines",
                },
                {
                  label: "Servicios",
                  description: "Conoce acerca de los servicios.",
                  href: "/articles/services",
                },
              ]}
            />

            <DropdownButton
              label="Socios"
              items={[
                {
                  label: "Beneficios para Socios",
                  description: "Conoce los beneficios para nuestros socios.",
                  href: "/components/partners/SocialBenefits",
                },
                {
                  label: "Educación Financiera Socios",
                  description: "Aprende educación financiera con nosotros.",
                  href: "/partners/FinancialEducationPartners",
                },
                {
                  label: "Cuentas",
                  description: "Descubre las cuentas disponibles.",
                  href: "/partners/accounts",
                },
                {
                  label: "Inversiones",
                  description: "Aprende más sobre las inversión.",
                  href: "/partners/Investments",
                },
                {
                  label: "Pensiones",
                  description: "Infórmate sobre los planes de pensiones.",
                  href: "/partners/Pensions",
                },
                {
                  label: "Soluciones",
                  description: "Conoce las soluciones que brindamos.",
                  href: "/partners/Solutions",
                },
                {
                  label: "Servicios",
                  description: "Explora los servicios que tenemos.",
                  href: "/partners/Services",
                },
              ]}
            />

            <DropdownButton
              label="Accionistas"
              items={[
                {
                  label: "Requisitos",
                  description: "Conoce los requisitos para ser accionista.",
                  href: "/requesitos",
                },
                {
                  label: "Beneficios",
                  description: "Conoce los beneficios de ser accionista.",
                  href: "/beneficios",
                },
                {
                  label: "Afiliate",
                  description:
                    "Puedes ser accionista con una inversión minima.",
                  href: "/afiliacion",
                },
                {
                  label: "Dividendos",
                  description: "Conoce los dividendos.",
                  href: "/dividendos",
                },
                {
                  label: "Rendimiento",
                  description: "Conoce el rendimiento de la inversión.",
                  href: "/rendimiento",
                },
                {
                  label: "Preguntas frecuentes",
                  description: "Preguntas frecuentes.",
                  href: "/preguntasFre",
                },
              ]}
              positionClass="right-0"
            />

            <DropdownButton
              label="Créditos"
              items={[
                {
                  label: "Credito Ordinario",
                  description: "Conoce sobre credito Ordinario.",
                  href: "/creditoOrdinario",
                },
                {
                  label: "Credito Emergente",
                  description: "Conoce sobre credito Emergente.",
                  href: "/creditoEmergente",
                },
                {
                  label: "Credito para accionistas",
                  description: "Conoce sobre credito para accionistas.",
                  href: "/creditoAccionistas",
                },
              ]}
              positionClass="right-0"
            />

            <DropdownButton
              label="Centro de ayuda"
              items={[
                {
                  label: "Centro Ayuda Socios",
                  description: "Ayuda para Socios.",
                  href: "ayudaSocios",
                },
                {
                  label: "Centro Ayuda Accionistas",
                  description: "Ayuda para Accionistas.",
                  href: "/ayudAccionistas",
                },
              ]}
              positionClass="right-0"
            />
          </div>
        </div>

        {/* Versión Móvil: botón hamburguesa */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            title="Toggle mobile menu"
          >
            <VscMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Botón de login (se mantiene visible en ambas versiones) */}
        <div className="flex flex-row gap-3 items-center">
          <a href="/auth/signIn">
            <button className="px-3 gap-2 flex flex-row items-center shadow-md border border-orange-500 rounded-lg bg-[#25466a] active:translate-x-0.5 active:translate-y-0.5 duration-100">
              <VscAccount className="w-7 h-7 text-white" />
              <div className="flex flex-col">
                <p className="text-white font-serif">Iniciar Sesión</p>
                <p className="text-white font-serif text-[12px]">Accionistas</p>
              </div>
            </button>
          </a>
        </div>
      </div>

      {/* Menú Móvil Desplegable (solo se muestra en mobile) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#25466a] text-white z-[1]">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <DropdownButton
                mobile
                label="Nosotros"
                items={[
                  {
                    label: "Estructura",
                    description:
                      "Más información sobre la estructura de la cooperativa.",
                    href: "/estructura",
                  },
                  {
                    label: "Misión y Visión",
                    description:
                      "Conoce más acerca de nuestra misión y visión.",
                    href: "/mision-vision",
                  },
                  {
                    label: "Objetivo",
                    description: "Conoce más acerca de nuestro objetivo.",
                    href: "/objetivo",
                  },
                  {
                    label: "Educación financiera",
                    description:
                      "Aprende más acerca de la educación financiera.",
                    href: "/educacion-financiera",
                  },
                  {
                    label: "Contactanos",
                    description: "Te ayudaremos en lo se pueda.",
                    href: "/contactos",
                  },
                  {
                    label: "Estatuto",
                    description: "Conoce más acerca de nuestro estatuto.",
                    href: "/estatuto",
                  },
                  {
                    label: "Organigrama",
                    description: "Conoce más acerca de nuestro organigrama.",
                    href: "organigrama",
                  },
                ]}
              />
            </li>
            <li>
              <DropdownButton
                mobile
                label="Articulos"
                items={[
                  {
                    label: "Empleos",
                    description: "Trabaja con nosotros.",
                    href: "/articles/jobs",
                  },
                  {
                    label: "Cuentas",
                    description: "Ten una cuenta con nosotros.",
                    href: "/articules/accounts",
                  },
                  {
                    label: "Creditos",
                    description: "Saca el credito con nosotros",
                    href: "/articules/credits",
                  },
                  {
                    label: "Inversiones",
                    description: "Haz tu inversion con nosotros.",
                    href: "/articules/investments",
                  },
                  {
                    label: "Fideicomisos",
                    description: "Nosotros te ayudamos con tu fideicomiso.",
                    href: "/articules/trusts",
                  },
                  {
                    label: "Productos",
                    description: "Conoce sobre nuestros productos.",
                    href: "/articules/products",
                  },
                  {
                    label: "Pago de Servicios e Impuestos",
                    description:
                      "Nosotros te ayudamos en el pago de servicios e impuestos.",
                    href: "/articules/payment-of-services-and-taxes",
                  },
                  {
                    label: "Nóminas",
                    description: "Conoce acerca de las nóminas.",
                    href: "/articles/payroll",
                  },
                  {
                    label: "Revistas",
                    description: "Conoce acerca de las revistas.",
                    href: "/articles/magazines",
                  },
                  {
                    label: "Servicios",
                    description: "Conoce acerca de los servicios.",
                    href: "/articles/services",
                  },
                ]}
              />
            </li>
            <li>
              <DropdownButton
                mobile
                label="Socios"
                items={[
                  {
                    label: "Beneficios para Socios",
                    description: "Conoce los beneficios para nuestros socios.",
                    href: "/components/partners/SocialBenefits",
                  },
                  {
                    label: "Educación Financiera Socios",
                    description: "Aprende educación financiera con nosotros.",
                    href: "/partners/FinancialEducationPartners",
                  },
                  {
                    label: "Cuentas",
                    description: "Descubre las cuentas disponibles.",
                    href: "/partners/accounts",
                  },
                  {
                    label: "Inversiones",
                    description: "Aprende más sobre las inversión.",
                    href: "/partners/Investments",
                  },
                  {
                    label: "Pensiones",
                    description: "Infórmate sobre los planes de pensiones.",
                    href: "/partners/Pensions",
                  },
                  {
                    label: "Soluciones",
                    description: "Conoce las soluciones que brindamos.",
                    href: "/partners/Solutions",
                  },
                  {
                    label: "Servicios",
                    description: "Explora los servicios que tenemos.",
                    href: "/partners/Services",
                  },
                ]}
              />
            </li>
            <li>
              <DropdownButton
                mobile
                label="Accionistas"
                items={[
                  {
                    label: "Requisitos",
                    description: "Conoce los requisitos para ser accionista.",
                    href: "/requesitos",
                  },
                  {
                    label: "Beneficios",
                    description: "Conoce los beneficios de ser accionista.",
                    href: "/beneficios",
                  },
                  {
                    label: "Afiliate",
                    description:
                      "Puedes ser accionista con una inversión minima.",
                    href: "/afiliacion",
                  },
                  {
                    label: "Dividendos",
                    description: "Conoce los dividendos.",
                    href: "/dividendos",
                  },
                  {
                    label: "Rendimiento",
                    description: "Conoce el rendimiento de la inversión.",
                    href: "/rendimiento",
                  },
                  {
                    label: "Preguntas frecuentes",
                    description: "Preguntas frecuentes.",
                    href: "/preguntasFre",
                  },
                ]}
                positionClass="right-0"
              />
            </li>
            <li>
              <DropdownButton
                mobile
                label="Créditos"
                items={[
                  {
                    label: "Credito Ordinario",
                    description: "Conoce sobre credito Ordinario.",
                    href: "/creditoOrdinario",
                  },
                  {
                    label: "Credito Emergente",
                    description: "Conoce sobre credito Emergente.",
                    href: "/creditoEmergente",
                  },
                  {
                    label: "Credito para accionistas",
                    description: "Conoce sobre credito para accionistas.",
                    href: "/creditoAccionistas",
                  },
                ]}
                positionClass="right-0"
              />
            </li>
            <li>
              <DropdownButton
                mobile
                label="Centro de ayuda"
                items={[
                  {
                    label: "Centro Ayuda Socios",
                    description: "Ayuda para Socios.",
                    href: "ayudaSocios",
                  },
                  {
                    label: "Centro Ayuda Accionistas",
                    description: "Ayuda para Accionistas.",
                    href: "/ayudAccionistas",
                  },
                ]}
                positionClass="right-0"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
