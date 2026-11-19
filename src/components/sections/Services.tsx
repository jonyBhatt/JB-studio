import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkle, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealText from "@/components/RevealText"

const services = [
  {
    n: "01",
    title: "Custom Website Platform Development",
    tags: ["Custom Build", "Responsive", "Scalable"],
    desc: "Purpose-built websites and digital platforms tailored to your business goals, users, and workflows.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "AI-Enabled Web Platforms",
    tags: ["AI Features", "Automation", "Data"],
    desc: "Integrate practical AI capabilities into your website to improve customer experiences and automate operations.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Custom AI Agents for Business",
    tags: ["AI Agent", "Chat", "Integrations"],
    desc: "Custom AI agents that handle support, sales, internal tasks, and content using your business data and processes.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Workflow & System Automation",
    tags: ["Integrations", "API", "Workflow"],
    desc: "Connect websites, apps, CRM, and internal tools to reduce manual work and keep business operations moving.",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    n: "05",
    title: "Launch, Growth & Optimization",
    tags: ["SEO", "Analytics", "Support"],
    desc: "Launch with confidence and improve performance through analytics, SEO, optimization, and ongoing support.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
]

export default function Services() {
  const [open, setOpen] = useState("01")

  return (
    <section id="services" className="bg-black px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-center gap-2 text-sm font-medium text-white/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          SERVICES
        </div>
        <RevealText
          dark
          as="h2"
          text="Crafted with purpose. Built for lasting impact."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="flex flex-col gap-4">
          {services.map((s) => {
            const isOpen = open === s.n
            return (
              <div
                key={s.n}
                className="cursor-pointer rounded-2xl border border-white/5 bg-[#111111] px-6 py-6 transition-colors sm:px-8"
                onClick={() => setOpen(isOpen ? "" : s.n)}
              >
                <div className="flex items-center gap-6">
                  <span className="font-display text-3xl font-bold text-white/20 sm:text-4xl">{s.n}.</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{s.title}</h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                            <img
                              src={s.img}
                              alt={s.title}
                              className="h-40 w-full rounded-xl object-cover sm:w-56"
                            />
                            <p className="max-w-xs text-white/60">{s.desc}</p>
                            <Button variant="light" className="sm:ml-auto">
                              Start Project <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
