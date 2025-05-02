"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        SP
      </MotionLink>
    </div>
  );
};

export default Logo;
