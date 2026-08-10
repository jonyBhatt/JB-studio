import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkle, ArrowUpRight, Zap, FileText, Code2, Rocket, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealText from "@/components/RevealText"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Map your goals, audience, and brand so every decision is rooted in strategy.",
    icon: Zap,
    dark: false,
    rot: -8,
  },
  {
    n: "02",
    title: "Plan",
    desc: "Define milestones, timelines, and a clear scope to keep the project moving fast.",
    icon: FileText,
    dark: true,
    rot: -4,
  },
  {
    n: "03",
    title: "Build",
    desc: "Develop polished visuals, responsive layouts, and launch-ready interactions.",
    icon: Code2,
    dark: false,
    rot: 3,
  },
  {
    n: "04",
    title: "Launch",
    desc: "Deploy the site with quality checks, optimization, and a seamless handoff.",
    icon: Rocket,
    dark: true,
    rot: 7,
  },
  {
    n: "05",
    title: "Support",
    desc: "Keep the momentum going with ongoing updates, maintenance, and collaboration.",
    icon: Headphones,
    dark: false,
    rot: -5,
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const watermarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.set(card, { rotate: steps[i].rot, y: i % 2 === 0 ? 20 : -10 })
        gsap.to(card, {
          rotate: 0,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 0.6,
          },
        })
      })

      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 100, opacity: 1, color: "rgb(10, 10, 10)" },
          {
            y: -400,
            opacity: 0,
            color: "rgba(10, 10, 10, 0.05)",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        )
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="relative overflow-hidden bg-paper px-6 py-28 lg:px-10">
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute inset-x-0 bottom-10 select-none text-center font-display text-[10rem] font-black leading-none text-ink/7 sm:text-[16rem]"
        style={{ zIndex: 0 }}
      >
        JB
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          PROCESS
        </div>

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <RevealText
            as="h2"
            text="A clear, five-step process from discovery to launch and support."
            className="max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
          />
          <Button className="shrink-0">
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div ref={containerRef} className="relative mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.n}
                ref={(el) => {
                  cardsRef.current[i] = el
                }}
                className={`relative rounded-3xl border p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg ${
                  s.dark ? "border-black bg-ink text-white" : "border-black/5 bg-white text-ink"
                }`}
              >
                <div
                  className={`mb-10 flex h-11 w-11 items-center justify-center rounded-xl border ${
                    s.dark ? "border-accent/60" : "border-accent/40"
                  }`}
                >
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold">
                  {s.n} — {s.title}
                </h3>
                <p className={`mt-2 text-sm ${s.dark ? "text-white/60" : "text-ink/60"}`}>
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
