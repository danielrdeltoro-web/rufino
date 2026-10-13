"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [phase, setPhase] = useState<
    "waiting" | "opening" | "finished"
  >("waiting");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setPhase("finished");
      return;
    }

    // Bloqueamos el scroll durante la introducción.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Esperamos antes de abrir la fotografía.
    const openingTimer = window.setTimeout(() => {
      setPhase("opening");
    }, 1300);

    // Retiramos la intro cuando termina la animación.
    const finishTimer = window.setTimeout(() => {
      setPhase("finished");
    }, 2900);

    return () => {
      window.clearTimeout(openingTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase === "finished") {
      document.body.style.overflow = "";
    }
  }, [phase]);

  if (phase === "finished") {
    return null;
  }

  const isOpening = phase === "opening";

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* MITAD IZQUIERDA */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 overflow-hidden transition-transform duration-[1500ms] ease-in-out ${
          isOpening
            ? "-translate-x-full"
            : "translate-x-0"
        }`}
      >
        <div
          className="absolute inset-y-0 left-0 w-[200%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/intro.png')",
          }}
        />
      </div>

      {/* MITAD DERECHA */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 overflow-hidden transition-transform duration-[1500ms] ease-in-out ${
          isOpening
            ? "translate-x-full"
            : "translate-x-0"
        }`}
      >
        <div
          className="absolute inset-y-0 right-0 w-[200%] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/intro.png')",
          }}
        />
      </div>

      {/* TEXTO CENTRAL */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      >
        <span
          className="text-[clamp(3rem,12vw,12rem)] font-black tracking-[-0.09em] text-white"
          style={{
            textShadow: "0 2px 30px rgba(0,0,0,0.4)",
          }}
        >
          RUFINO.
        </span>
      </div>

      {/* LÍNEA CENTRAL */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/30 transition-opacity duration-300 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
