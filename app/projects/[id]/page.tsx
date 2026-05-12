import { projects } from "@/lib/projects";
import ProjectDetail from "./ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}