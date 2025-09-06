'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Icon} from "@iconify/react";

export default function Header() {

    const [title, updateTitle] = useState("");
    const [lastLetter, setLastLetter] = useState("");

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

    return (
        <nav className="w-full h-16 flex justify-between items-center backdrop-brightness-75 backdrop-blur-[30px]">
            <p className="text-rd-title font-rd-pixel cursor-pointer" title="Under Construction">{title}<span className="text-rd-primary">{lastLetter}</span></p>
            <div id="navbar" className="gap-x-[1dvw] font-rd-terminal text-rd-sub">
                <a onClick={() => {router.push("/.")}}>Home</a>
                <a onClick={() => {router.push("/education")}}>Education</a>
                <a onClick={() => {router.push("/projects")}}>Projects</a>
            </div>
            <button id="short-navbar">
                <Icon icon="lucide:text-align-justify" width={32} height={32} />
            </button>
        </nav>
    )
} 