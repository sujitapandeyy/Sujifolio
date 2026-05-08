"use client";

import Head from "next/head";
import Image from "next/image";
import landingImg from "../public/Image/landingImg.jpg";
import { FaAngleDoubleRight, FaDownload } from "react-icons/fa";

import {
  FacebookLink,
  GitHubLink,
  InstagramLink,
  LinkedInLink,
} from "@/components/Icons";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

const socialLinks = [
  { Link: GitHubLink, label: "GitHub" },
  { Link: LinkedInLink, label: "LinkedIn" },
  { Link: FacebookLink, label: "Facebook" },
  { Link: InstagramLink, label: "Instagram" },
];

const ringIcons = [
  { Link: GitHubLink, label: "GitHub", angle: 25 },
  { Link: LinkedInLink, label: "LinkedIn", angle: -35 },
  { Link: FacebookLink, label: "Facebook", angle: -15 },
  { Link: InstagramLink, label: "Instagram", angle: 5 },
].map(({ Link, label, angle }) => {
  const r = 200;
  const rad = (angle * Math.PI) / 180;
  const x = Math.round(Math.cos(rad) * r * 100) / 100;
  const y = Math.round(Math.sin(rad) * r * 100) / 100;
  const offsetFix = x < 0 ? -10 : 0;
  return { Link, label, x, y, offsetFix };
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujita Pandey — Web Developer</title>
      </Head>

      <main className="relative min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 xl:px-28 gap-12 md:gap-16 py-16 overflow-hidden">

        {/* Soft background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/3 -translate-x-1/3" />

        {/* ── LEFT ── */}
        <section className="relative z-10 md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">

          {/* <div className="flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </span>
          </div> */}

          <p className="text-sm font-medium tracking-[0.2em] uppercase text-indigo-400">
            ✨Hello, I&apos;m 
          </p>

          <div>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-gray-900">
              Sujita Pandey
            </h1>
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
              Web Developer From Nepal 🇳🇵
            </span>
            <div className="h-px w-6 bg-indigo-300" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="relative h-13 min-w-[180px] px-1 bg-primary hover:bg-indigo-700 text-white rounded-full shadow-md transition duration-300 font-medium flex items-center select-none group">
              <span className="absolute left-2/5 -translate-x-1/2 pointer-events-none">
                Let&apos;s Connect
              </span>
              <span className="ml-auto w-11 h-11 rounded-full bg-white text-indigo-600 flex items-center justify-center transition-transform duration-500 group-hover:rotate-360">
                <FaAngleDoubleRight size={24} />
              </span>
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
              <FaDownload size={11} />
              Download CV
            </button>
          </div>
        </section>

        {/* ── RIGHT ── */}
        <section className="relative z-10 md:w-1/2 flex items-center justify-center">
          <div className="relative flex items-center justify-center">

            <div
              className="absolute w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full border-2 border-dashed border-indigo-200"
              style={{ animation: "slowSpin 12s linear infinite" }}
            />
            <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-indigo-100" />

            <div className="relative w-56 h-56 md:w-[290px] md:h-[290px] rounded-full overflow-hidden z-10 ring-4 ring-white shadow-2xl shadow-indigo-100">
              <Image
                src={landingImg}
                alt="Sujita Pandey"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Social icon pills */}
            {ringIcons.map(({ Link, label, x, y, offsetFix }) => (
              <div
                key={label}
                className="absolute z-20 group"
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
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingLeft: "8px",
                    paddingRight: "8px",
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

            {/* Floating badge */}
            <div
              className="absolute -bottom-17 -left-5 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-lg"
              style={{ animation: "floatBadge 4s ease-in-out infinite" }}
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-base flex-shrink-0">💻</div>
              <div>
                <div className="text-xs font-bold text-gray-800">Laravel Dev</div>
                <div className="text-[10px] text-indigo-500 font-medium">Full-Stack</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile social row */}
        <div className="flex md:hidden gap-3 justify-center z-10">
          {socialLinks.map(({ Link, label }) => (
            <div key={label} className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-100 shadow-sm">
              <Link />
            </div>
          ))}
        </div>
        {/* Stars strip */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-0"
          style={{
            backgroundImage: `url('/Image/stars.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
      </main>

      <AboutMe />
      <Projects />

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