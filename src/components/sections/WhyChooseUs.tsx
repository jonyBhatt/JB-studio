import { motion } from "framer-motion"
import { Sparkle, ArrowUpRight, ShieldCheck, Clock3, Eye, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealText from "@/components/RevealText"
import MultiStepProjectForm from "../Form/onboarding-form";

const strengths = [
  {
    title: "Experienced team",
    description: "Seasoned designers, developers, and strategists working together so every project feels polished and reliable.",
    icon: Users,
  },
  {
    title: "Fast turnaround",
    description: "A streamlined process that moves from brief to launch without sacrificing quality.",
    icon: Clock3,
  },
  {
    title: "Transparent pricing",
    description: "Clear scopes, honest proposals, and no surprises in the final invoice.",
    icon: Eye,
  },
  {
    title: "Quality-focused process",
    description: "Every milestone includes review, refinement, and a focus on measurable results.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated support",
    description: "Responsive communication and hands-on guidance throughout the engagement.",
    icon: ArrowUpRight,
  },
  {
    title: "Custom solutions",
    description: "Tailored digital experiences built for your brand, audience, and business goals.",
    icon: ArrowUpRight,
  },
]

export default function WhyChooseUs() { 
  return (
    <section className="bg-paper px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          WHY CHOOSE US
        </div>

        <RevealText
          as="h2"
          text="Why working with us is the smartest move for ambitious teams."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl">
              We bring clarity, speed, and craftsmanship to every project. From strategy through launch, our collaboration is built around the outcomes that matter most: strong conversions, confident growth, and a website you can rely on.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength, index) => {
                const Icon = strength.icon
                return (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{strength.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{strength.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 p-8 shadow-[0_36px_90px_-48px_rgba(79,70,229,0.6)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 text-white backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">Real focus, real results</p>
              <h3 className="mt-4 text-3xl font-extrabold">Built for service teams that move fast and stay precise.</h3>
              <p className="mt-6 text-sm leading-7 text-white/80">
                We structure every engagement so you can expect progress at every milestone, clear decisions in every review, and final delivery you can launch with confidence.
              </p>
              <Button className="mt-8 w-full justify-between bg-white text-ink hover:bg-white/90">
                Start Your Project <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>


        <MultiStepProjectForm />
      </div>
    </section>
  )
}
