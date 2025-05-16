'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        <nav style={{width: "100dvw", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 1dvw", backdropFilter: "brightness(70%) blur(30px)"}}>
            <p style={{fontSize: "var(--title)"}}>{title}<i style={{color: "var(--primary)"}}>{lastLetter}</i></p>
            <div style= {{display: "flex", columnGap: "1dvw"}}>
                <p onClick={() => {router.push("/")}}>Home</p>
                <p onClick={() => {router.push("/education")}}>Education</p>
                <p onClick={() => {router.push("/projects")}}>Projects</p>
            </div>
        </nav>
    )
} 