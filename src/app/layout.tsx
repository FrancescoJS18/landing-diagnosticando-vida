import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Diagnosticando Vida",
  description: "Entrena con casos clínicos reales y domina el diagnóstico por imágenes.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable}`}>
      <body style={{ fontFamily: 'var(--font-roboto), sans-serif' }}>{children}</body>
    </html>
  );
}
