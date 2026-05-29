import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function AboutPanel() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="text-sm font-medium">Show About Section</p>
          <p className="text-xs text-slate-500">
            Turn this section on or off.
          </p>
        </div>

        <Switch defaultChecked />
      </div>

      <div className="space-y-2">
        <Label>Section Label</Label>
        <Input defaultValue="About Our Home" />
      </div>

      <div className="space-y-2">
        <Label>Heading</Label>
        <Textarea defaultValue="A place designed around dignity, comfort, and trust." />
      </div>

      <div className="space-y-2">
        <Label>Body Text</Label>
        <Textarea
          className="min-h-40"
          defaultValue="Our care home is built around the idea that quality care should feel personal. Residents are supported with patience, respect, and attention to the details that make everyday life more comfortable."
        />
      </div>
    </div>
  )
}