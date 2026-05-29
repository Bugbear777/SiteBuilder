import { GripVertical, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function ServicesPanel() {
  const services = [
    {
      id: 1,
      title: "Personal Care",
      description:
        "Thoughtful support that helps residents feel comfortable, cared for, and respected throughout the day.",
    },
    {
      id: 2,
      title: "Medication Reminders",
      description:
        "Daily support with reminders and routines to help residents stay on schedule.",
    },
    {
      id: 3,
      title: "Meals & Nutrition",
      description:
        "Comfortable meals and daily nutrition support in a warm home setting.",
    },
    {
      id: 4,
      title: "Daily Companionship",
      description:
        "Meaningful connection, conversation, and support throughout the day.",
    },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="text-sm font-medium">Show Care Services Section</p>
          <p className="text-xs text-slate-500">
            Display service cards on the client page.
          </p>
        </div>

        <Switch defaultChecked />
      </div>

      <div className="space-y-2">
        <Label>Section Label</Label>
        <Input defaultValue="Care Services" />
      </div>

      <div className="space-y-2">
        <Label>Heading</Label>
        <Textarea defaultValue="Everyday support with a personal touch." />
      </div>

      <div className="space-y-2">
        <Label>Intro Text</Label>
        <Textarea
          className="min-h-24"
          defaultValue="Highlight the core services residents and families can expect from your care home."
        />
      </div>

      <Separator />

      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold">Service Cards</p>
          <p className="text-xs text-slate-500">
            Add, edit, or reorder the services shown on the page.
          </p>
        </div>

        {services.map((service) => (
          <Card key={service.id}>
            <CardContent className="space-y-3 p-4">
              <div className="flex items-center gap-3">
                <GripVertical className="h-4 w-4 text-slate-400" />

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#315f72]/10 text-xs text-[#315f72]">
                  {service.id}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {service.title}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    Service card
                  </p>
                </div>

                <Button size="icon" variant="ghost">
                  <Trash2 className="h-4 w-4 text-slate-400" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Service Name</Label>
                <Input defaultValue={service.title} />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  className="min-h-24"
                  defaultValue={service.description}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add Service
      </Button>
    </div>
  )
}