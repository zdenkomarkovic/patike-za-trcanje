"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { categoriesQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(categoriesQuery);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <header
      className={` fixed top-0 z-50 w-full ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md text-primary"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/logo.jpg"}
              width={60}
              height={60}
              alt="patike za trcanje"
              className=""
            />
            <div>
              <p className={`font-bold text-xl leading-tight`}>Sesame Shop</p>
              <p className="text-base text-gray-100">Sport Store</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 font-bold">
            <Link href="/" className=" relative group">
              Početna
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#f75760] to-[#954ffd]  transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* Categories from Sanity */}
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/kategorije/${category.slug.current}`}
                className=" relative group"
              >
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#f75760] to-[#954ffd]  transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            <Link href="/kontakt" className=" relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#f75760] to-[#954ffd]  transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-white transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-auto bg-white " : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 border-t">
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
              >
                Početna
              </Link>

              {/* Categories from Sanity */}
              {categories.map((category) => (
                <Link
                  key={category._id}
                  href={`/kategorije/${category.slug.current}`}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                >
                  {category.name}
                </Link>
              ))}

              <Link
                href="/kontakt"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
