"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import Icons, { GitHubLink, InstagramLink, LinkedInLink } from "./Icons";

const MotionLink = motion(Link);
interface CustomLinkProps {
    href: string;
    title: string;
    className?: string; // Optional, since you have a default value
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
  return (
    <header className="w-full px-32 py-5 justify-between flex items-center text-xl">
      <Logo />
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/About-me" title="About Me" className="mx-4" />
        <CustomLink href="/Projects" title="Projects" className="mx-4" />
        <CustomLink href="/Contact" title="Contact" className="mx-4" />
      </nav>
      <nav className="flex space-x-4 items-center">
        <Link href="https://www.linkedin.com/in/sujita-pandey-5a45302b6" target="_blank">
          <BsLinkedin
            size={24}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank">
          <BsFacebook
            size={24}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          />
        </Link>
<GitHubLink/>
<InstagramLink/>
      </nav>
    </header>
  );
};

export default NavBar;
