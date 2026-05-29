import { ImagePlus, GripVertical, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function GalleryPanel() {
  const images = [
    {
      id: 1,
      title: "Comfortable living space",
      caption: "A warm and welcoming area for residents and family.",
    },
    {
      id: 2,
      title: "Bright dining area",
      caption: "Shared meals in a clean, comfortable setting.",
    },
    {
      id: 3,
      title: "Quiet outdoor space",
      caption: "Peaceful outdoor areas for fresh air and relaxation.",
    },
  ]

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="text-sm font-medium">Show Gallery Section</p>
          <p className="text-xs text-slate-500">
            Display photos on the client page.
          </p>
        </div>

        <Switch defaultChecked />
      </div>

      <div className="space-y-2">
        <Label>Section Label</Label>
        <Input defaultValue="Gallery" />
      </div>

      <div className="space-y-2">
        <Label>Heading</Label>
        <Input defaultValue="A glimpse inside our home." />
      </div>

      <Separator />

      <div className="space-y-3">
        <Label>Display Style</Label>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Carousel</Button>
          <Button variant="outline">Grid</Button>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="text-sm font-medium">Show Captions</p>
          <p className="text-xs text-slate-500">
            Display title and description under each image.
          </p>
        </div>

        <Switch defaultChecked />
      </div>

      <Separator />

      <Button className="w-full bg-[#174a7c] hover:bg-[#123b63]">
        <ImagePlus className="mr-2 h-4 w-4" />
        Add Images
      </Button>

      <div className="space-y-3">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="space-y-3 p-4">
              <div className="flex items-center gap-3">
                <GripVertical className="h-4 w-4 text-slate-400" />

                <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                  Image
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    Gallery Image {image.id}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    {image.title}
                  </p>
                </div>

                <Button size="icon" variant="ghost">
                  <Trash2 className="h-4 w-4 text-slate-400" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Image Title</Label>
                <Input defaultValue={image.title} />
              </div>

              <div className="space-y-2">
                <Label>Caption</Label>
                <Input defaultValue={image.caption} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}