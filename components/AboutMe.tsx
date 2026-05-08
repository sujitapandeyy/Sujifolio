"use client";

import React, { useState } from "react";
import Image from "next/image";

import devImg from "../public/Image/bg.jpg";
import studyImg from "../public/Image/abc.jpg";
import lifeImg from "../public/Image/landingImg.jpg";

const tabs = [
  {
    id: "dev",
    title: "Work Experience",
    badge: "Laravel Developer",
    image: devImg,
    overlayTitle: "Full stack Developer",
    overlaySub: "Laravel , QA Tester",
    desc: "I build modern, responsive, and high-performance web applications using React and Next.js. My focus is on clean UI, scalability, and delivering seamless user experiences with strong performance optimization.",
    skills: ["Laravel", "Livewire", "QA", "PHP", "JavaScript", "React", "Next.js"],
  },
  {
    id: "study",
    title: "Education",
    badge: "Bachelor of Computer Applications",
    image: studyImg,
    overlayTitle: "BCA Graduate",
    overlaySub: "Computer Applications",
    desc: "I have completed my Bachelor's degree in Computer Application (BCA). I continuously explore modern technologies, strengthen my development skills, and improve my problem-solving abilities.",
    skills: ["DSA", "OOP", "Databases", "Networking", "Linux"],
  },
  {
    id: "life",
    title: "Personal Life",
    badge: "Creative · Growth",
    image: lifeImg,
    overlayTitle: "Personal Life",
    overlaySub: "Growth · Creativity · Balance",
    desc: "Beyond coding, I enjoy learning, experimenting, and building creative projects. I focus on consistency, personal growth, and maintaining a balance between creativity and discipline.",
    skills: ["Learning", "Side Projects", "Reading", "Design", "Fitness", "Music"],
  },
];

export default function AboutPage() {
  const [active, setActive] = useState(0);
  const [cardVisible, setCardVisible] = useState(true);
const [hoveredStack, setHoveredStack] = useState<number | null>(null);
  function switchTab(idx: number) {
    if (idx === active) return;
    setCardVisible(false);
    setTimeout(() => {
      setActive(idx);
      setCardVisible(true);
    }, 180);
  }

  function getStackPos(i) {
    return ((i - active) % 3 + 3) % 3;
  }

  const posStyles = [
    "z-30 rotate-0 scale-100 translate-x-0 translate-y-0 opacity-100 shadow-2xl",
    "z-20 rotate-3 scale-[0.97] translate-x-3 translate-y-3 opacity-90 brightness-90",
    "z-10 rotate-6 scale-[0.94] translate-x-6 translate-y-6 opacity-75 brightness-75",
  ];

  const hoverPosStyles = [
    "-rotate-1 scale-[1.02] -translate-y-1",
    "rotate-2 scale-[0.99] translate-x-2 translate-y-2",
    "rotate-5 scale-[0.96] translate-x-4 translate-y-4",
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 bg-white overflow-hidden font-[Sora,sans-serif]">

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* ── LEFT: Image stack ── */}
        <div>
          <div className="relative w-3/4 h-[420px]" style={{ perspective: "1000px" }}>
            {tabs.map((tab, i) => {
              const pos = getStackPos(i);
              const isHovered = hoveredStack === i;
              return (
                <div
                  key={tab.id}
                  onClick={() => switchTab(i)}
                  onMouseEnter={() => setHoveredStack(i)}
                  onMouseLeave={() => setHoveredStack(null)}
                  className={`absolute inset-0 rounded-2xl overflow-hidden border-[3px] border-white cursor-pointer
                    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${posStyles[pos]}
                    ${isHovered ? hoverPosStyles[pos] : ""}
                  `}
                >
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-cover pointer-events-none"
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                      transition-opacity duration-300
                      ${pos === 0 && isHovered ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-white font-semibold text-sm">{tab.overlayTitle}</div>
                      <div className="text-white/70 text-xs mt-0.5">{tab.overlaySub}</div>
                    </div>
                  </div>

                  {/* Click-to-switch hint on back cards */}
                  {pos !== 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full
                          transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                      >
                        Click to view
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {tabs.map((_, i) => (
              <button
                key={i}
                onClick={() => switchTab(i)}
                className={`h-2 rounded-full transition-all duration-300
                  ${active === i ? "w-6 bg-violet-500" : "w-2 bg-gray-300 hover:bg-violet-300"}`}
                aria-label={`Switch to ${tabs[i].title}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            Who{" "}
            <span className="italic text-violet-500" style={{ fontFamily: "Georgia, serif" }}>
              I Am
            </span>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-7 max-w-sm">
            BCA graduate & full-stack developer.
          </p>

          {/* Tab switcher */}
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-5">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => switchTab(i)}
                className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-medium rounded-lg px-3 py-2 transition-all duration-200
                  ${active === i
                    ? "bg-white text-violet-600 shadow-sm border border-violet-100"
                    : "text-gray-500 hover:text-gray-800 hover:bg-white/50"
                  }`}
              >
                {tab.id === "dev" && (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {tab.id === "study" && (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2 4-2" />
                  </svg>
                )}
                {tab.id === "life" && (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
                {tab.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Content card */}
          <div
            className={`bg-white border border-gray-100 rounded-2xl p-5 mb-5 transition-all duration-200
              hover:border-violet-200 hover:shadow-sm
              ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5"}`}
            style={{ transition: "opacity 0.18s ease, transform 0.18s ease, border-color 0.2s, box-shadow 0.2s" }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <h3 className="text-sm font-semibold text-gray-900">{tabs[active].title}</h3>
              <span className="text-[10px] font-semibold bg-violet-50 text-violet-600 px-2.5 py-0.5 rounded-full border border-violet-100">
                {tabs[active].badge}
              </span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">{tabs[active].desc}</p>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {tabs[active].skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white
                           transition-all duration-150 cursor-default
                           hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-150">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in touch
            </button>
            <button className="flex items-center gap-2 border border-gray-200 hover:border-violet-300 hover:text-violet-600 active:scale-95 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View work
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}