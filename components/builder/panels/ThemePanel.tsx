import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function ThemePanel() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label>Primary Color</Label>
        <Input type="color" defaultValue="#315f72" />
      </div>

      <div className="space-y-2">
        <Label>Accent Color</Label>
        <Input type="color" defaultValue="#d9a441" />
      </div>

      <Separator />

      <div className="space-y-3">
        <Label>Theme Style</Label>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Warm</Button>
          <Button variant="outline">Modern</Button>
          <Button variant="outline">Classic</Button>
          <Button variant="outline">Soft</Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Label>Button Style</Label>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">Rounded</Button>
          <Button variant="outline">Pill</Button>
        </div>
      </div>
    </div>
  )
}