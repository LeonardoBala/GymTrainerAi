import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import { Navbar } from "@/components/Navbar";
import  Footer  from "@/components/Footer";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "TrainerAI",
  description: "Created by Leonardo Bala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ConvexClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        {/* Background that is GRID */}
        <div className="fixed inset-0 -z-1 animated-gradient-background">
        {/* L'overlay del gradiente trasparente non è più necessario con il nuovo sfondo animato */}
        </div>

        <main className="pt-24 flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
