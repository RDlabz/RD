'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const home = en.home

  return (
    <main>
      <h2 className="mb-1">{home.card.titles}</h2>
      <div className="w-full h-px my-1 bg-rd-white"></div>
      {home.greeting.map((greet, ind) => (
        !ind ? 
          <h3 key={"greet_"+ind} className="text-justify my-1">{greet}</h3>
          :
          <p key={"greet_"+ind} className="text-justify my-1">{greet}</p>
      ))}
      <small className="mt-12">This website is still under heavy constraction</small>
    </main>
  );
}
