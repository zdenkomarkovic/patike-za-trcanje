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
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] =
    useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleCategoriesDropdown = () =>
    setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  const closeCategoriesDropdown = () => setIsCategoriesDropdownOpen(false);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCategoriesDropdownOpen &&
        !event.target.closest(".categories-dropdown")
      ) {
        setIsCategoriesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoriesDropdownOpen]);

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
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md primarytext"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4  md:px-14">
        <div className="flex justify-between items-center py-2">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/logobeli.png"}
              width={60}
              height={60}
              alt="patike za trcanje"
              className={` ${scrolled ? "hidden" : ""}`}
            />
            <Image
              src={"/logocrni.png"}
              width={60}
              height={60}
              alt="patike za trcanje"
              className={` ${scrolled ? "" : "hidden"}`}
            />
            <div>
              <p className={`font-bold text-xl leading-tight`}>Sesame Shop</p>
              <p className="text-base">Sport Store</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 font-bold  text-2xl">
            <Link href="/" className=" relative group">
              Početna
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#494179]  transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link href="/#o-meni" className=" relative group">
              O meni
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#494179]  transition-all duration-200 group-hover:w-full"></span>
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative group categories-dropdown"
              onMouseEnter={() => setIsCategoriesDropdownOpen(true)}
              onMouseLeave={() => setIsCategoriesDropdownOpen(false)}
            >
              <button className="font-bold relative group flex items-center">
                Kategorije
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#494179] transition-all duration-200 group-hover:w-full"></span>
                <svg
                  className={`ml-1 w-7 h-7 transition-transform duration-200 ${isCategoriesDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transition-all duration-200 ${
                  isCategoriesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/kategorije/${category.slug.current}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#494179] transition-colors duration-200 text-nowrap"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/kontakt" className=" relative group">
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#494179] transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700olors hover:text-blue-600 hover:bg-gray-100 transition-c"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${scrolled ? "" : "text-white"}  transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
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

              {/* Categories Dropdown for Mobile */}
              <div className="border-b border-gray-200">
                <button
                  onClick={toggleCategoriesDropdown}
                  className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-between"
                >
                  Kategorije
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isCategoriesDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Dropdown Menu */}
                <div
                  className={`transition-all duration-200 ${
                    isCategoriesDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      href={`/kategorije/${category.slug.current}`}
                      onClick={closeMenu}
                      className="block text-gray-600 hover:text-blue-600 font-medium transition-colors py-2 px-8 rounded-md hover:bg-gray-50"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

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
