"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/app/constants/site";
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
  return (
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(categoriesQuery);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
    <header
      className={` shadow-lg sticky top-0 z-50 ${
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
              <p className={`font-bold text-gray-900 text-xl  leading-tight`}>
                Saucony Shop
              </p>
              <p className="text-base text-gray-600">Sreten Spasic</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {SITE_CONFIG.navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative flex items-center">
                Kategorije
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/kategorije/${category.slug.current}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <div className="font-medium">{category.name}</div>
                      {category.description && (
                        <div className="text-sm text-gray-500 mt-1">{category.description}</div>
                      )}
                    </Link>
                  ))}
                  <div className="border-t mt-2 pt-2">
                    <Link
                      href="/kategorije"
                      className="block px-4 py-2 text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                    >
                      Sve kategorije →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
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
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {SITE_CONFIG.navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Categories */}
              <div className="border-t pt-4 mt-4">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Kategorije
                </div>
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/kategorije/${category.slug.current}`}
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/kategorije"
                  onClick={closeMenu}
                  className="block text-blue-600 hover:text-blue-700 font-medium transition-colors py-2 px-4 rounded-md hover:bg-blue-50 mt-2"
                >
                  Sve kategorije →
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
