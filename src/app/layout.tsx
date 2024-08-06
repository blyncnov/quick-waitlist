import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waitlist Boiler Template",
  description: "Quick Waitlist Boiler Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
