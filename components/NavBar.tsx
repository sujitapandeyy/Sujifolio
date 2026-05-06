"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-current absolute left-0 -bottom-0.5 transition-all duration-300 ease-out group-hover:w-full ${
          pathname === href ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed z-50 top-5 left-4 right-4 md:left-20 md:right-20 
      px-6 md:px-32 py-4 flex justify-between items-center 
      text-lg md:text-xl rounded-xl transition-all duration-500 backdrop-blur-lg
      ${scrolled ? "bg-white/10 shadow-lg" : "bg-black shadow-md"}`}
    >
      <Logo />

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <CustomLink
          href="/Projects"
          title="View Projects"
          className={`mx-4 font-semibold ${
            scrolled ? "text-black" : "text-white"
          }`}
        />
      </nav>

      {/* Mobile Toggle */}
      <button className={`md:hidden ${scrolled ? "text-black" : "text-white"}`} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 right-0 flex flex-col items-center gap-4 
        p-6 md:hidden bg-white text-black shadow-md rounded-b-xl 
        transition-all duration-300 origin-top
        ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        < CustomLink href="/Projects" title="View Projects" className="text-black" />
      </div>
    </header>
  );
};

export default NavBar;
