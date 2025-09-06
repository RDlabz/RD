import {Icon} from "@iconify/react";
import { useState } from "react";

export default function ProjectCard({
    project,
    selectProject
}:{
    project: any,
    selectProject: any
}) {

    const [hoverredProject, setHoverredProject] = useState<string>("")

    return (
        <div className='relative h-40 w-40 border-2 border-rd-white rounded-xl flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:w-80' onMouseEnter={() => setHoverredProject(project.title)} onMouseLeave={() => setHoverredProject("")}>
            {
                (hoverredProject === project.title) ?
                <div className='absolute size-full rounded-xl flex flex-col justify-between items-start backdrop-blur-sm transition-all duration-300 ease-in-out text-rd-white px-2' style={{boxShadow: `inset 0 0px 70px -30px ${project.color}`}} onClick={() => selectProject(project)}>
                    <p>{project.title}</p>
                    <p className='text-rd-small'>{project.abstract}</p>
                </div>
                :
                null
            }
            <Icon icon={`lucide:${project.icon}`} width={70} height={70} />
        </div>
    )
}