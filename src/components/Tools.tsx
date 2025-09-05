import tools from '../LabContent/tools.json'

export default function Tools() {
    return (
        <div>
            <h2 className='mb-2'>The tools I use</h2>
            <div className='flex justify-around items-center flex-wrap gap-2 w-full'>
                {tools.map((tool) => (
                    <a key={tool.name} href={tool.link} target="_blank" className="bordered flex items-center gap-x-2 py-2 px-4 whitespace-nowrap">
                        <img className='h-5 w-auto' src={tool.image} />
                        <h4>{tool.name}</h4>
                    </a>
                ))}
            </div>
        </div>
    )
}