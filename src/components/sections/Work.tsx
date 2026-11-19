import { motion } from "framer-motion"
import { ArrowUpRight, Sparkle } from "lucide-react"
import { Link } from "react-router"
import RevealText from "@/components/RevealText"

const sweepSpruseImage = "https://www.sweepspruse.com/images/cleaning.png"

export default function Work() {
  return (
    <section id="work" className="bg-paper px-6 pb-24 pt-12 sm:pb-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-ink/60">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          Real-world work
        </div>
        <RevealText
          as="h2"
          text="Built around real businesses."
          className="mx-auto mb-4 max-w-3xl text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        />
        <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-ink/60 sm:mb-16 sm:text-lg">
          See how a custom website platform can make it easier for customers to
          find the right service and take the next step.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Link
            to="/work/sweep-spruse"
            aria-label="View the Sweep Spruse real-world case study"
            className="group grid overflow-hidden rounded-[1.75rem] bg-[#153820] text-white shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#245d34] md:grid-cols-[1.05fr_0.95fr] md:rounded-[2rem]"
          >
            <div className="relative min-h-64 overflow-hidden sm:min-h-80 md:min-h-124">
              <img
                src={sweepSpruseImage}
                alt="A bright, clean home interior from the Sweep Spruse website"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />
              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur-sm sm:left-7 sm:top-7">
                Featured case study
              </span>
              <span className="absolute bottom-5 left-5 font-heading text-3xl font-semibold sm:bottom-7 sm:left-7 sm:text-4xl">
                Sweep <span className="italic text-[#c8dfc7]">Spruse</span>
              </span>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-9 md:p-10 lg:p-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c8dfc7]">
                  Property care · Website platform
                </p>
                <h3 className="mt-5 max-w-lg font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  Less mess for customers. More room to grow.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                  Four essential property services, one clear digital front
                  door—and a smarter customer journey ready to take shape.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {["Cleaning", "Snow removal", "Junk removal", "Lawn care"].map(
                    (service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80"
                      >
                        {service}
                      </span>
                    ),
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5">
                  <span className="text-sm font-medium text-white/80">
                    Explore the use case
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d6ead3] text-[#153820] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
