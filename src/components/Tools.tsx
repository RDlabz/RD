
import tools from "@/LabContent/tools.json"

export default function Tools() {
    return (
        <div className="whitespace-nowrap text-base">
           <p>┐</p>
            {tools.map((tool, i) => (
                <div key={"tool_" + tool.key}>
                    <p>{(i === (tools.length - 1)) ? "└" : "├"} {tool.key} ┐</p>
                    {tool.value.map((value, ind) => (
                        <p className="py-0">
                            {(i === (tools.length - 1)) ? "" : "│"}
                            <span style={{marginLeft: `${(2 + tool.key.length) + ((i === (tools.length - 1)) ? 1 : 0)}ch`}}>
                                {(ind === (tool.value.length - 1)) ? "└" : "├"} 
                                <a href={value.link} target="_blank"> {value.name}</a>
                            </span>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}