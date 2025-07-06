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
                    <p style={{textAlign: "center", color: "var(--background)"}}>{project.abstract}</p>
                </div>
                :
                <h2 style={{width: "200px", textAlign: "center"}}>{project.title}</h2>
            }
        </div>
    )
}