"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Toaster } from "@/components/ui/sonner"

const colourTokens = [
  { token: "--primary", label: "Primary" },
  { token: "--primary-foreground", label: "Primary FG" },
  { token: "--secondary", label: "Secondary" },
  { token: "--secondary-foreground", label: "Secondary FG" },
  { token: "--background", label: "Background" },
  { token: "--foreground", label: "Foreground" },
  { token: "--muted", label: "Muted" },
  { token: "--muted-foreground", label: "Muted FG" },
  { token: "--accent", label: "Accent" },
  { token: "--accent-foreground", label: "Accent FG" },
  { token: "--destructive", label: "Destructive" },
  { token: "--card", label: "Card" },
  { token: "--border", label: "Border" },
  { token: "--input", label: "Input" },
  { token: "--ring", label: "Ring" },
]

const typeScale = [
  { cls: "text-xs", label: "xs", size: "12px" },
  { cls: "text-sm", label: "sm", size: "14px" },
  { cls: "text-base", label: "base", size: "16px" },
  { cls: "text-lg", label: "lg", size: "18px" },
  { cls: "text-xl", label: "xl", size: "20px" },
  { cls: "text-2xl", label: "2xl", size: "24px" },
  { cls: "text-3xl", label: "3xl", size: "30px" },
  { cls: "text-4xl", label: "4xl", size: "36px" },
]

const spacingScale = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24]

const radiusTokens = [
  { token: "--radius-sm", cls: "rounded-sm", label: "sm" },
  { token: "--radius-md", cls: "rounded-md", label: "md" },
  { token: "--radius-lg", cls: "rounded-lg", label: "lg" },
  { token: "--radius-xl", cls: "rounded-xl", label: "xl" },
  { token: "--radius-2xl", cls: "rounded-2xl", label: "2xl" },
  { token: "--radius-3xl", cls: "rounded-3xl", label: "3xl" },
  { token: "--radius-4xl", cls: "rounded-4xl", label: "4xl" },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight border-b pb-3">{title}</h2>
      {children}
    </section>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{title}</h3>
      {children}
    </div>
  )
}

