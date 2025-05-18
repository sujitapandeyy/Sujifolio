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
        className={`h-[2px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 font-bold ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed left-4 right-4 md:left-[80px] md:right-[80px] top-[20px] z-50 px-6 md:px-32 py-4 flex justify-between items-center text-lg md:text-xl rounded transition duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent shadow-md"
      }`}
      style={{ backdropFilter: "saturate(180%) blur(10px)" }}
    >
      <Logo />

      {/* Desktop Nav */}
      <nav className="hidden md:flex">
        <CustomLink href="/Projects" title="View Projects" className="mx-4 text-black font-semibold" />
      </nav>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-black " onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white text-black p-6 flex flex-col items-center gap-4 md:hidden shadow-md rounded-b">
          <CustomLink href="/Projects" title="View Projects" className="text-black" />
        </div>
      )}
    </header>
  );
};

export default NavBar;
