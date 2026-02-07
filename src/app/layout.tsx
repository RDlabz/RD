import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { VT323, Share_Tech_Mono, Inconsolata } from "next/font/google";
import Window from "@/components/Window";

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
  creator: "Ardi Stringa",
  description: "Slick, Efficient and Secured Applications",
  keywords: ["Labs", "Dev", "Games", "Cyber Security", "Applications"],
  manifest: '/RD/manifest.json',
  themeColor: "#5f0404",
  icons: {
    icon: "/RD/favicon.ico",
    shortcut: "/RD/rdlabs.png",
    apple: "/RD/rdlabs.png",
  },
  openGraph: {
    title: "RDLabs",
    description: "Slick, Efficient and Secured Applications",
    url: "https://rdlabz.github.io/RD/",
    type: "website",
    images: [
      {
        url: "https://rdlabz.github.io/RD/rdlabs.png",
        width: 1200,
        height: 1200,
        alt: "RDLabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RDLabs",
    description: "Slick, Efficient and Secured Applications",
    images: ["https://rdlabz.github.io/RD/rdlabs.png"],
    site: "@twitterhandle",
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${tech.variable} ${body.variable} antialiased bg-rd-base`}
      >
        <LoadingScreen>
          <Window title="nav">
            <Header />
          </Window>
          <main>
            {children}
          </main>
        </LoadingScreen>
      </body>
    </html>
  );
}
