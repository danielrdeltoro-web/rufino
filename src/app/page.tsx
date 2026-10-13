
import Image from "next/image";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Gastronomía",
    category: "Fotografía comercial",
    image: "/images/gastronomia.png",
    alt: "Fotografía gastronómica de Rufino",
  },
  {
    number: "02",
    title: "Retratos",
    category: "Fotografía editorial",
    image: "/images/retrato.png",
    alt: "Retrato fotográfico de Rufino",
  },
  {
    number: "03",
    title: "Producto",
    category: "Fotografía publicitaria",
    image: "/images/producto.png",
    alt: "Fotografía comercial de producto",
  },
];

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

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="section-light scroll-mt-20"
      >
        {/* PORTADA FOTOGRÁFICA DEL PORTFOLIO */}
        <div className="relative flex min-h-[85vh] items-end overflow-hidden bg-black text-white md:min-h-screen">
          <Image
            src="/images/portfolio-background.png"
            alt="Fotografía gastronómica de carne a la parrilla con salsa"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* CAPA PARA LEGIBILIDAD */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

          <div className="container-rufino relative z-10 pb-20 pt-36 md:pb-28">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-sm font-bold">
                01 /
              </span>
              <span className="text-sm uppercase tracking-widest">
                Portfolio
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-8xl">
              UNA SELECCIÓN
              <br />
              DE MI TRABAJO.
            </h2>

            <p className="mt-10 max-w-xl text-lg text-white/85">
              Fotografía, vídeo y piezas de comunicación
              creadas para mostrar la personalidad
              de cada proyecto.
            </p>

            <div className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Descubre los proyectos
              <ArrowDown size={18} />
            </div>
          </div>
        </div>

        {/* GALERÍA DE PROYECTOS */}
        <div className="container-rufino py-24 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Trabajo seleccionado
              </p>
              <h3 className="text-4xl font-black tracking-tight md:text-6xl">
                PROYECTOS.
              </h3>
            </div>

            <p className="max-w-sm text-neutral-600">
              Una mirada a diferentes disciplinas,
              estilos y formas de contar historias.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                  <div className="absolute bottom-6 right-6 flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-sm text-neutral-500">
                    {project.number}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="section-dark scroll-mt-20 py-28 md:py-40"
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

          <div className="mt-20 border-t border-neutral-700">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex flex-col gap-5 border-b border-neutral-700 py-10 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-neutral-500">
                    {service.number}
                  </span>

                  <h3 className="text-3xl font-bold md:text-5xl">
                    {service.title}
                  </h3>
                </div>

                <p className="max-w-xs text-neutral-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="section-light scroll-mt-20 py-28 md:py-40"
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
              <p className="text-xl leading-relaxed text-neutral-700 md:text-2xl">
                Soy Rufino, fotógrafo y filmmaker
                en Gran Canaria. Creo contenido
                visual para marcas que quieren
                mostrar lo que las hace diferentes.
              </p>

              <p className="mt-8 text-neutral-500">
                Cada proyecto es una oportunidad
                para explorar nuevas ideas,
                perspectivas y formas de comunicar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="section-dark scroll-mt-20 py-28 md:py-40"
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

          <p className="mt-10 max-w-xl text-neutral-400">
            Tu marca tiene algo que contar.
            Hablemos de cómo darle vida.
          </p>

          <a
            href="https://www.instagram.com/byrubencurbelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 border-b border-white pb-3 text-xl font-semibold transition-opacity hover:opacity-60"
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
