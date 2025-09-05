import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { VT323, Share_Tech_Mono, Inconsolata } from "next/font/google";

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

const body = Inconsolata({
  subsets: ["latin"],
  weight: "500",
  variable: "--rd-text"
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
        className={`${pixel.variable} ${tech.variable} ${body.variable} antialiased bg-rd-blue`}
      >
        {/* <LoadingScreen /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
