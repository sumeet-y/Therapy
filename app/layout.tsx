import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const Playfair_Display_Sans = Playfair_Display({
  subsets:["latin"],
  variable: "--font-playfair-display",
  weight: ["400","500", "700"],

});

export const metadata: Metadata = {
  title: "Dr. Serena Blake - Psychologist",
  description: "Psychologist in Los Angeles specializing in emotional healing and personal growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${Playfair_Display_Sans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
