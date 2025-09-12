import type { Metadata } from "next";
import "./assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Funções e Modularização",
  description: "Projeto de aprendizagem colaborativa(PAC), sobre Funções e Modularização.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
