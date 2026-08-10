import { motion } from "framer-motion"
import { CheckCircle, MessageSquare, ShieldCheck, Clock3, RefreshCw } from "lucide-react"
import RevealText from "@/components/RevealText"

const expectations = [
  {
    title: "Clear communication",
    description: "Structured check-ins and concise updates keep every stakeholder aligned and confident.",
    icon: MessageSquare,
  },
  {
    title: "No hidden costs",
    description: "Transparent proposals with a fixed scope so you always know exactly what is included.",
    icon: ShieldCheck,
  },
  {
    title: "Regular updates",
    description: "Milestone progress is shared early and often so the project stays visible and on track.",
    icon: Clock3,
  },
  {
    title: "On-time delivery",
    description: "A dependable process built around realistic timelines and rapid execution.",
    icon: CheckCircle,
  },
  {
    title: "Post-launch support",
    description: "Ongoing care after launch so your experience stays polished and effective.",
    icon: RefreshCw,
  },
]

export default function WhatYouCanExpect() {
  return (
    <section className=" px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-ink/70">
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-white text-[0.65rem]">✓</span>
          WHAT YOU CAN EXPECT
        </div>

        <RevealText
          as="h2"
          text="A better engagement experience for ambitious service teams."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] border border-black/5 bg-white p-10 shadow-sm"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Built for dependable service delivery</p>
              <h3 className="mt-4 text-3xl font-extrabold text-ink">Experience the clarity and confidence of a partnership designed to deliver.</h3>
              <p className="mt-6 max-w-xl text-sm leading-7 text-ink/70">
                Every engagement is organized around transparency, accountability, and ongoing momentum — so you never wonder where the project stands or what happens next.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expectations.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-ink">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-ink/70">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-900 p-10 text-white shadow-[0_40px_100px_-50px_rgba(79,70,229,0.75)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.18),transparent_35%)]" />
            <div className="relative space-y-6 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5  text-center" style={{padding:"20px", marginBottom:"10px"}}>
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">What you can expect</p>
                <h3 className="mt-4 text-3xl font-bold">A process that feels organized, predictable, and refreshingly efficient.</h3>
              </div>
              <div className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Expect clear scope and proactive updates.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Know where the project stands at every milestone.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Launch with confidence and support after delivery.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">No surprises, only momentum.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
