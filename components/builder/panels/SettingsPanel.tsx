import { Plus, Share2, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function SettingsPanel() {
  const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    url: "https://facebook.com/lvmcarehome",
    icon: Share2,
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://instagram.com/lvmcarehome",
    icon: Share2,
  },
  {
    id: 3,
    label: "LinkedIn",
    url: "https://linkedin.com/company/lvmcarehome",
    icon: Share2,
  },
]

  return (
    <div className="space-y-5">
      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold">Site Status</p>
              <p className="text-sm text-slate-500">
                This page is currently saved as a draft.
              </p>
            </div>

            <Badge variant="outline">Draft</Badge>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
            <div>
              <p className="text-sm font-medium">Published</p>
              <p className="text-xs text-slate-500">
                Make this page visible publicly.
              </p>
            </div>

            <Switch />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label>Site Name</Label>
        <Input defaultValue="LVM Care Home" />
      </div>

      <div className="space-y-2">
        <Label>Site URL Slug</Label>
        <Input defaultValue="lvm-care-home" />
        <p className="text-xs text-slate-500">Example: /lvm-care-home</p>
      </div>

      <Separator />

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Social Links</p>
              <p className="text-sm text-slate-500">
                Add social media links for the footer or contact area.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="space-y-3">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <div
                  key={social.id}
                  className="rounded-lg border bg-white p-3"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#174a7c]/10 text-[#174a7c]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{social.label}</p>
                      <p className="truncate text-xs text-slate-500">
                        {social.url}
                      </p>
                    </div>

                    <Button size="icon" variant="ghost">
                      <Trash2 className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label>{social.label} URL</Label>
                    <Input defaultValue={social.url} />
                  </div>
                </div>
              )
            })}
          </div>

          <Button variant="outline" className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add Social Link
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label>Internal Notes</Label>
        <Textarea
          className="min-h-28"
          placeholder="Add internal notes about this client page..."
        />
      </div>

      <Separator />

      <Card>
        <CardContent className="space-y-4 p-4">
          <div>
            <p className="font-semibold">Page Actions</p>
            <p className="text-sm text-slate-500">
              Preview, duplicate, or manage this client page.
            </p>
          </div>

          <div className="grid gap-2">
            <Button variant="outline" className="justify-start">
              Open Public Preview
            </Button>

            <Button variant="outline" className="justify-start">
              Duplicate Page
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <Card className="border-red-200 bg-red-50">
        <CardContent className="space-y-4 p-4">
          <div>
            <p className="font-semibold text-red-900">Danger Zone</p>
            <p className="text-sm text-red-700">
              These actions should be used carefully.
            </p>
          </div>

          <Button variant="destructive" className="w-full">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Client Page
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}