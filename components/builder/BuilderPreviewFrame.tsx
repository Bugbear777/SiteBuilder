import { Monitor, Smartphone, Tablet } from "lucide-react"

import { ClientPreview } from "@/components/client-page/ClientPreview"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Props = {
  activeSection: string
}

export function BuilderPreviewFrame({ activeSection }: Props) {
  return (
    <section className="flex h-screen flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b bg-white px-6 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            LVM Care Home
          </p>
          <p className="text-xs text-slate-500">
            Editing: {getSectionTitle(activeSection)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="outline">Draft</Badge>

          <div className="ml-2 hidden items-center rounded-lg border bg-slate-50 p-1 md:flex">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Monitor className="h-4 w-4" />
            </Button>

            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Tablet className="h-4 w-4" />
            </Button>

            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="outline" size="sm">
            Save
          </Button>

          <Button size="sm" className="bg-[#174a7c] hover:bg-[#123b63]">
            Publish
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-100 p-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <ClientPreview />
        </div>
      </div>
    </section>
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