'use client'
import Ascii from "@/components/Ascii";
import { BodyWindow, SideWindow, Window, WindowGrid } from "@/components/WindowManager";
import en from "@/LabContent/en.json"
import { useState } from "react";
import {Icon} from "@iconify/react";
import Tools from "@/components/Tools";

const home = en.home

export default function App() {

  const [tools, showTools] = useState<boolean>(false)

  return (
    <WindowGrid>
      <SideWindow>
        {tools && (
          <Window title="Tools" padding={"5px 5px"}>
            <div className="sticky top-0 w-full flex justify-end items-center">
              <Icon icon="material-symbols:close" width={30} height={30} className="cursor-pointer" onClick={() => {showTools(false)}} />
            </div>
            <Tools />
          </Window>
        )}
      </SideWindow>
      <BodyWindow>
        <Window title="Home Page" padding={"12px 3%"}>
          <Ascii />
          {home.text.map((t, i) => (<p key={"t"+i} className="text-justify my-2 text-xl">{t}</p>))}
          {home.fields.map((field) => (
            <div className="text-2xl text-justify my-5" key={"field_" + field.title}>
              <p className="font-semibold">{field.title}</p>
              {field.info.map((info: string, ind) => {
                  if (info.includes("**HERE**")) 
                    return (<p className="text-xl" key={field.title + ind}>{info.replace("**HERE**", "")} <a className="font-extrabold" onClick={() => {showTools(true)}}>Here</a></p>)
                  else
                    return (<p className="text-xl" key={field.title + ind}>{info}</p>)
              })}
            </div>
          ))}
          <div className="py-2"></div>
          {home.bye.map((t, i) => (<p key={"t"+i} className="text-justify my-2 text-xl">{t}</p>))}
          <div className="flex items-center justify-evenly gap-y-4 flex-wrap w-full pt-6 pb-12">
            {home.links.map((link, i) => (
              <a key={"link"+i} href={link.link} target="_blank" className="flex items-center justify-center w-60 gap-2">
                <Icon icon={link.icon} className="fill-rd-primary" width={22} height={22} />
                <p className="text-lg">{link.name}</p>
              </a>
            ))}
          </div>
        </Window>
      </BodyWindow>
    </WindowGrid>
  );
}
