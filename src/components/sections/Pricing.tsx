import { motion } from "framer-motion"
import { Sparkle, Globe, ArrowUpRight, Check } from "lucide-react"
import RevealText from "@/components/RevealText"

const plans = [
  {
    tag: "Single Project",
    title: "Single",
    titleBold: "Project",
    desc: "Perfect for startups and businesses launching a single premium website.",
    price: "$499",
    unit: "/ Project",
    dark: false,
    features: ["1 Custom Website", "Responsive Design", "2 Weeks Delivery", "Basic SEO Setup"],
  },
  {
    tag: "Growth Package",
    title: "Multi-Project",
    titleBold: "Package",
    desc: "Ideal for agencies and growing brands managing multiple projects.",
    price: "$1,499",
    unit: "/ Package",
    dark: true,
    features: ["Up to 5 Websites", "Priority Support", "Advanced Animations", "Ongoing Maintenance"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          PRICING
        </div>
        <RevealText
          as="h2"
          text="Flexible plans for growing businesses."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {plans.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col justify-between rounded-3xl border p-8 sm:p-10 ${
                p.dark ? "border-black bg-ink text-white" : "border-black/5 bg-white text-ink"
              }`}
            >
              <div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium ${
                    p.dark ? "border-white/20" : "border-black/10"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {p.tag}
                </span>

                <h3 className="mt-6 font-display text-3xl font-medium sm:text-4xl">
                  {p.title}
                  <br />
                  <span className="font-extrabold">{p.titleBold}</span>
                </h3>

                <p className={`mt-4 max-w-xs text-sm ${p.dark ? "text-white/60" : "text-ink/60"}`}>
                  {p.desc}
                </p>

                <ul className="mt-6 flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.dark ? "text-white/80" : "text-ink/70"}`}>
                      <Check className="h-4 w-4 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex items-center justify-center">
                <div
                  className={`flex h-32 w-32 flex-col items-center justify-center rounded-full ${
                    p.dark ? "bg-white text-ink" : "bg-ink text-white"
                  }`}
                >
                  <span className="font-display text-2xl font-extrabold">{p.price}</span>
                  <span className="text-[10px] opacity-70">From</span>
                  <span className="text-[10px] opacity-70">{p.unit}</span>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-current/10 pt-6">
                <div className={`flex items-center gap-2 text-sm ${p.dark ? "text-white/70" : "text-ink/60"}`}>
                  <Globe className="h-4 w-4" />
                  Available Worldwide
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full cursor-pointer ${
                    p.dark ? "bg-white text-ink" : "bg-ink text-white"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
