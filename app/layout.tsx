import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khanh Nguyen",
  description: "This is Khanh Nguyen's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth snap-mandatory snap-y overflow-auto text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
