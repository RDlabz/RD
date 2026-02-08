'use client'
import { BodyWindow, Window, WindowGrid } from "@/components/WindowManager";
import en from "@/LabContent/en.json"

const edu= en.academics

export default function App() {
  return (
    <WindowGrid>
      <BodyWindow>
        <Window title="Education" padding={"12px 3%"}>
          <div className="py-5">
            {edu.uni.map((uni, ind) => {
              if (uni.includes("**UNI**")) 
                return (<p className="text-justify text-xl my-2" key={"uni_"+ind}>{uni.replace("**UNI**", "")} <a className="font-extrabold" href={edu.university} target="_blank">IHU</a></p>)
              else
                return (<p className="text-justify text-xl my-2" key={"uni_"+ind}>{uni}</p>)
            })}
          </div>
        </Window>
      </BodyWindow>
    </WindowGrid>
  );
}
