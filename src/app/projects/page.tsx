'use client'
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import en from '@/LabContent/en.json'

export default function App() {

  const projects = en.projects
  const [selectedProject, setSelectedProject] = useState<any>({})

  const selectProject = (project: any) => {
    setSelectedProject(project)
  }

  return (
    <>
      <h2>{projects.title}</h2>
      <div className="flex flex-wrap gap-2 justify-evenly w-full py-5">
        {projects.projects.map((project) => (
          <ProjectCard key={project.title} project={project} selectProject={selectProject} />
        ))}
      </div>
      {
        selectedProject ? 
          <section>
            <a 
              className="text-rd-sub"
              href={selectedProject.link}
              onMouseEnter={e => (e.currentTarget.style.color = selectedProject.color)}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreround)")} 
            >{selectedProject.title}</a>
            {selectedProject.description && selectedProject.description.map((desc: string, indx: number) => (
              <p key={"project-desc" + indx}>{desc}</p>
            ))}
          </section>
          :
          null
      }
    </>
  );
}
