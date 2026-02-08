import {Icon} from "@iconify/react";

export default function ProjectCard({
    project,
    selectProject
}:{
    project: any,
    selectProject: any
}) {
    return (
        <a href="#projectDescription" className="relative group size-40 flex-shrink-0 flex justify-center items-center button-border overflow-hidden transition-all duration-[400ms] ease-in-out hover:w-full hover:max-w-80 hover:text-rd-fg" onClick={() => selectProject(project)}>
            <Icon className="transition duration-[400ms] ease-in-out group-hover:blur-sm" icon={`lucide:${project.icon}`} width={70} height={70} />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:delay-[100ms] group-hover:opacity-100 pointer-events-none" style={{boxShadow: `inset 0 0px 70px -30px ${project.color}`}} />
            <span className="absolute w-full self-start text-lg px-2 py-1 opacity-0 -translate-y-10 transition-all duration-700 group-hover:delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">{project.title}</span>
            <span className="absolute w-full self-end text-base px-2 py-1 opacity-0 translate-y-10 transition-all duration-700 group-hover:delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">{project.abstract}</span>
        </a>
    )
}