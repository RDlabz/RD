'use client'
import ProjectCard from './ProjectCard';

export default function ProjectList({
    projects,
    setSelectedProject,
}: {
    projects: any[],
    setSelectedProject: any
}) {

    return (
        <div className="relative overflow-hidden py-10">
            <div className="projectList gap-y-5 w-full">
                {projects.map((project) => (
                    <div key={project.title} className="flex justify-center">
                        <ProjectCard project={project} selectProject={setSelectedProject} />
                    </div>
                ))}
            </div>
        </div>
    )
}