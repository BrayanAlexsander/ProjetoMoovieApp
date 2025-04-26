import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieApp 🎬",
  description: "Descubra e explore filmes incríveis!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-900 via-black to-slate-950 text-slate-100 min-h-screen flex flex-col`}
      >
        <header className="w-full p-6 mb-8 bg-slate-950/70 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">
              MovieApp
            </h1>
            <span className="text-sm text-slate-400">
              O Catálogo de Filmes 🎥
            </span>
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-6">
          {children}
        </main>

        <footer className="w-full p-6 mt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MovieApp — Desenvolvido com 💖
        </footer>
      </body>
    </html>
  );
}
