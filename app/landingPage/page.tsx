import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, ImageIcon, LayoutTemplate, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const signUpUrl = "https://lvmra.com/TermsOfUse?ReturnUrl=Account%2FSignUp"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8fa] text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#174a7c] text-lg font-bold text-white">
              L
            </div>

            <div>
              <p className="text-lg font-bold text-[#174a7c]">LVM Systems</p>
              <p className="text-xs font-medium text-slate-500">
                Residential Assisted Living Websites
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-[#174a7c]">
              Features
            </a>
            <a href="#preview" className="hover:text-[#174a7c]">
              Preview
            </a>
            <a href="#process" className="hover:text-[#174a7c]">
              How It Works
            </a>
          </nav>

          <Button asChild className="bg-[#174a7c] hover:bg-[#123b63]">
            <a href={signUpUrl}>Sign Up</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#174a7c] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,74,124,1),rgba(14,38,64,1))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
              LVM Systems Client Website Builder
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              A simple way to launch a polished care home website.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Create a professional online presence for your residential care
              home with a clean layout, service highlights, gallery sections,
              and contact information designed for families looking for care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#f4b63f] text-slate-950 hover:bg-[#dca236]"
              >
                <a href={signUpUrl}>
                  Sign Up
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/client">View Demo Page</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-white text-slate-900">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <div>
                  <p className="font-bold text-[#174a7c]">LVM Care Home</p>
                  <p className="text-xs text-slate-500">
                    Residential Care Services
                  </p>
                </div>

                <div className="hidden gap-4 text-xs font-medium text-slate-500 sm:flex">
                  <span>About</span>
                  <span>Gallery</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="bg-[#174a7c] px-6 py-10 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f4b63f]">
                  Compassionate Care
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  A comfortable home for those you love.
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  A warm, professional client page with care details, photos,
                  and contact information.
                </p>
              </div>

              <div className="grid gap-3 p-5 sm:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex aspect-[4/3] items-center justify-center rounded-xl bg-slate-100 text-xs text-slate-400"
                  >
                    Image
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#f4b63f]">
            Website Features
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Everything needed for a clean, trustworthy client page.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Professional Layout",
              description:
                "A clean landing page structure with hero, about, services, gallery, and contact sections.",
              icon: LayoutTemplate,
            },
            {
              title: "Care-Focused Content",
              description:
                "Page sections designed specifically around residential care and family decision-making.",
              icon: Building2,
            },
            {
              title: "Gallery Preview",
              description:
                "Showcase rooms, shared spaces, meals, outdoor areas, and the feel of the home.",
              icon: ImageIcon,
            },
            {
              title: "Trust & Contact",
              description:
                "Highlight what matters most: dependable care, accessibility, and clear contact options.",
              icon: ShieldCheck,
            },
          ].map((feature) => {
            const Icon = feature.icon

            return (
              <Card key={feature.title} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#174a7c]/10 text-[#174a7c]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section id="preview" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#f4b63f]">
              Client Page Preview
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Built to feel polished without feeling overcomplicated.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The finished client page gives care homes a simple but professional
              web presence. It focuses on what families need to see first:
              comfort, trust, services, photos, and how to get in touch.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Clear hero section with call-to-action",
                "Service cards for care highlights",
                "Photo gallery carousel or preview grid",
                "Contact section with phone, email, and address",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#174a7c]" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-4 shadow-xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="h-52 bg-[#174a7c]" />
              <div className="space-y-4 p-6">
                <div className="h-4 w-28 rounded-full bg-[#f4b63f]" />
                <div className="h-8 w-3/4 rounded-lg bg-slate-200" />
                <div className="h-4 w-full rounded-lg bg-slate-100" />
                <div className="h-4 w-5/6 rounded-lg bg-slate-100" />

                <div className="grid gap-3 pt-4 sm:grid-cols-3">
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#f4b63f]">
              How It Works
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Sign up, review terms, and begin setting up your page.
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              {
                step: "01",
                title: "Create your account",
                description:
                  "Start the process through the LVM Residential Assisted Living sign-up flow.",
              },
              {
                step: "02",
                title: "Add care home details",
                description:
                  "Provide your home name, description, services, gallery images, and contact information.",
              },
              {
                step: "03",
                title: "Launch your client page",
                description:
                  "Use the finished page as a clean, public-facing website for families and referrals.",
              },
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="flex gap-5 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174a7c] text-sm font-bold text-white">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#174a7c] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#f4b63f]">
              Ready to Begin?
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold">
              Start your client website setup through LVM Systems.
            </h2>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#f4b63f] text-slate-950 hover:bg-[#dca236]"
          >
            <a href={signUpUrl}>
              Sign Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-bold">LVM Systems</p>
            <p className="mt-1 text-sm text-white/50">
              Residential Assisted Living website tools.
            </p>
          </div>

          <p className="text-sm text-white/50">
            © 2026 LVM Systems. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}