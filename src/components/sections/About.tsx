import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealText from "@/components/RevealText";
import BotliImage from "../../assets/bolti.jpeg";
import CtoImage from "../../assets/CTO.jpeg";

export default function About() {
  return (
    <section className="relative bg-paper px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 ">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-medium text-ink/70"
        >
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          ABOUT JB
        </motion.div>

        <div>
          <RevealText
            as="h2"
            text="Built for ambitious brands that refuse ordinary, combining strategy, creativity, and modern no-code solutions to create lasting impact worldwide."
            className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="mt-8">Let's Talk</Button>
          </motion.div>

          {/* <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  CEO & Co-Founder
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold">
                  Suraiya Bokul Bushra
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  Successfully developed and scaled brands with a strong focus on
                  strategy, digital growth, and long-term impact.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="https://www.facebook.com/share/1BkXpQ8tPr/" className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/70">
                    Sparkling Accessories
                  </a>
                  <a href="https://www.facebook.com/people/SB-Delivery-Service/100069694022549/" className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/70">
                    S.B Delivery Service
                  </a>
                </div>
              </div>
              <img
                src={BotliImage}
                className="h-24 w-20 rounded-xl object-cover"
                alt="CEO and Co-Founder"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  COO & Co-Founder
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold">
                  Jony Bhattacharjee
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  Supports business growth through operations, partnerships, and
                  strong execution across ventures.
                </p>
              </div>
              <img
                src={CtoImage}
                className="h-24 w-20 rounded-xl object-cover"
                alt="COO and Co-Founder"
              />
            </motion.div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
