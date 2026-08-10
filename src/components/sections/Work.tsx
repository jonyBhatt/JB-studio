import RevealText from "@/components/RevealText"
import { Sparkle } from "lucide-react"

const projects = [
  {
    n: "01",
    title: "Finance SaaS Website",
    desc: "A premium Framer website designed for a modern fintech brand.",
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop",
    tint: "from-black/10",
  },
  {
    n: "02",
    title: "AI Automation Platform",
    desc: "A scalable product website built to simplify complex AI solutions through clear storytelling and intuitive design.",
    img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
    tint: "from-orange-600/40",
  },
  {
    n: "03",
    title: "Fashion Ecommerce",
    desc: "An editorial shopping experience crafted to showcase premium products with a clean, modern aesthetic.",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    tint: "from-slate-700/50",
  },
  {
    n: "04",
    title: "Automotive Reveal",
    desc: "A high-impact product site built to launch a next-generation vehicle with cinematic motion.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    tint: "from-neutral-400/40",
  },
  {
    n: "05",
    title: "Creative Agency",
    desc: "A bold agency website featuring immersive interactions, smooth animations, and premium visual storytelling.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    tint: "from-slate-600/40",
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-paper px-6 pb-32 pt-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-center gap-2 text-sm font-medium text-ink/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          WORK
        </div>
        <RevealText
          as="h2"
          text="Build, Launch, and Scale with Purpose."
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        />

        <div className="relative">
          {projects.map((p, i) => (
            <div
              key={p.n}
              className="sticky top-24 mb-6 overflow-hidden rounded-3xl shadow-2xl"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative h-[420px] w-full sm:h-[480px]">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.tint} to-black/10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute left-8 top-8 font-display text-3xl font-bold text-white/70">
                  {p.n}
                </span>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/80">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
