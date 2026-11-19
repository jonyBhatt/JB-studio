import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkle, ArrowUpRight, ShieldCheck, Clock3, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealText from "@/components/RevealText"
import MultiStepProjectForm from "../Form/onboarding-form";

gsap.registerPlugin(ScrollTrigger)

const strengths = [
  {
    title: "01. Strategy Before Technology",
    boldDescription: "Built Around Your Business Goals.",
    description: "We start by understanding your business, customers, and challenges. Every website and AI solution is designed around what you actually need to grow.",
    icon: Users,
  },
  {
    title: "02. Websites That Turn Visitors Into Customers",
    boldDescription: "More Than Just Good Design.",
    description: "We build fast, mobile-first, SEO-ready websites with clear messaging and conversion-focused experiences that turn visitors into valuable leads.",
    icon: Clock3,
  },
  {
    title: "03. AI Agents Built for Your Business",
    boldDescription: "Automation That Understands How You Work.",
    description: "Forget generic chatbots. We develop custom AI agents around your business information and workflows to handle customer support, qualify leads, book appointments, and automate repetitive tasks.",
    icon: Eye,
  },
  {
    title: "04. Less Manual Work. More Growth.",
    boldDescription: "Give Your Time Back.",
    description: "Automate everyday tasks, respond to customer inquiries faster, and capture opportunities around the clock without adding unnecessary work to your team.",
    icon: ShieldCheck,
  },
  {
    title: "05. One Partner for Digital Growth",
    boldDescription: "Your Website and AI, Working Together.",
    description: "Instead of managing disconnected solutions, get one strategic partner for your website, AI automation, and digital growth needs.",
    icon: ArrowUpRight,
  },
  {
    title: "06. Built to Grow With You",
    boldDescription: "Solutions That Adapt as You Scale.",
    description: "As your business evolves, your digital systems can evolve too. Build on a stronger online presence and expand your automation as your needs grow.",
    icon: ArrowUpRight,
  },
]

export default function WhyChooseUs() { 
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(".why-eyebrow", {
        opacity: 0,
        y: 14,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      })

      gsap.from(".why-intro", {
        opacity: 0,
        y: 32,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-intro",
          start: "top 82%",
          once: true,
        },
      })

      gsap.from(".why-card", {
        opacity: 0,
        y: 38,
        scale: 0.985,
        duration: 0.72,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-card-grid",
          start: "top 78%",
          once: true,
        },
      })

      gsap.from(".why-cta", {
        opacity: 0,
        x: 42,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-cta",
          start: "top 82%",
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-paper px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="why-eyebrow mb-6 flex items-center justify-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          WHY CHOOSE US
        </div>

        <RevealText
          as="h2"
          text="More Than a Website. A Smarter Way to Grow Your Business."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="why-intro text-xl leading-relaxed text-ink/80 sm:text-2xl font-sans">
              We bring clarity, speed, and craftsmanship to every project. From strategy through launch, our collaboration is built around the outcomes that matter most: strong conversions, confident growth, and a website you can rely on.
            </p>

            <div className="why-card-grid grid gap-4 sm:grid-cols-2">
              {strengths.map((strength, index) => {
                const Icon = strength.icon
                return (
                  <motion.div
                    key={strength.title}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22, delay: index * 0.015 }}
                    className="why-card group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/20 hover:shadow-[0_18px_45px_-25px_rgba(79,70,229,0.45)]"
                  >
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="font-display text-lg font-bold text-ink">{strength.title}</h3>
                    <p className="mt-3 text-sm font-bold text-ink/90">{strength.boldDescription}</p>
                    <p className="mt-2 text-sm text-ink/70">{strength.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="why-cta relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-slate-950 via-indigo-950 to-violet-900 p-8 shadow-[0_36px_90px_-48px_rgba(79,70,229,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 text-white backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">FINAL CTA:</p>
              <h3 className="mt-4 text-3xl font-extrabold">Ready to Make Your Business Work Smarter?</h3>
              <p className="mt-6 text-sm leading-7 text-white/80">
                Let's build the website and AI systems that move your business forward.
              </p>
              <Button className="mt-8 w-full justify-between bg-white text-ink hover:bg-white/90">
                Start Your Project <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>


        {/* <MultiStepProjectForm /> */}
      </div>
    </section>
  )
}
