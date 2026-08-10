import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface RevealTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p"
  dark?: boolean
}

export default function RevealText({ text, className = "", as = "h2", dark = false }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = as
  const dim = dark ? "rgba(255,255,255,0.15)" : "rgba(10,10,10,0.15)"
  const full = dark ? "rgba(255,255,255,1)" : "rgba(10,10,10,1)"

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const words = el.querySelectorAll(".reveal-word")
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: dim },
        {
          color: full,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.5,
          },
        }
      )
    }, el)
    return () => ctx.revert()
  }, [dim, full])

  const words = text.split(" ")

  return (
    <Tag
      ref={ref as any}
      className={`${className}`}
      style={{
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
        wordSpacing: "0.1em",
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        display: "block",
        overflow: "visible",
      }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="reveal-word"
          style={{
            color: dim,
            display: "inline-block",
            marginRight: i < words.length - 1 ? "0.3em" : "0",
            transition: "color 0.3s ease",
          }}
        >
          {w}
        </span>
      ))}
    </Tag>
  )
}
