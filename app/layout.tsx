import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lucklita Theng",
  description:
    "Technologist, social impact founder, and optimist obsessed with finding and solving the cruxes of everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
