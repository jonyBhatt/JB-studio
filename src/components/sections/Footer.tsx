import { Sparkle, ArrowUpRight } from "lucide-react";
import Logo from "@/assets/logo/jb-dark.svg";
import FooterImage from "@/assets/logo/jb-footer.svg";

const navLinks = ["Home", "Services", "Process", "Pricing", "Blog"];
const socials = ["Twitter", "Dribbble", "Instagram", "Facebook"];

export default function Footer() {
  return (
    <footer id="contact" className="relative  bg-paper">
      <div className="overflow-hidden border-y border-black/10 py-6 relative">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={`font-display text-5xl font-extrabold ${
                i % 2 === 0 ? "text-ink" : "text-ink/20"
              }`}
            >
              JITB Studio
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 ">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={Logo}
              alt="JITB Studio Logo"
              className="h-52 w-full rounded-2xl object-cover"
            />
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
              Let's build together
            </div>
            <a
              href="mailto:hello@JBstudio.com"
              className="mt-1 inline-flex items-center gap-1 font-display text-lg font-bold hover:text-accent"
            >
              hello@JBstudio.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-4 text-sm text-ink/50">Navigation</p>
              <ul className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="font-medium hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm text-ink/50">Social media</p>
              <ul className="flex flex-col gap-3">
                {socials.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-bold hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-ink/60 sm:flex-row">
          <p>©2026 JB Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">
              Terms of Use
            </a>
            <a href="#" className="hover:text-accent">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="hidden h-[28vw] w-full select-none overflow-hidden bg-paper md:block">
        <img
          src={FooterImage}
          alt="JITB Studio Footer"
          className="block h-auto w-full"
        />
      </div>
    </footer>
  );
}
