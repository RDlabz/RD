import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { VT323 } from "next/font/google";
import { Share_Tech_Mono } from "next/font/google";

const pixel = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--rd-pixel"
});

const tech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--rd-terminal"
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
        className={`${pixel.variable} ${tech.variable} antialiased bg-rd-blue`}
      >
        {/* <LoadingScreen /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
