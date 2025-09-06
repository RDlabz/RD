'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const home = en.home

  return (
    <section>
      <h2 className="mb-1">{home.card.titles}</h2>
      <div className="w-full h-px my-1 bg-rd-white"></div>
      {home.greeting.map((greet, ind) => (
        !ind ? 
          <h3 key={"greet_"+ind} className="text-justify my-1">{greet}</h3>
          :
          <p key={"greet_"+ind} className="text-justify my-1">{greet}</p>
      ))}
      <p className="w-full text-center mt-12 text-rd-small">This website is still under heavy constraction</p>
    </section>
  );
}
