import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lunaris Atelier | Sculpted Aura Lamp",
  description: "Experience a modern e-commerce showcase for the Sculpted Aura Lamp by Lunaris Atelier.",
  metadataBase: new URL("https://agentic-b5ebf2f8.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen text-slate-900 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {children}
      </body>
    </html>
  );
}
