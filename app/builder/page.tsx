"use client"

import { useState } from "react"
import { BuilderNavRail } from "@/components/builder/BuilderIconRail"
import { BuilderEditPanel } from "@/components/builder/BuilderToolPanel"
import { BuilderPreviewFrame } from "@/components/builder/BuilderPreviewFrame"

export default function BuilderPage() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="grid h-screen grid-cols-[88px_360px_1fr] overflow-hidden bg-slate-100">
      <BuilderNavRail
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <BuilderEditPanel activeSection={activeSection} />

      <BuilderPreviewFrame activeSection={activeSection} />
    </main>
  )
}