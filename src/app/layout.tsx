import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const spaceMono = Space_Mono({
   subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-space-mono', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RDLabs",
  description: "Slick, Efficient and Secured Applications",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased rd-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
