import Link from "next/link";
import Image from "next/image";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Fotografía",
    description:
      "Producto, gastronomía, espacios y retratos.",
  },
  {
    number: "02",
    title: "Vídeo y reels",
    description:
      "Historias y contenido audiovisual para marcas.",
  },
  {
    number: "03",
    title: "Comunicación visual",
    description:
      "Una identidad coherente para tus canales digitales.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVEGACIÓN GLOBAL */}
      <Navbar />

      {/* INTRO Y PORTADA */}
      <div
        id="intro-section"
        className="relative h-[230vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-black">
          <section className="section-dark relative flex h-full flex-col justify-center overflow-hidden">
            <div className="container-rufino relative z-10 pt-28">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
                Fotografía · Film · Comunicación visual
              </p>

              <h1 className="max-w-6xl text-[clamp(5rem,17vw,17rem)] font-black leading-[0.8] tracking-[-0.095em]">
                RUFINO.
              </h1>

              <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <p className="max-w-lg text-xl leading-relaxed text-neutral-300 md:text-2xl">
                  Fotografía y vídeo para dar presencia
                  a tu marca.
                </p>

                <a
                  href="#proyectos"
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest"
                >
                  Explorar
                  <ArrowDown size={20} />
                </a>
              </div>
            </div>

            <div className="absolute bottom-8 left-0 w-full">
              <div className="container-rufino flex justify-between text-xs uppercase tracking-widest text-neutral-500">
                <span>Gran Canaria · Canarias</span>
                <span>Scroll to explore ↓</span>
              </div>
            </div>
          </section>

          <Intro />
        </div>
      </div>

      {/* 01 / PORTFOLIO GASTRONÓMICO */}
      <section
        id="proyectos"
        className="section-dark relative min-h-screen scroll-mt-20 overflow-hidden bg-black text-white"
      >
        {/* FOTOGRAFÍA DE FONDO */}
        <Image
          src="/images/portfolio-background.png"
          alt="Fotografía gastronómica de carne a la parrilla con salsa"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* DEGRADADO PARA LEGIBILIDAD */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-black/10" />

        {/* CONTENIDO */}
        <div className="container-rufino relative z-10 flex min-h-screen flex-col pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold">
              01 /
            </span>
            <span className="text-sm uppercase tracking-widest">
              Portfolio
            </span>
          </div>

          {/* TÍTULO EN ZONA CENTRAL IZQUIERDA */}
          <div className="flex flex-1 flex-col justify-center pb-16 md:pb-24">
            <Link
              href="/gastronomia"
              className="group inline-flex w-fit max-w-full flex-col items-start"
              aria-label="Explorar fotografía y vídeo gastronómico"
            >
              <span className="block text-sm font-semibold uppercase tracking-widest text-white/90 md:text-base">
                FOTOGRAFÍA Y VÍDEO
              </span>

              <span className="mt-3 block text-[clamp(3rem,5vw,5.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white transition-opacity duration-300 group-hover:opacity-75">
                Gastronomía
              </span>

              <span className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/90 transition-all duration-300 group-hover:gap-5">
                Explorar portfolio
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 02 / SERVICIOS - FONDO BLANCO */}
      <section
        id="servicios"
        className="section-light scroll-mt-20 py-28 md:py-40"
      >
        <div className="container-rufino">
          <div className="mb-16 flex items-center gap-4">
            <span className="text-sm font-bold">
              02 /
            </span>
            <span className="text-sm uppercase tracking-widest">
              Qué hago
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black leading-[1.05] md:text-8xl">
            CONTENIDO
            <br />
            CON INTENCIÓN.
          </h2>

          <div className="mt-20 border-t border-neutral-300">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col gap-5 border-b border-neutral-300 py-10 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-neutral-500">
                    {service.number}
                  </span>

                  <h3 className="text-3xl font-bold md:text-5xl">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-xs text-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / SOBRE MÍ - FONDO NEGRO */}
      <section
        id="sobre-mi"
        className="section-dark scroll-mt-20 py-28 md:py-40"
      >
        <div className="container-rufino">
          <div className="mb-16 flex items-center gap-4">
            <span className="text-sm font-bold">
              03 /
            </span>
            <span className="text-sm uppercase tracking-widest">
              Sobre mí
            </span>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <h2 className="text-5xl font-black leading-[1.05] md:text-8xl">
              DETRÁS
              <br />
              DE CADA
              <br />
              IMAGEN.
            </h2>

            <div>
              <p className="text-xl leading-relaxed text-neutral-300 md:text-2xl">
                Soy Rufino, fotógrafo y filmmaker
                en Gran Canaria. Creo contenido
                visual para marcas que quieren
                mostrar lo que las hace diferentes.
              </p>

              <p className="mt-8 text-neutral-400">
                Cada proyecto es una oportunidad
                para explorar nuevas ideas,
                perspectivas y formas de comunicar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / CONTACTO - FONDO BLANCO */}
      <section
        id="contacto"
        className="section-light scroll-mt-20 py-28 md:py-40"
      >
        <div className="container-rufino">
          <div className="mb-16 flex items-center gap-4">
            <span className="text-sm font-bold">
              04 /
            </span>
            <span className="text-sm uppercase tracking-widest">
              Contacto
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black leading-[1.05] md:text-8xl">
            ¿HACEMOS
            <br />
            ALGO GRANDE?
          </h2>

          <p className="mt-10 max-w-xl text-neutral-600">
            Tu marca tiene algo que contar.
            Hablemos de cómo darle vida.
          </p>

          <a
            href="https://www.instagram.com/byrubencurbelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border-b border-black pb-3 text-xl font-semibold transition-opacity hover:opacity-60"
          >
            Escríbeme por Instagram
            <ArrowUpRight size={24} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-white">
        <div className="container-rufino flex flex-col justify-between gap-6 border-t border-neutral-800 pt-10 md:flex-row md:items-center">
          <span className="text-2xl font-black tracking-tight">
            RUFINO.
          </span>

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} RUFINO.
          </p>

          <a
            href="https://www.instagram.com/byrubencurbelo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Rufino"
            className="transition-opacity hover:opacity-60"
          >
            <Instagram size={22} />
          </a>
        </div>
      </footer>
    </main>
  );
}
