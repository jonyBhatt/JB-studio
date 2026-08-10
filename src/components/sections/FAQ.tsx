import { Sparkle } from "lucide-react"
import RevealText from "@/components/RevealText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites are completed within 2–4 weeks, depending on the project scope, content, and revisions.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes — every plan includes a support window after launch, with optional ongoing maintenance packages for continued updates.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. We regularly rebuild and modernize existing sites while preserving what already works for your brand.",
  },
  {
    q: "What platforms do you build on?",
    a: "We primarily build with Framer and modern no-code tools, alongside custom code when a project calls for it.",
  },
  {
    q: "Do you offer custom pricing for larger projects?",
    a: "Yes, larger or multi-phase projects are scoped individually — reach out and we'll put together a tailored quote.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-black px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-white/70">
          <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
          FAQ
        </div>
        <RevealText
          dark
          as="h2"
          text="Frequently asked questions"
          className="mb-16 text-center font-display text-4xl font-extrabold leading-tight sm:text-5xl"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-white/5 bg-[#111111] px-6 py-4"
              >
                <AccordionTrigger className="text-left font-display text-base font-bold text-white sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/60">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
            alt="Team working"
            className="h-full min-h-[360px] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
