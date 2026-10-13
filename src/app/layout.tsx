import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "RUFINO. | Fotografía, vídeo y comunicación visual",
    template: "%s | RUFINO.",
  },
  description:
    "Fotografía, vídeo y comunicación visual para marcas y empresas en Gran Canaria. Descubre el trabajo de RUFINO.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
