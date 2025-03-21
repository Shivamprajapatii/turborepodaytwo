"use client"

import  Input  from "@repo/ui/Input"
import { useRouter } from "next/navigation"

export default function Home() {
  const path = 'dsafjafd2093123';
  const router = useRouter();
  return (
    <div>
      <h1>Hii thire</h1>
      <Input onChange={() => {}} placeholder="Eneter" size="big"/>
      <button onClick={() => {
        router.push(`chat/${path}`)
      }}>Join Room</button>
    </div>
  ) 
}
