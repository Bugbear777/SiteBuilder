"use client"

import {
  HeartHandshake,
  Home,
  Info,
  Images,
  Mail,
  Palette,
  Settings,
} from "lucide-react"

const builderSections = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: Info,
  },
  {
    id: "services",
    label: "Services",
    icon: HeartHandshake,
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Images,
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: Mail,
  },
  {
    id: "theme",
    label: "Theme",
    icon: Palette,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
]

type Props = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function BuilderNavRail({ activeSection, setActiveSection }: Props) {
  return (
    <aside className="flex h-screen flex-col border-r bg-[#174a7c] text-white">
      <div className="flex h-20 items-center justify-center border-b border-white/10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#174a7c]">
          L
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-3">
        {builderSections.map((section) => {
          const Icon = section.icon
          const active = activeSection === section.id

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={[
                "flex flex-col items-center gap-1 rounded-xl px-2 py-3 text-xs font-medium transition",
                active
                  ? "bg-white text-[#174a7c] shadow-sm"
                  : "text-white/75 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" />
              <span className="leading-tight">{section.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}