function Swatch({ token, label }: { token: string; label: string }) {
  return (
    <div className="space-y-2">
      <div
        className="h-16 w-full rounded-lg border border-border"
        style={{ background: `var(${token})` }}
      />
      <div>
        <p className="text-xs font-medium leading-tight">{label}</p>
        <p className="text-[11px] font-mono text-muted-foreground leading-tight">{token}</p>
      </div>
    </div>
  )
}

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">Design System</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Component Reference</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Colour tokens, typography scale, spacing, border radius, and all installed components.
          </p>
        </header>

        {/* ── Colour Tokens ─────────────────────────────────────────── */}
        <Section title="Colour Tokens">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {colourTokens.map((t) => (
              <Swatch key={t.token} token={t.token} label={t.label} />
            ))}
          </div>
        </Section>

        {/* ── Typography ────────────────────────────────────────────── */}
        <Section title="Typography">
          <Sub title="Type scale">
            <div className="rounded-xl border divide-y">
              {typeScale.map(({ cls, label, size }) => (
                <div key={cls} className="flex items-baseline gap-4 px-5 py-3">
                  <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">{label}</span>
                  <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">{size}</span>
                  <span className={`${cls} leading-none`}>The quick brown fox jumps</span>
                </div>
              ))}
            </div>
          </Sub>

          <Sub title="Font weights">
            <div className="flex flex-wrap gap-8 rounded-xl border px-6 py-5">
              {(
                [
                  ["font-light", "300 Light"],
                  ["font-normal", "400 Normal"],
                  ["font-medium", "500 Medium"],
                  ["font-semibold", "600 Semibold"],
                  ["font-bold", "700 Bold"],
                ] as const
              ).map(([cls, label]) => (
                <div key={cls} className="space-y-1">
                  <p className={`text-xl ${cls}`}>Ag</p>
                  <p className="text-xs font-mono text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </Sub>
        </Section>

        {/* ── Spacing ───────────────────────────────────────────────── */}
        <Section title="Spacing Scale">
          <div className="rounded-xl border px-5 py-4 space-y-2.5">
            {spacingScale.map((n) => (
              <div key={n} className="flex items-center gap-4">
                <span className="w-6 shrink-0 font-mono text-xs text-muted-foreground text-right">{n}</span>
                <span className="w-10 shrink-0 font-mono text-xs text-muted-foreground">{n * 4}px</span>
                <div className="h-4 rounded-sm bg-primary" style={{ width: n * 4 }} />
              </div>
            ))}
          </div>
        </Section>

        {/* ── Border Radius ─────────────────────────────────────────── */}
        <Section title="Border Radius">
          <div className="flex flex-wrap gap-6 rounded-xl border px-6 py-5">
            {radiusTokens.map(({ token, cls, label }) => (
              <div key={token} className="flex flex-col items-center gap-2">
                <div className={`w-16 h-16 bg-primary/10 border-2 border-primary/25 ${cls}`} />
                <p className="text-xs font-medium">{label}</p>
                <p className="text-[11px] font-mono text-muted-foreground">{token}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Components ────────────────────────────────────────────── */}
        <Section title="Components">

          {/* Button */}
          <Sub title="Button">
            <div className="rounded-xl border p-6 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default" className="rounded-md">Default</Button>
                  <Button variant="secondary" className="rounded-md">Secondary</Button>
                  <Button variant="outline" className="rounded-md">Outline</Button>
                  <Button variant="ghost" className="rounded-md">Ghost</Button>
                  <Button variant="destructive" className="rounded-md">Destructive</Button>
                  <Button variant="link" className="rounded-md">Link</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="xs" className="rounded-md">Extra Small</Button>
                  <Button size="sm" className="rounded-md">Small</Button>
                  <Button size="default" className="rounded-md">Default</Button>
                  <Button size="lg" className="rounded-md">Large</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">States</p>
                <div className="flex gap-2">
                  <Button disabled className="rounded-md">Disabled</Button>
                  <Button variant="outline" disabled className="rounded-md">Disabled Outline</Button>
                </div>
              </div>
            </div>
          </Sub>

          {/* Badge */}
          <Sub title="Badge">
            <div className="rounded-xl border px-6 py-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
          </Sub>

          {/* Input & Label */}
          <Sub title="Input & Label">
            <div className="rounded-xl border p-6 grid sm:grid-cols-2 gap-4 max-w-xl">
              <div className="space-y-1.5">
                <Label htmlFor="ex-email">Email address</Label>
                <Input id="ex-email" type="email" placeholder="you@example.com" className="rounded-md" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ex-disabled">Disabled field</Label>
                <Input id="ex-disabled" disabled placeholder="Not editable" className="rounded-md" />
              </div>
            </div>
          </Sub>

          {/* Select */}
          <Sub title="Select">
            <div className="rounded-xl border p-6 max-w-xs">
              <div className="space-y-1.5">
                <Label>Framework</Label>
                <Select>
                  <SelectTrigger className="w-full rounded-md">
                    <SelectValue placeholder="Choose a framework…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="remix">Remix</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Sub>

          {/* Tabs */}
          <Sub title="Tabs">
            <div className="rounded-xl border p-6 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">Default variant</p>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Overview content goes here.</div>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Analytics content goes here.</div>
                  </TabsContent>
                  <TabsContent value="settings">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Settings content goes here.</div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">Line variant</p>
                <Tabs defaultValue="overview">
                  <TabsList variant="line">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Overview content goes here.</div>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Analytics content goes here.</div>
                  </TabsContent>
                  <TabsContent value="settings">
                    <div className="mt-3 rounded-lg border p-4 text-sm text-muted-foreground">Settings content goes here.</div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Sub>

          {/* Card */}
          <Sub title="Card">
            <div className="rounded-xl border p-6 grid sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Alpha</CardTitle>
                  <CardDescription>A next-generation design system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card shows the standard size with header, content, and footer sections.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="rounded-md">View Project</Button>
                  <Button size="sm" variant="ghost" className="rounded-md">Cancel</Button>
                </CardFooter>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CardTitle>Compact Card</CardTitle>
                  <CardDescription>Small size variant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The small size reduces padding throughout all card sections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Sub>

          {/* Dialog */}
          <Sub title="Dialog">
            <div className="rounded-xl border p-6">
              <Button variant="outline" className="rounded-md" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </Button>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm action</DialogTitle>
                    <DialogDescription>
                      This is an example dialog. It overlays the page content and can contain
                      any combination of text, form fields, or actions.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter showCloseButton>
                    <Button className="rounded-md" onClick={() => setDialogOpen(false)}>Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Sub>

          {/* Sonner */}
          <Sub title="Sonner">
            <div className="rounded-xl border p-6">
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="rounded-md" onClick={() => toast("Event has been created")}>
                  Default
                </Button>
                <Button variant="outline" className="rounded-md" onClick={() => toast.success("Changes saved successfully")}>
                  Success
                </Button>
                <Button variant="outline" className="rounded-md" onClick={() => toast.error("Something went wrong")}>
                  Error
                </Button>
                <Button variant="outline" className="rounded-md" onClick={() => toast.warning("Unsaved changes detected")}>
                  Warning
                </Button>
                <Button variant="outline" className="rounded-md" onClick={() => toast.info("A new version is available")}>
                  Info
                </Button>
                <Button variant="outline" className="rounded-md" onClick={() => toast.loading("Uploading file…")}>
                  Loading
                </Button>
              </div>
            </div>
          </Sub>

        </Section>
      </div>
    </div>
  )
}
