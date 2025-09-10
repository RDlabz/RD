'use client'
import en from "@/LabContent/en.json"

const edu= en.academics

export default function App() {
  return (
    <section>
      {edu.uni.map((uni, ind) => (<p key={"uni_"+ind} className={`${!ind ? "text-center" : "text-justify"} my-1 ${!ind && "text-rd-nav w-full"}`}>{uni}</p>))}
    </section>
  );
}
