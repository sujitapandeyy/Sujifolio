"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const InstagramLink = () => (
  <Link href="https://www.instagram.com/yourusername" target="_blank" className="ml-1">
    <FaInstagram
      size={28}
      className="hover:scale-110 transition-transform duration-200"
      style={{ color: "#E1306C" }} // Instagram official color
    />
  </Link>
);

export const LinkedInLink = () => (
  <Link href="https://www.linkedin.com/in/yourusername" target="_blank" className="ml-1">
    <FaLinkedin
      size={28}
      className="hover:scale-110 transition-transform duration-200"
      style={{ color: "#0077b5" }}
    />
  </Link>
);

export const FacebookLink = () => (
  <Link href="https://www.facebook.com/sujita.pandey.733/" target="_blank" className="ml-1">
    <FaFacebook
      size={28}
      className="hover:scale-110 transition-transform duration-200"
      style={{ color: "#1877F2" }}
    />
  </Link>
);

export const GitHubLink = () => (
  <Link href="https://github.com/sujitapandeyy" target="_blank" className="ml-1">
    <FaGithub
      size={28}
      className="hover:scale-110 transition-transform duration-200"
      style={{ color: "#333" }}
      
    />
  </Link>
);

const Icons = () => {
  return (
    <div className="flex items-center gap-3">
      <InstagramLink />
      <LinkedInLink />
      <FacebookLink />
      <GitHubLink />
    </div>
  );
};

export default Icons;
