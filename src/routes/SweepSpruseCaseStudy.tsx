import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardList,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import { Link } from "react-router"

const sweepSpruseImage = "https://www.sweepspruse.com/images/cleaning.png"
const services = [
  "Home & apartment cleaning",
  "Snow removal",
  "Junk removal",
  "Lawn maintenance",
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function SweepSpruseCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#fafaf7] text-[#171b17]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-10">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#31563a] transition-colors hover:text-[#142b19]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Back to work</span>
          <span className="sm:hidden">Work</span>
        </Link>
        <Link
          to="/"
          aria-label="JITB Studio home"
          className="font-display text-sm font-extrabold uppercase tracking-[0.16em] sm:text-base"
        >
          JITB <span className="text-[#52744e]">STUDIO</span>
        </Link>
        <a
          href="https://www.sweepspruse.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#31563a] transition-colors hover:text-[#142b19] sm:text-sm"
        >
          Visit website <ArrowUpRight className="h-4 w-4" />
        </a>
      </header>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10 lg:pt-20"
      >
        <motion.div variants={reveal} transition={{ duration: 0.65 }}>
          <p className="mb-5 flex items-center justify-center gap-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#547354] sm:text-xs">
            <span className="h-px w-8 bg-[#a8bda2] sm:w-12" />
            A real-world business case
            <span className="h-px w-8 bg-[#a8bda2] sm:w-12" />
          </p>
          <h1 className="mx-auto max-w-4xl text-center font-heading text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
            Less mess.
            <br />
            <span className="italic text-[#31563a]">More room to grow.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#5b625b] sm:mt-8 sm:text-lg">
            A custom website platform for Sweep Spruse—and a practical AI
            business agent concept to make every customer inquiry easier to
            handle.
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          transition={{ duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-[1.5rem] sm:mt-14 sm:rounded-[2rem]"
        >
          <img
            src={sweepSpruseImage}
            alt="A light-filled, clean home featured on the Sweep Spruse website"
            className="h-64 w-full object-cover sm:h-[26rem] lg:h-[34rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                The business
              </p>
              <p className="mt-1 font-heading text-3xl sm:text-4xl">
                Sweep Spruse
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/85 sm:text-right">
              Home and apartment care, snow removal, junk removal, and lawn
              maintenance.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <section className="border-y border-[#e5e8e1] bg-white/70">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-4 lg:px-10"
        >
          {[
            ["04", "property-care services"],
            ["01", "custom website platform"],
            ["AI", "business agent opportunity"],
            ["01", "customer-first journey"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              variants={reveal}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-[#b8cdb4] pl-4 sm:pl-5"
            >
              <p className="font-heading text-3xl text-[#31563a] sm:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#697069] sm:text-sm">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#547354]">
            The challenge
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            Every service brings a different question.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="rounded-3xl bg-[#eef2ec] p-6 sm:p-9 lg:p-10"
        >
          <p className="text-base leading-relaxed text-[#515951] sm:text-lg">
            Customers need different services, have questions, request quotes,
            and bring different scheduling needs. Handling every inquiry
            manually can take valuable time away from running the business.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2.5 rounded-xl border border-[#dce4d9] bg-white/75 px-4 py-3 text-sm text-[#3b493d]"
              >
                <Check className="h-4 w-4 shrink-0 text-[#57805a]" />
                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-[#152b1b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8d3b4]">
              How JITB Studio can help
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              One helpful journey, from first click to quote request.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-9 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl text-[#b8d3b4]">01</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b8d3b4]/10 text-[#c5dfc1]">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#b8d3b4]">
                Built platform
              </p>
              <h3 className="mt-2 font-heading text-3xl sm:text-4xl">
                A website that turns visits into next steps.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                The custom website gives each service room to shine and makes
                it easier for customers to understand what Sweep Spruse offers
                and how to get started.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Clear information across all four services",
                  "A professional, mobile-friendly experience",
                  "Simple paths to request a quote or appointment",
                  "A stronger first impression that builds trust",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b8d3b4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-[#b8d3b4]/20 bg-[#203b27] p-6 sm:p-9 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl text-[#b8d3b4]">02</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b8d3b4]/10 text-[#c5dfc1]">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#b8d3b4]">
                Custom AI agent · Next layer
              </p>
              <h3 className="mt-2 font-heading text-3xl sm:text-4xl">
                A helpful first response, any time.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
                A custom business agent could answer common questions, gather
                the details needed for a quote, and help customers move toward
                booking—while keeping the team in control.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Answer questions about services and next steps",
                  "Collect property details and customer requirements",
                  "Organize and qualify quote requests for the team",
                  "Help customers request an appointment or booking",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b8d3b4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#547354]">
            A better customer journey
          </p>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            From “I have a question” to a clear next step.
          </h2>
        </motion.div>

        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {[
            {
              title: "Get an answer",
              text: "Customers get immediate guidance about the services.",
              icon: MessageCircle,
            },
            {
              title: "Share the details",
              text: "The agent asks about the property and what is needed.",
              icon: ClipboardList,
            },
            {
              title: "Find the right service",
              text: "The request is organized around the right kind of work.",
              icon: Sparkles,
            },
            {
              title: "Request a time",
              text: "Customers can take the next step toward a booking.",
              icon: CalendarDays,
            },
          ].map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-[#e3e7df] bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#719071]">
                    0{index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-[#52744e]" />
                </div>
                <h3 className="mt-7 font-heading text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6a706a]">
                  {step.text}
                </p>
                {index < 3 && (
                  <ArrowDown className="mt-5 h-4 w-4 text-[#a2b39e] sm:hidden" />
                )}
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#eaf0e7] p-6 sm:rounded-[2rem] sm:p-10 lg:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#547354]">
                The business outcome
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Less time on repeat questions. More time for the work.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#596459] sm:text-base">
                A clearer website and a well-designed AI agent can help Sweep
                Spruse respond faster, keep quote requests organized, and make
                it easier for more visitors to become customers.
              </p>
            </div>
            <a
              href="mailto:hello@JBstudio.com?subject=Build%20my%20business%20growth%20system"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#1b4928] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#14391e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b4928] sm:w-fit"
            >
              Build My Business Growth System
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-[#e5e8e1] px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-[#707770] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JITB Studio</p>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-medium text-[#31563a] hover:text-[#142b19]"
          >
            Back to all work <ArrowLeft className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </main>
  )
}
