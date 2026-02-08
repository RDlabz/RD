'use client'
import { useState } from 'react';
import en from '@/LabContent/en.json'
import ProjectList from '@/components/ProjectList';

const projects = en.projects

export default function App() {

  const [selectedProject, setSelectedProject] = useState<any>({})

  return (
    <>
      <h2>{projects.title}</h2>
      <ProjectList projects={projects.projects} setSelectedProject={setSelectedProject} />
      {
        selectedProject ? 
          <section id="projectDescription">
            <a 
              href={selectedProject.link}
              target="_blank"
              onMouseEnter={e => (e.currentTarget.style.color = selectedProject.color)}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreround)")} 
            >{selectedProject.title}</a>
            {selectedProject.description && selectedProject.description.map((desc: string, indx: number) => (
              <p key={"project-desc" + indx} className="text-justify">{desc}</p>
            ))}
          </section>
          :
          null
      }
    </>
  );
}
