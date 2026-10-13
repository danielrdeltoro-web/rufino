
"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] =
    useState(false);

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
        const introSection =
          document.getElementById(
            "intro-section"
          );

        if (!introSection) {
          frame = 0;
          return;
        }

        const rect =
          introSection.getBoundingClientRect();

        const totalDistance = Math.max(
          introSection.offsetHeight -
            window.innerHeight,
          1
        );

        const scrolled = Math.max(
          -rect.top,
          0
        );

        const nextProgress = Math.min(
          Math.max(
            scrolled / totalDistance,
            0
          ),
          1
        );

        setProgress(nextProgress);

        frame = 0;
      });
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScroll
    );

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

  if (reducedMotion) {
    return null;
  }

  /*
   * La fotografía termina de abrirse
   * al 75% del recorrido.
   *
   * El 25% restante mantiene
   * la portada completamente visible.
   */

  const openingProgress = Math.min(
    progress / 0.75,
    1
  );

  const displacement =
    openingProgress * 100;

  const titleOpacity = Math.max(
    0,
    1 - openingProgress * 3
  );

  const lineOpacity = Math.max(
    0,
    0.5 - openingProgress * 2
  );

  const imageOpacity =
    openingProgress >= 1 ? 0 : 1;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      aria-hidden="true"
      style={{
        visibility:
          openingProgress >= 1
            ? "hidden"
            : "visible",
      }}
    >
      {/* MITAD IZQUIERDA */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden will-change-transform"
        style={{
          transform: `translate3d(-${displacement}%, 0, 0)`,
          opacity: imageOpacity,
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
          opacity: imageOpacity,
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

      {/* LÍNEA CENTRAL */}
      <div
        className="absolute left-1/2 top-0 h-full w-px bg-white"
        style={{
          opacity: lineOpacity,
        }}
      />
    </div>
  );
}
