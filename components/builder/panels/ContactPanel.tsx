import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function ContactPanel() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p className="text-sm font-medium">Show Contact Section</p>
          <p className="text-xs text-slate-500">
            Display contact information and message form.
          </p>
        </div>

        <Switch defaultChecked />
      </div>

      <div className="space-y-2">
        <Label>Section Label</Label>
        <Input defaultValue="Get in Touch" />
      </div>

      <div className="space-y-2">
        <Label>Heading</Label>
        <Textarea defaultValue="Schedule a visit or ask us a question." />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          className="min-h-28"
          defaultValue="We would be happy to talk with you about care options, availability, and whether our home is the right fit for your family."
        />
      </div>

      <Separator />

      <Card>
        <CardContent className="space-y-4 p-4">
          <div>
            <p className="font-semibold">Contact Information</p>
            <p className="text-sm text-slate-500">
              These details appear in the contact card.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Phone</Label>
            <Input defaultValue="(555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" defaultValue="info@example.com" />
          </div>

          <div className="space-y-2">
            <Label>Address</Label>
            <Textarea defaultValue="123 Care Home Lane" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Message Form</p>
              <p className="text-sm text-slate-500">
                Let visitors send a message from the page.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label>Form Heading</Label>
            <Input defaultValue="Send us a message" />
          </div>

          <div className="space-y-2">
            <Label>Form Description</Label>
            <Textarea defaultValue="Tell us a little about what you are looking for and we will follow up with more information." />
          </div>

          <div className="space-y-2">
            <Label>Button Text</Label>
            <Input defaultValue="Send Message" />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-[#174a7c] hover:bg-[#123b63]">
        Save Contact
      </Button>
    </div>
  )
}