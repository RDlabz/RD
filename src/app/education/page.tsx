'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const edu = en.academics
  return (
    <section>
      {edu.uni.map((uni, ind) => (
        <p key={"uni_"+ind} className={`text-justify my-1 ${!ind && "text-rd-nav w-full text-center"}`}>{uni}</p>
      ))}
    </section>
  );
}
