import { motion } from "framer-motion"
import { Sparkle, Star } from "lucide-react"
import RevealText from "@/components/RevealText"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.5 22H1.4l8.2-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.3l12.4 16Z" />
    </svg>
  )
}

const testimonials = [
  {
    name: "Michael Brown",
    role: "CEO, Bright Labs",
    quote: "JB transformed our online presence completely. Traffic and conversions both jumped within weeks.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    date: "06/17/2025",
    variant: "image",
  },
  {
    name: "Olivia Davis",
    role: "Product Manager",
    quote: "A true creative partner. JB combined strategy, design, and execution to deliver a modern digital experience we're proud of.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    date: "06/25/2025",
    variant: "text",
  },
  {
    name: "Daniel Wilson",
    role: "Creative Director",
    quote: "The animations and interactions felt premium from day one. Our clients keep complimenting the new site.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
    date: "06/09/2025",
    variant: "image",
  },
  {
    name: "Emma Carter",
    role: "Founder, Loop",
    quote: "Fast, communicative, and genuinely talented. JB delivered exactly what we envisioned, on time.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    date: "05/30/2025",
    variant: "text",
  },
]

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          TESTIMONIALS
        </div>
        <RevealText
          as="h2"
          text="Trusted by growing brands."
          className="mb-14 max-w-xl font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />
      </div>

      <div className="flex gap-5 overflow-x-auto px-6 pb-6 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative flex h-96 w-72 shrink-0 flex-col justify-end overflow-hidden rounded-3xl p-6 shadow-sm sm:w-80 ${
              t.variant === "image" ? "text-white" : "border border-black/5 bg-white text-ink"
            }`}
          >
            {t.variant === "image" && (
              <>
                <img src={t.img} alt={t.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              </>
            )}

            <div className="relative z-10 mb-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={t.img} className="h-9 w-9 rounded-full object-cover" alt="" />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className={`text-xs ${t.variant === "image" ? "text-white/70" : "text-ink/50"}`}>{t.role}</p>
                </div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
                <XIcon className="h-3.5 w-3.5 text-white" />
              </div>
            </div>

            <div className="relative z-10">
              {t.variant === "text" && <p className="mb-3 font-display text-lg font-bold">"{t.quote.split(".")[0]}."</p>}
              <p className={`text-sm ${t.variant === "image" ? "text-white/90" : "text-ink/70"}`}>{t.quote}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className={`text-xs ${t.variant === "image" ? "text-white/60" : "text-ink/40"}`}>{t.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
