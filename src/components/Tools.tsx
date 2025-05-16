import tools from '../LabContent/tools.json'

export default function Tools() {
    return (
        <div>
            <h2 style={{marginBottom: "10px"}}>The tools I use</h2>
            <div style={{display: "flex", width: "100%", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", columnGap: "10px", rowGap: "10px"}}>
                {tools.map((tool) => (
                    <a 
                        key={tool.name} href={tool.link} target="_blank" 
                        className="bordered"
                        style={{display: "flex", alignItems: "center", columnGap: "10px", padding: "8px 15px", whiteSpace: "nowrap"}}
                    >
                        <img style={{height: "20px", width: "auto"}} src={tool.image} />
                        <h4>{tool.name}</h4>
                    </a>
                ))}
            </div>
        </div>
    )
}