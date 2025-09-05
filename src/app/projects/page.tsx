'use client'
import ProjectCard from '@/components/ProjectCard';
import en from '@/LabContent/en.json'
import { useState } from 'react';

export default function App() {

  const projects = en.projects
  const [hoverredProject, setHoverredProject] = useState<string>("")
  const [selectedProject, setSelectedProject] = useState<any>({})
  const [color, setColor] = useState('var(--foreground)');

  const selectProject = (project: any) => {
    setSelectedProject(project)
  }

  const handleMouseLeave = () => {
    setColor('var(--foreground)'); 
  };

  return (
    <main>
      <h1>{projects.title}</h1>
      <div className="flex flex-wrap gap-1 justify-evenly w-full">
        {projects.projects.map((project) => (
          <ProjectCard 
            key={project.title} project={project} 
            hoverredProject={hoverredProject} setHoverredProject={setHoverredProject} 
            selectProject={selectProject} />
        ))}
      </div>
      {
        selectedProject ? 
          <div>
            <a 
              href={selectedProject.link} 
              onMouseEnter={() => setColor(selectedProject.color)}
              onMouseLeave={() => setColor('var(--foreground)')}
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
