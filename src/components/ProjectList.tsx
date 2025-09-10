'use client'
import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({
    projects,
    setSelectedProject,
}: {
    projects: any[],
    setSelectedProject: any
}) {
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);
      
    const updateFades = () => {
        const container = scrollRef.current;
        if (!container) return;
    
        const { scrollLeft, scrollWidth, clientWidth } = container;
    
        // Show left fade if not at the start
        setShowLeftFade(scrollLeft > 20);
    
        // Show right fade if not at the end
        setShowRightFade(scrollLeft + clientWidth < scrollWidth - 20);
    };
    
    useEffect(() => {
        updateFades(); // initial check
    
        const container = scrollRef.current;
        if (!container) return;
    
        container.addEventListener('scroll', updateFades);
        window.addEventListener('resize', updateFades);
    
        return () => {
          container.removeEventListener('scroll', updateFades);
          window.removeEventListener('resize', updateFades);
        };
    }, []);

    return (
        <div className="relative overflow-hidden m-[-20px] py-10">
            <div ref={scrollRef} className="x-list w-full px-[20px]">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} selectProject={setSelectedProject} />
            ))}
            </div>

            {showLeftFade && (<div className="absolute top-0 left-0 h-full w-3 pointer-events-none bg-gradient-to-r from-rd-primary to-transparent" />)}
            {showRightFade && (<div className="absolute top-0 right-0 h-full w-3 pointer-events-none bg-gradient-to-l from-rd-primary to-transparent" />)}
        </div>
    )
}