'use client'
import ProjectCard from '@/components/ProjectCard';
import en from '@/LabContent/en.json'
import { useState } from 'react';

export default function App() {

  const projects = en.projects
  const [selectedProject, setSelectedProject] = useState<any>({})

  const selectProject = (project: any) => {
    setSelectedProject(project)
  }

  return (
    <main>
      <h1>{projects.title}</h1>
      <div className="flex flex-wrap gap-2 justify-evenly w-full py-5">
        {projects.projects.map((project) => (
          <ProjectCard 
            key={project.title} project={project} 
            selectProject={selectProject} />
        ))}
      </div>
      {
        selectedProject ? 
          <div>
            <a 
              className="text-rd-sub"
              href={selectedProject.link}
              onMouseEnter={e => (e.currentTarget.style.color = selectedProject.color)}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreround)")} 
            >{selectedProject.title}</a>
            {selectedProject.description && selectedProject.description.map((desc: string, indx: number) => (
              <p key={"project-desc" + indx}>{desc}</p>
            ))}
          </div>
          :
          null
      }
    </main>
  );
}
