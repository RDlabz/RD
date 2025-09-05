'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const edu = en.academics
  return (
    <main>
      {edu.uni.map((uni, ind) => (
        <p key={"uni_"+ind} className="text-justify my-1" style={{fontSize: !ind ? "var(--nav)" : "inherit"}}>{uni}</p>
      ))}
    </main>
  );
}
