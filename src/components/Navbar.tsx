"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkBackground, setDarkBackground] =
    useState(true);
  const [introVisible, setIntroVisible] =
    useState(true);

  useEffect(() => {
    let frame = 0;

    const updateNavbar = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const intro = document.getElementById(
          "intro-section"
        );

        // Calculamos cuándo termina la apertura.
        if (intro) {
          const rect = intro.getBoundingClientRect();
          const distance = Math.max(
            intro.offsetHeight - window.innerHeight,
            1
          );

          const progress = Math.min(
            Math.max(-rect.top / distance, 0),
            1
          );

          setIntroVisible(progress < 0.95);
        } else {
          setIntroVisible(false);
        }

        // Detectamos qué sección hay detrás del menú.
        const sections = document.querySelectorAll(
          ".section-light, .section-dark"
        );

        let isDark = true;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 50 && rect.bottom > 50) {
            isDark =
              section.classList.contains(
                "section-dark"
              );
          }
        });

        setDarkBackground(isDark);
        frame = 0;
      });
    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbar
      );
      window.removeEventListener(
        "resize",
        updateNavbar
      );

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  const textColor = darkBackground
    ? "text-white"
    : "text-black";

  const showNavbar = !introVisible || menuOpen;

  return (
    <>
      {/* NAVEGACIÓN PRINCIPAL */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          menuOpen
            ? "text-white"
            : textColor
        }`}
      >
        <div className="container-rufino flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-[60] text-3xl font-black tracking-[-0.08em]"
          >
            RUFINO.
          </Link>

          {/* MENÚ ESCRITORIO */}
          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CONTACTO ESCRITORIO */}
          <a
            href="#contacto"
            className="hidden items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-50 md:flex"
          >
            Hablemos
            <ArrowUpRight size={18} />
          </a>

          {/* BOTÓN MÓVIL */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Cerrar menú"
                : "Abrir menú"
            }
            aria-expanded={menuOpen}
            aria-controls="rufino-mobile-menu"
            className="relative z-[60] flex h-11 w-11 items-center justify-center md:hidden"
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL A PANTALLA COMPLETA */}
      <div
        id="rufino-mobile-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-black px-8 text-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Navegación móvil"
          className="flex flex-col gap-7"
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-5 text-[clamp(2.5rem,10vw,5rem)] font-black leading-none tracking-tight transition-opacity hover:opacity-50"
            >
              <span className="text-sm font-medium text-neutral-500">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between border-t border-neutral-700 pt-6 text-xs uppercase tracking-widest text-neutral-400">
          <span>Gran Canaria</span>
          <span>RUFINO. © 2026</span>
        </div>
      </div>
    </>
  );
}
