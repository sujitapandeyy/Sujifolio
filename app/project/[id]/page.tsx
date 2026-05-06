import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectById, projects } from '@/lib/projects';

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const projectId = Number(params.id);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4 md:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8">
          <ArrowLeft size={18} />
          Back to projects
        </Link>

        <div className="rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-slate-200 border border-slate-100">
          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] p-10 bg-gradient-to-br from-slate-100 via-white to-cyan-50">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-emerald-500 to-cyan-500 p-10 flex flex-col items-center justify-center text-white text-center shadow-lg shadow-emerald-200/50">
              <div className="mb-6 text-6xl">{project.icon}</div>
              <div className="text-sm uppercase tracking-[0.4em] text-white/80 font-semibold mb-4">
                {project.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {project.title}
              </h1>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold">
                  Project details
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  {project.description}
                </p>
                <p className="text-sm leading-7 text-slate-600">
                  {project.details}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-3">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold mb-3">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.lang.map((lang) => (
                      <span key={lang} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/70 hover:opacity-95 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
