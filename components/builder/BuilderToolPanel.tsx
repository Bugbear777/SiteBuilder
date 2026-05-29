"use client"

import { HomePanel } from "./panels/HomePanel"
import { AboutPanel } from "./panels/AboutPanel"
import { GalleryPanel } from "./panels/GalleryPanel"
import { ContactPanel } from "./panels/ContactPanel"
import { ThemePanel } from "./panels/ThemePanel"
import { SettingsPanel } from "./panels/SettingsPanel"
import { ServicesPanel } from "./panels/ServicesPanel"

type Props = {
  activeSection: string
}

export function BuilderEditPanel({ activeSection }: Props) {
  return (
    <aside className="h-screen overflow-y-auto border-r bg-white">
      <div className="border-b p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Editing Section
        </p>

        <h1 className="mt-1 text-2xl font-bold text-slate-950">
          {getSectionTitle(activeSection)}
        </h1>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          Update this section and preview the changes on the page.
        </p>
      </div>

      <div className="p-5">
        {activeSection === "home" && <HomePanel />}
        {activeSection === "about" && <AboutPanel />}
        {activeSection === "services" && <ServicesPanel />}
        {activeSection === "gallery" && <GalleryPanel />}
        {activeSection === "contact" && <ContactPanel />}
        {activeSection === "theme" && <ThemePanel />}
        {activeSection === "settings" && <SettingsPanel />}
      </div>
    </aside>
  )
}

function getSectionTitle(activeSection: string) {
  switch (activeSection) {
    case "home":
      return "Home"
    case "about":
      return "About"
    case "services":
      return "Care Services"
    case "gallery":
      return "Gallery"
    case "contact":
      return "Contact Us"
    case "theme":
      return "Theme"
    case "settings":
      return "Settings"
    default:
      return "Builder"
  }
}