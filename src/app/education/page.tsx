'use client'
import en from "@/LabContent/en.json"

export default function App({edu = en.academics}: {edu: typeof en.academics}) {
  return (
    <section>
      {edu.uni.map((uni, ind) => (<p key={"uni_"+ind} className={`${!ind ? "text-center" : "text-justify"} my-1 ${!ind && "text-rd-nav w-full"}`}>{uni}</p>))}
    </section>
  );
}
