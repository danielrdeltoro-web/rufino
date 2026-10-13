"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        const openingDistance = Math.max(
          window.innerHeight * 0.85,
          450
        );

        const nextProgress = Math.min(
          Math.max(window.scrollY / openingDistance, 0),
          1
        );

        setProgress(nextProgress);
        frame = 0;
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        updateScroll
      );

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  // Si el usuario prefiere movimiento reducido,
  // mostramos directamente la web.
  if (reducedMotion) {
    return null;
  }

  // Cada mitad se desplaza hacia fuera
  // en función del scroll.
  const displacement = progress * 100;

  // El texto desaparece al comenzar la apertura.
  const titleOpacity = Math.max(
    0,
    1 - progress * 3
  );

  // La línea central desaparece progresivamente.
  const lineOpacity = Math.max(
    0,
    0.5 - progress * 2
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
      style={{
        visibility:
          progress >= 1 ? "hidden" : "visible",
      }}
    >
      {/* MITAD IZQUIERDA */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden will-change-transform"
        style={{
          transform: `translate3d(-${displacement}%, 0, 0)`,
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-[200%]"
          style={{
            backgroundImage:
              "url('/images/intro.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* MITAD DERECHA */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden will-change-transform"
        style={{
          transform: `translate3d(${displacement}%, 0, 0)`,
        }}
      >
        <div
          className="absolute inset-y-0 right-0 w-[200%]"
          style={{
            backgroundImage:
              "url('/images/intro.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* TÍTULO CENTRAL */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: titleOpacity,
        }}
      >
        <span
          className="text-[clamp(3rem,12vw,12rem)] font-black tracking-[-0.09em] text-white"
          style={{
            textShadow:
              "0 2px 30px rgba(0,0,0,0.5)",
          }}
        >
          RUFINO.
        </span>
      </div>

      {/* LÍNEA DE APERTURA */}
      <div
        className="absolute left-1/2 top-0 h-full w-px bg-white"
        style={{
          opacity: lineOpacity,
        }}
      />
    </div>
  );
}
