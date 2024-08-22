'use client'
import React from "react"
import { BrainCircuit, Handshake, NotepadText,Headset } from "lucide-react"

function Sidebar() {
    return (
      <div className="">
        <a href="/products/ai-workflow">
           <BrainCircuit />
        </a>
        <a href="/products/crm">
            <Handshake />
        </a>
        <a href="/products/project-management">
            <NotepadText />
        </a>
        <a href="/products/service-desk">
            <Headset />
        </a>
      </div>   
      
  )
}

export default Sidebar