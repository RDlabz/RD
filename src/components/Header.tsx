'use client'

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Icon} from "@iconify/react";

export default function Header() {

    const [title, updateTitle] = useState("");
    const [lastLetter, setLastLetter] = useState("");

    const pathname = usePathname();

    const websiteName = "RDLabs";
    let i = 0;

    const router = useRouter();

    const typeIn = () => {
        if (i < websiteName.length) {
            const nextLetter = websiteName.charAt(i);
            setLastLetter(`${websiteName.charAt(i+1)}|`);
            updateTitle((old) => old + nextLetter); 
            i++;
            setTimeout(typeIn, 100);
        }
        else {
            setLastLetter("");
        }
    };

    useEffect(() => {
        typeIn();
    }, [])

    const icon = (content: ("home" | "edu" | "pro")) => {
        if (content === "home")
            return (pathname === "/" ? "material-symbols:home-rounded" : "material-symbols:home-outline-rounded")
        else if (content === "edu")
            return (pathname === "/edu" ? "material-symbols:school-rounded" : "material-symbols:school-outline-rounded")
        else if (content === "pro")
            return (pathname === "/pro" ? "material-symbols:account-tree-rounded" : "material-symbols:account-tree-outline-rounded")
        else
            return "material-symbols:square-outline-rounded"
    }

    return (
        <nav className="w-full h-16 flex justify-between items-center">
            <p className="text-rd-title font-rd-pixel cursor-pointer" title="Under Construction">{title}<span className="text-rd-primary">{lastLetter}</span></p>
            <div className="flex gap-x-[1dvw] font-rd-terminal text-rd-sub h-full">
                <a className='h-full flex items-center' onClick={() => {router.push("/.")}}>
                    <Icon icon={icon("home")} width={32} height={32} />
                </a>
                <a className='h-full flex items-center' onClick={() => {router.push("/edu")}}>
                    <Icon icon={icon("edu")} width={32} height={32} />
                </a>
                <a className='h-full flex items-center' onClick={() => {router.push("/pro")}}>
                    <Icon icon={icon("pro")} width={32} height={32} />
                </a>
            </div>
        </nav>
    )
} 