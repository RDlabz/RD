"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function NavPanel({ 
    isOpen,
    toggle
}: { 
    isOpen: boolean
    toggle: any
}) {


    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
    }, [isOpen]);

    if (!isOpen)
        return null

    return (
        <div id="nav-panel" className="fixed inset-0 z-40 backdrop-blur-lg py-20 flex-col font-rd-terminal text-rd-nav justify-around items-center overflow-hidden">
            <Icon className="absolute top-5 right-5 cursor-pointer z-50 p-1" icon={`lucide:x`} width={40} height={40} onClick={() => toggle(false)} />
            <a className="w-1/2 text-center py-5" onClick={() => {router.push("/."); toggle(false)}}>Home</a>
            <a className="w-1/2 text-center py-5" onClick={() => {router.push("/edu"); toggle(false)}}>Education</a>
            <a className="w-1/2 text-center py-5" onClick={() => {router.push("/pro"); toggle(false)}}>Projects</a>
        </div>
    );
}
