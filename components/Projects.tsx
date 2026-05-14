"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projects";

const useCardsVisible = () => {
  const [cardsVisible, setCardsVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setCardsVisible(1);
      else if (w < 1024) setCardsVisible(3);
      else setCardsVisible(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardsVisible;
};

const Projects: React.FC = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const CARDS_VISIBLE = useCardsVisible();
  const categories = ["All", "FullStack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const maxIndex = Math.max(0, filteredProjects.length - CARDS_VISIBLE);

  // Reset index when CARDS_VISIBLE changes (e.g. resize) or filter changes
  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [CARDS_VISIBLE, maxIndex]);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setCurrentIndex(0);
  };

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const truncateWords = (text: string, limit = 12): string => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "…" : text;
  };

  return (
    <section id="projects" className="relative py-10 px-4 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Featured{" "}
            <span className="italic text-violet-500" style={{ fontFamily: "Georgia, serif" }}>
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-4 ml-10" />
          <p className="text-xl text-gray-600 max-w-2xl">Some of my recent projects</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${CARDS_VISIBLE} + ${(CARDS_VISIBLE - 1) * 24 / CARDS_VISIBLE}px)))`,
              }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(CARDS_VISIBLE - 1) * 24}px) / ${CARDS_VISIBLE})`,
                  }}
                >
                  <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 group overflow-hidden hover:scale-105 h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-38 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/40 text-white border-white/30"
                            variant="outline"
                            onClick={() => router.push(`/projects/${project.id}`)}
                            title="View Details"
                          >
                            <Eye size={16} />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white/20 hover:bg-white/40 text-white border-white/30"
                            variant="outline"
                            onClick={() => window.open(project.githubUrl, "_blank")}
                            title="GitHub"
                          >
                            <Github size={16} />
                          </Button>
                          {project.liveUrl !== "#" && (
                            <Button
                              size="sm"
                              className="bg-white/20 hover:bg-white/40 text-white border-white/30"
                              variant="outline"
                              onClick={() => window.open(project.liveUrl, "_blank")}
                              title="Live Demo"
                            >
                              <ExternalLink size={16} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="ml-2 flex-shrink-0 px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {truncateWords(project.description, 12)}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 flex items-center gap-1 text-xs"
                          onClick={() => router.push(`/projects/${project.id}`)}
                        >
                          <Eye size={14} />
                          Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-1 text-xs"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github size={14} />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        {filteredProjects.length > CARDS_VISIBLE && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-indigo-500 w-6" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;