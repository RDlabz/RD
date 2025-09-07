"use client"
import { useEffect, useState } from "react"

export default function Terminal() {

    const bash = "[visitor@rdlabs ~]$ "

    var lastLetterDistance = 0

    const [commandLine, updateCommandLine] = useState<string[]>([
        " <-----Hello World-----> ",
        "Ask me anything and I'll try to answer the best I can!",
        "If you're unfamiliar with the commands, use the command \"help\"",
        "If you want to exit, use CTRL + q",
        bash
    ])

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            console.log(event.key)
            enterCommand(event.key); 
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const enterCommand = (key: string) => {
        updateCommandLine((prev) => {
            const lastLine = prev[prev.length - 1] || "";
            const newLastLine = lastLine + key;
            return [...prev.slice(0, -1), newLastLine];
        });
    };

    return (
        <div className="absolute size-full flex z-50 justify-center items-center backdrop-blur-sm backdrop-brightness-75">
            <div className="bg-black size-4/5">
                <div className="flex w-full justify-between items-center px-5 border-b border-rd-white">
                    <p>RDLabs Terminal</p>
                    <button className="text-rd-nav leading-[0] p-0 size-10">x</button>
                </div>
                {commandLine.map((command, idx) => (
                    <div key={`command_${idx}`} className="flex justify-start items-center flex-wrap">
                        {command.split("").map((letter, i) => (
                            <span key={`command_letter_${i}`} className={`text-rd-small w-[10px] h-[24px] leading-1 ${(i === (command.length - 1 - lastLetterDistance) && idx === (commandLine.length - 1)) ? "bg-rd-primary text-rd-white" : "text-rd-primary"}`}>{letter === " " ? "\u00A0" : letter}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}