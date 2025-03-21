import  Input  from "@repo/ui/Input"

export default function Home() {
  return (
    <div>
      <h1>Hii thire</h1>
      <Input onChange={() => { alert("change")}} placeholder="Eneter" size="big"/>
    </div>
  ) 
}
