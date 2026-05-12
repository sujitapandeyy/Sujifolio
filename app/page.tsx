"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";
import landingImg from "../public/Image/landingImg.jpg";
import { FaAngleDoubleRight, FaDownload } from "react-icons/fa";
import Contact from "@/components/Contact";

import {
  FacebookLink,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  GmailLink,
} from "@/components/Icons";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import { Download } from "lucide-react";

const socialLinks = [
  { Link: GitHubLink, label: "GitHub" },
  { Link: LinkedInLink, label: "LinkedIn" },
  { Link: FacebookLink, label: "Facebook" },
  { Link: InstagramLink, label: "Instagram" },
  { Link: GmailLink, label: "Gmail" },
];
const ringIcons = [
  { Link: GitHubLink, label: "GitHub", angle: 25 },
  { Link: LinkedInLink, label: "LinkedIn", angle: -35 },
  { Link: FacebookLink, label: "Facebook", angle: -15 },
  { Link: InstagramLink, label: "Instagram", angle: 5 },
  { Link: GmailLink, label: "Gmail", angle: -55 },
].map(({ Link, label, angle }) => {
  const r = 220;
  const rad = (angle * Math.PI) / 190;
  const x = Math.round(Math.cos(rad) * r * 100) / 100;
  const y = Math.round(Math.sin(rad) * r * 100) / 100;
  const offsetFix = x < 0 ? -10 : 0;
  return { Link, label, x, y, offsetFix };
});

export default function Home() {
  const [hover, setHover] = useState<"left" | "right" | null>(null);
  return (
    <>
      <main className="relative w-full py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #f1638e 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="relative z-10 lg:mt-28 mt-16 lg:mb-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8">

          {/* ── LEFT ── */}
          <section className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-indigo-400">
              ✨Hello, I&apos;m
            </p>

            <h1 className="text-4xl uppercase md:text-4xl xl:text-5xl font-black leading-tight tracking-tight text-gray-900">
              Sujita{" "}
              <span className=" text-violet-500" style={{ fontFamily: "Georgia, serif" }}>
                Pandey</span>
            </h1>

            <div className="flex md:hidden justify-center">
              <div className="relative w-52 h-52 overflow-hidden rounded-full ring-4 ring-white shadow-2xl shadow-indigo-100">
                <Image
                  src={landingImg}
                  alt="Sujita Pandey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <p className="max-w-md text-sm text-gray-500 leading-relaxed mx-auto md:mx-0">
              A <span className="font-semibold text-gray-800">BCA graduate</span> currently working as a{" "}
              <span className="font-semibold text-gray-800">Laravel Developer</span> with experience as a{" "}
              <span className="font-semibold text-gray-800">QA Tester</span>, ensuring software quality,
              stability, and smooth user experiences.
            </p>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-px w-6 bg-indigo-300" />
              <span className="text-xs font-semibold text-indigo-500 tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <span>Web Developer From Nepal</span>
                  <img
                    src="/Image/nepal-flag.png"
                    alt="Nepal Flag"
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                </div>
              </span>
              <div className="h-px w-6 bg-indigo-300" />
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2 lg:mt-8">
              <button className="relative h-13 min-w-[180px] px-1 bg-primary hover:bg-indigo-700 text-white rounded-full shadow-md transition duration-300 font-medium flex items-center select-none group">
                <span className="absolute left-2/5 -translate-x-1/2 pointer-events-none">
                  Let&apos;s Connect
                </span>
                <span className="ml-auto w-11 h-11 rounded-full bg-white text-indigo-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-360">
                  <FaAngleDoubleRight size={24} />
                </span>
              </button>

              <div className="relative">
                <button
                  className="relative h-13 min-w-[180px] px-1 bg-white text-gray-900 rounded-full shadow-md font-medium flex items-center overflow-hidden select-none"
                  onMouseLeave={() => setHover(null)}
                >
                  {/* Hover zones */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1/2 z-10 rounded-l-full"
                    onMouseEnter={() => setHover("left")}
                    onClick={() => window.open("/pdf/sujitacv.pdf", "_blank")}
                  />
                  <div
                    className="absolute right-0 top-0 bottom-0 w-1/2 z-10 rounded-r-full"
                    onMouseEnter={() => setHover("right")}
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = "/pdf/sujitacv.pdf";
                      a.download = "sujitacv.pdf";
                      a.click();
                    }}
                  />

                  {/* Sliding pill */}
                  <span
                    className={`absolute top-1 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center transition-all duration-300 z-20 pointer-events-none ${hover === "left" ? "left-1" : "left-[calc(100%-48px)]"
                      }`}
                  >
                    {hover === "left" ? <FaEye size={18} /> : <FaDownload size={18} />}
                  </span>

                  {/* Labels */}
                  <span
                    className={`absolute text-sm pointer-events-none z-10 transition-all duration-200 ${hover === "left"
                      ? "left-14 text-indigo-500"
                      : hover === "right"
                        ? "opacity-0 left-14"
                        : "left-1/2 -translate-x-1/2 text-gray-700"
                      }`}
                  >
                    {hover === "left" ? "View" : "Resume"}
                  </span>

                  <span
                    className={`absolute right-14 text-sm text-indigo-500 pointer-events-none z-10 transition-opacity duration-200 ${hover === "right" ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    Download
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Mobile social row — below image */}
          <div className="flex md:hidden gap-3 justify-center z-10">
            {socialLinks.map(({ Link, label }) => (
              <div key={label} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-100 shadow-sm">
                <Link />
              </div>
            ))}
          </div>

          {/* ── RIGHT ── */}
          <section className="w-full md:w-1/2 hidden md:flex flex-col items-center justify-center gap-6">            {/* Fixed-size ring container — prevents layout blowout */}
            <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[390px] md:h-[390px]">

              {/* Spinning dashed ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200"
                style={{ animation: "slowSpin 12s linear infinite" }}
              />
              {/* Static rings */}
              <div className="absolute inset-[20px] rounded-full border border-indigo-200" />
              {/* <div className="absolute inset-[40px] rounded-full border border-indigo-100" /> */}

              {/* Photo */}
              <div className="absolute inset-[50px] overflow-hidden rounded-full ring-4 ring-white shadow-2xl shadow-indigo-100">
                <Image
                  src={landingImg}
                  alt="Sujita Pandey"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Social icon pills — desktop only */}
              {ringIcons.map(({ Link, label, x, y, offsetFix }) => (
                <div
                  key={label}
                  className="absolute z-20 group hidden md:block"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-10%, -50%) translate(${x + offsetFix}px, ${y}px)`,
                  }}
                >
                  <div
                    className="flex items-center rounded-full overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md"
                    style={{
                      width: "52px",
                      padding: "8px",
                      transition: "width 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s, border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.width = "120px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.width = "52px"; }}
                  >
                    <span className="flex-shrink-0 flex items-center justify-center">
                      <Link />
                    </span>
                    <span className="ml-2 text-xs font-medium text-indigo-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>


          </section>
        </div>
      </main>

      <AboutMe />
      <Projects />
      <Contact />

      <style jsx global>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </>
  );
}