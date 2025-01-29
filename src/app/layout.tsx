import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BITNEWS",
  description: "BITNEWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  className={rubik.variable} lang="pt-br">
      <body className="bg-zinc-800 text-white antialiased">{children}</body>
    </html>
  );
}
