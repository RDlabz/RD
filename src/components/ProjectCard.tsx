import {Icon} from "@iconify/react";

export default function ProjectCard({
    project,
    selectProject
}:{
    project: any,
    selectProject: any
}) {
    return (
        <a href="#projectDescription" className="group flex justify-center items-center relative h-40 w-40 rounded-xl border-2 border-rd-white overflow-hidden transition-all duration-[400ms] ease-in-out hover:w-80 hover:text-rd-white" onClick={() => selectProject(project)}>
            <Icon className="transition duration-[400ms] ease-in-out group-hover:blur-sm" icon={`lucide:${project.icon}`} width={70} height={70} />
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:delay-[100ms] group-hover:opacity-100 pointer-events-none" style={{boxShadow: `inset 0 0px 70px -30px ${project.color}`}} />
            <span className="absolute px-2 w-full text-start left-1/2 -translate-x-1/2 top-2 opacity-0 -translate-y-10 transition-all duration-700 group-hover:delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">{project.title}</span>
            <span className="absolute px-2 w-full text-start left-1/2 -translate-x-1/2 bottom-2 text-rd-small opacity-0 translate-y-10 transition-all duration-700 group-hover:delay-[300ms] group-hover:translate-y-0 group-hover:opacity-100">{project.abstract}</span>
        </a>
    )
}