import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Ghost } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-bold text-[#315f72]">LVM Care Home</p>
            <p className="text-xs text-slate-500">Residential Care Services</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-[#315f72]">About</a>
            <a href="#services" className="hover:text-[#315f72]">Services</a>
            <a href="#gallery" className="hover:text-[#315f72]">Gallery</a>
            <a href="#contact" className="hover:text-[#315f72]">Contact</a>
          </nav>

          <Button className="bg-[#315f72] hover:bg-[#264b5a]">
            Schedule a Visit
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#315f72] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <Badge className="mb-5 bg-white/15 text-white hover:bg-white/20">
              Warm, dependable residential care
            </Badge>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              Compassionate care in a comfortable home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              We provide a peaceful, supportive living environment where
              residents receive attentive care, meaningful routines, and the
              dignity they deserve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant={"default"} size="lg">
                Contact Us
              </Button>
              <Button size="lg" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-white/20 bg-white/10 shadow-2xl backdrop-blur py-4">
            <CardContent className="px-4">
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-white/20 text-white/80">
                Hero Image Placeholder
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3">
          <div>
            <p className="font-semibold text-[#315f72]">Personalized Care</p>
            <p className="mt-1 text-sm text-slate-600">
              Support tailored to each resident’s needs.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#315f72]">Comfortable Home</p>
            <p className="mt-1 text-sm text-slate-600">
              A calm residential setting with familiar daily routines.
            </p>
          </div>

          <div>
            <p className="font-semibold text-[#315f72]">Family Connection</p>
            <p className="mt-1 text-sm text-slate-600">
              Clear communication and compassionate support.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#d9a441]">
            About Our Home
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            A place designed around dignity, comfort, and trust.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Our care home is built around the idea that quality care should feel
            personal. Residents are supported with patience, respect, and
            attention to the details that make everyday life more comfortable.
          </p>
          <p>
            From daily routines to family communication, our goal is to create a
            safe and welcoming environment where residents can feel at home.
          </p>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#d9a441]">
              Care Services
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Everyday support with a personal touch.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Personal Care",
              "Medication Reminders",
              "Meals & Nutrition",
              "Daily Companionship",
            ].map((service) => (
              <Card key={service} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="mb-5 h-12 w-12 rounded-full bg-[#315f72]/10" />
                  <h3 className="text-lg font-bold">{service}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Thoughtful support that helps residents feel comfortable,
                    cared for, and respected throughout the day.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
                <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#d9a441]">
                    Gallery
                </p>
                <h2 className="mt-3 text-4xl font-bold">
                    A glimpse inside our home.
                </h2>
                </div>

                <Button variant="outline">View Gallery</Button>
            </div>

            <Carousel
                opts={{
                align: "start",
                loop: true,
                }}
                className="mt-10 w-full"
            >
                <CarouselContent>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <CarouselItem
                    key={item}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                    >
                    <div className="p-1">
                        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-slate-200 text-slate-500 shadow-sm">
                        Image Placeholder {item}
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>

                <CarouselPrevious size={"icon-lg"}/>
                <CarouselNext size={"icon-lg"} />
            </Carousel>
        </section>

      <section id="contact" className="bg-[#315f72] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#d9a441]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Schedule a visit or ask us a question.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              We would be happy to talk with you about care options, availability,
              and whether our home is the right fit for your family.
            </p>
          </div>

          <Card>
            <CardContent className="space-y-4 p-6 text-slate-900">
              <div>
                <p className="text-sm font-semibold text-slate-500">Phone</p>
                <p className="text-lg font-bold">(555) 123-4567</p>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-semibold text-slate-500">Email</p>
                <p className="text-lg font-bold">info@example.com</p>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-semibold text-slate-500">Address</p>
                <p className="text-lg font-bold">123 Care Home Lane</p>
              </div>

              <Button className="w-full bg-[#315f72] hover:bg-[#264b5a]">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="font-bold">LVM Care Home</p>
          <p className="text-sm text-white/60">
            © 2026 LVM Care Home. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}