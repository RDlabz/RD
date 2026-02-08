'use client'
import { useState } from 'react';
import en from '@/LabContent/en.json'
import ProjectList from '@/components/ProjectList';
import { BodyWindow, Window, WindowGrid } from '@/components/WindowManager';
import { Icon } from "@iconify/react";

const projects = en.projects

export default function App() {

  const [selectedProject, setSelectedProject] = useState<any>({})

  return (
    <WindowGrid>
      <BodyWindow>
        <Window title="Projects" padding={"12px 3%"}>
          <p className="text-justify text-xl py-5">{projects.intro}</p>
          <ProjectList projects={projects.projects} setSelectedProject={setSelectedProject} />
        </Window>
        {Boolean(Object.keys(selectedProject).length) && (
          <Window title={selectedProject.abstract} padding={"10px 3%"}>
            <div className="w-full sticky top-0 bg-rd-base z-10 h-8 flex items-center justify-end">
              <Icon icon="material-symbols:close" width={30} height={30} className="cursor-pointer" onClick={() => { setSelectedProject({}) }} />
            </div>
            <a
              id="projectDescription"
              href={selectedProject.link}
              className="text-2xl font-bold"
              target="_blank"
              onMouseEnter={e => (e.currentTarget.style.color = selectedProject.color)}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreround)")}
            >{selectedProject.title}</a>
            {selectedProject.description && selectedProject.description.map((desc: string, indx: number) => (
              <p key={"project-desc" + indx} className="text-justify text-xl">{desc}</p>
            ))}
            <div className='py-5'></div>
          </Window>
        )}
      </BodyWindow>
    </WindowGrid>
  );
}
