'use client'
import { BodyWindow, Window, WindowGrid } from "@/components/WindowManager";
import en from "@/LabContent/en.json"

const edu= en.academics

export default function App() {
  return (
    <WindowGrid>
      <BodyWindow>
        <Window title="Education" padding={"12px 3%"}>
          {edu.uni.map((uni, ind) => (<p key={"uni_"+ind} className="text-justify text-xl my-2">{uni}</p>))}
        </Window>
      </BodyWindow>
    </WindowGrid>
  );
}
