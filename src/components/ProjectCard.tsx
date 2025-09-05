import '@/styles/ProjectCard.css'

export default function ProjectCard({
    project,
    hoverredProject,
    setHoverredProject,
    selectProject
}:{
    project: any,
    hoverredProject: any,
    setHoverredProject: any,
    selectProject: any
}) {

    return (
        <div className='card' onMouseEnter={() => setHoverredProject(project.title)} onMouseLeave={() => setHoverredProject("")}>
            {
                (hoverredProject === project.title) ?
                <div className='card-content' style={{backgroundColor: project.color}} onClick={() => selectProject(project)}>
                    <p className='text-center text-rd-blue'>{project.abstract}</p>
                </div>
                :
                <h2 className='w-52 text-center'>{project.title}</h2>
            }
        </div>
    )
}