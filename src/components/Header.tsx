'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {Icon} from "@iconify/react";
import NavPanel from './NavPanel';

export default function Header() {

    const [title, updateTitle] = useState("");
    const [lastLetter, setLastLetter] = useState("");
    const [isOpen, toggleNav] = useState<boolean>(false);

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
        <>
            <nav className="sticky top-0 w-full h-16 flex justify-between items-center backdrop-brightness-75 backdrop-blur-[30px]">
                <p className="text-rd-title font-rd-pixel cursor-pointer" title="Under Construction">{title}<span className="text-rd-primary">{lastLetter}</span></p>
                <div id="navbar" className="gap-x-[1dvw] font-rd-terminal text-rd-sub">
                    <a onClick={() => {router.push("/.")}}>Home</a>
                    <a onClick={() => {router.push("/edu")}}>Education</a>
                    <a onClick={() => {router.push("/pro")}}>Projects</a>
                </div>
                <button id="short-navbar" onClick={() => toggleNav(true)}>
                    <Icon icon="lucide:text-align-justify" width={32} height={32} />
                </button>
            </nav>

            <NavPanel isOpen={isOpen} toggle={toggleNav} />
        </>
    )
} 