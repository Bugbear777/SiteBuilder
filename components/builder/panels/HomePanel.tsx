import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { GripVertical, Plus, Trash2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function HomePanel() {
  const highlights = [
    {
      id: 1,
      title: "Personalized Care",
      description: "Support tailored to each resident’s needs.",
    },
    {
      id: 2,
      title: "Comfortable Home",
      description: "A calm residential setting with familiar daily routines.",
    },
    {
      id: 3,
      title: "Family Connection",
      description: "Clear communication and compassionate support.",
    },
  ]

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label>Business Name</Label>
        <Input defaultValue="LVM Care Home" />
      </div>

      <div className="space-y-2">
        <Label>Hero Eyebrow</Label>
        <Input defaultValue="Residential Care Services" />
      </div>

      <div className="space-y-2">
        <Label>Hero Headline</Label>
        <Textarea defaultValue="Compassionate care in a comfortable home." />
      </div>

      <div className="space-y-2">
        <Label>Hero Description</Label>
        <Textarea
          className="min-h-28"
          defaultValue="We provide a peaceful, supportive living environment where residents receive attentive care, meaningful routines, and the dignity they deserve."
        />
      </div>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Show Hero Image</p>
              <p className="text-xs text-slate-500">
                Display an image beside the hero text.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <Button variant="outline" className="w-full">
            Choose Hero Image
          </Button>
        </CardContent>
      </Card>

      <Separator />

      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold">Trust Bar</p>
          <p className="text-xs text-slate-500">
            Edit the three short highlights shown below the hero section.
          </p>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <p className="text-sm font-medium">Show Trust Bar</p>
            <p className="text-xs text-slate-500">
              Display quick highlights under the home hero.
            </p>
          </div>

          <Switch defaultChecked />
        </div>

        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <CardContent className="space-y-3 p-4">
              <div className="flex items-center gap-3">
                <GripVertical className="h-4 w-4 text-slate-400" />

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#315f72]/10 text-xs font-bold text-[#315f72]">
                  {highlight.id}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    Highlight {highlight.id}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {highlight.title}
                  </p>
                </div>

                <Button size="icon" variant="ghost">
                  <Trash2 className="h-4 w-4 text-slate-400" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Title</Label>
                <Input defaultValue={highlight.title} />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  className="min-h-20"
                  defaultValue={highlight.description}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}