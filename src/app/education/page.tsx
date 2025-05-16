'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const edu = en.academics
  return (
    <main>
      {edu.uni.map((uni, ind) => (
        <p key={"uni_"+ind} style={{textAlign: "justify", margin: "5px 0px", fontSize: !ind ? "var(--nav)" : "inherit"}}>{uni}</p>
      ))}
    </main>
  );
}
