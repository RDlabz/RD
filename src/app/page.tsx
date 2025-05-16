'use client'
import en from "@/LabContent/en.json"

export default function App() {

  const home = en.home

  return (
    <main>
      <h2>{home.card.name}</h2>
      <p style={{marginBottom: "5px"}}>{home.card.titles}</p>
      <div style={{width: "100%", height: "1px", background: "var(--foreground)", margin: "5px 0px"}}></div>
      {home.greeting.map((greet, ind) => (
        <p key={"greeting_"+ind} style={{textAlign: "justify", margin: "5px 0px"}}>{greet}</p>
      ))}
      <small style={{marginTop: "50px"}}>This website is still under heavy constraction</small>
    </main>
  );
}
