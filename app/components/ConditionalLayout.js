"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  // Don't show Header and Footer on Studio pages
  if (pathname?.startsWith('/studio')) {
    return children;
  }
  
  // Show Header and Footer on all other pages
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
