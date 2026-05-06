"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className={`
          w-12 h-12 flex items-center justify-center rounded-full 
          text-xl font-bold transition-all duration-500 shadow
          ${scrolled ? "bg-black text-white" : "bg-white text-black"}
        `}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
      >
        SP
      </MotionLink>
    </div>
  );
};

export default Logo;
