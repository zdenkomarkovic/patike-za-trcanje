import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sesame Shop - Patike za trčanje | Sreten Spasić",
  description:
    "Profesionalne patike za trčanje raznih brendova. Za početnike, rekreativce i napredne trkače. Kvalitet i tradicija.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: ["", ""],
  alternates: {
    canonical: "https://patikezatrcanje.rs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-lg md:text-xl `}
      >
        <div className="main-layout">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
