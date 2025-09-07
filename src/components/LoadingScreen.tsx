"use client"
import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [shouldShow, setShouldShow] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyPlayed = localStorage.getItem("introPlayed");
    if (alreadyPlayed) {
      setShouldShow(false);
    } else {
      setShouldShow(true);
      localStorage.setItem("introPlayed", "true");

      const timer = setTimeout(() => {
        setShouldShow(false);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <div className="h-full w-full absolute z-50 flex flex-col justify-center items-center font-rd-terminal backdrop-blur-lg bg-black/50">
        <h2 className="opacity-0 animate-fadeInDelay1">SLICK</h2>
        <h2 className="opacity-0 animate-fadeInDelay2">EFFICIENT</h2>
        <h2 className="opacity-0 animate-fadeInDelay3">SECURED</h2>
    </div>
  );
}
