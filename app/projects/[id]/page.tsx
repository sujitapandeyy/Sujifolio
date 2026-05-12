"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Images } from "lucide-react";
import { projects } from "@/lib/projects";
import { useState, use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: Props) {
  const { id } = use(params);
  const router = useRouter();
  const project = projects.find((p) => p.id === Number(id));
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 gap-4">
        <p className="text-xl">Project not found.</p>
        <button
          onClick={() => router.push("/#projects")}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Back */}
        <button
          onClick={() => router.push("/#projects")}
          className="absolute top-6 left-6 flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Title */}
        <div className="absolute bottom-8 left-6 right-6 max-w-5xl mx-auto">
          <span className="inline-block px-3 py-1 bg-indigo-500 text-white text-xs rounded-full font-medium mb-3">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* Description + Links */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About this project</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Links</h2>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-700 transition-all duration-200 text-sm font-medium group"
            >
              <Github size={18} />
              View on GitHub
              <ExternalLink size={14} className="ml-auto opacity-50 group-hover:opacity-100" />
            </a>

            {project.liveUrl !== "#" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 transition-all duration-200 text-sm font-medium group"
              >
                <ExternalLink size={18} />
                Live Demo
                <ExternalLink size={14} className="ml-auto opacity-50 group-hover:opacity-100" />
              </a>
            ) : (
              <div className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-400 text-sm">
                <ExternalLink size={18} />
                Live Demo unavailable
              </div>
            )}

            {/* Tech stack */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-indigo-500" />
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            Challenges &amp; Solutions
          </h2>
          <div className="space-y-3">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3"
              >
                <AlertTriangle size={16} className="mt-0.5 text-amber-500 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Images size={20} className="text-indigo-500" />
              Screenshots
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img
                src={project.screenshots[activeScreenshot]}
                alt={`Screenshot ${activeScreenshot + 1}`}
                className="w-full h-64 md:h-96 object-cover transition-all duration-300"
              />
            </div>
            {project.screenshots.length > 1 && (
              <div className="flex gap-3 mt-4">
                {project.screenshots.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreenshot(i)}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      i === activeScreenshot
                        ? "border-indigo-500 shadow-md scale-105"
                        : "border-gray-200 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt={`Thumb ${i + 1}`} className="w-24 h-16 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Other Projects</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => router.push(`/projects/${p.id}`)}
                  className="text-left rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-md hover:border-indigo-200 transition-all duration-200 group"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="px-4 py-3">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-1">{p.title}</p>
                    <p className="text-xs text-indigo-500 mt-1">{p.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}