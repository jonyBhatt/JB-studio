import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = ["Work", "Services", "Blog", "Pricing"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-display text-xl font-bold text-white">
          JB
        </a>

        <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-sm lg:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        <Button
          variant="light"
          className="hidden lg:inline-flex"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Start Project <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
        </Button>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 bg-black px-6 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/80"
            >
              {l}
            </a>
          ))}
          <Button variant="light" className="w-fit">
            Start Project
          </Button>
        </div>
      )}
    </motion.header>
  )
}
