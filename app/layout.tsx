import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hadi hajiasgharzadeh",
  description: "my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`bg-gradient-to-r from-neutral-900 to-neutral-950 ${inter.className}`}>{children}</body>
    </html>
  );
}
