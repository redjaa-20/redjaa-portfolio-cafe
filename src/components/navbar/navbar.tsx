"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-0 w-full z-50 px-5 md:px-0 transition-all duration-300 lg:top-4
    ${isScrolled ? "2xl:top-7" : "2xl:top-14"}
    `}
    >
      <div
        className={`relative mx-auto flex items-center justify-between transition-all duration-300 shadow-md rounded-2xl lg:rounded-full h-[60px] pl-4 pr-3 bg-custom-green-500
        ${
          isScrolled
            ? "lg:pl-5 max-w-2xl lg:bg-beige-100 lg:shadow-md lg:h-[60px]"
            : "lg:px-0 max-w-6xl lg:h-[70px] lg:bg-transparent lg:shadow-none"
        }
        `}
      >
        <div className="text-2xl lg:text-2xl font-extrabold font-playfair-display text-beige-100 lg:text-custom-green-500">
          Redjaa
        </div>
        <div
          className={`hidden absolute lg:flex justify-between items-center bg-beige-100 py-2 pl-10 pr-2 rounded-full font-semibold transition-all duration-300
            ${isScrolled ? "lg:mt-0 w-100 right-0" : "lg:mt-10 w-120 right-5"}
            `}
        >
          <Link href="#" prefetch>
            Home
          </Link>
          <Link href="#" prefetch>
            Menu
          </Link>
          <Link href="#" prefetch>
            About
          </Link>
          <Link
            href="#"
            className="bg-custom-green-500 hover:bg-custom-green-600 px-7 py-3 rounded-full text-custom-text-secondary text-sm transition-all duration-300"
            prefetch
          >
            Contact Us
          </Link>
        </div>
        <button className="text-beige-100 lg:hidden flex items-center justify-center p-2">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
