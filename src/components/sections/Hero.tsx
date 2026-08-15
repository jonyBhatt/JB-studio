import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmokeBackground from "@/components/SmokeBackground";
import LiquidEther from "../LiquidEther";

const images = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=600&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex  flex-col  overflow-hidden bg-black"
    >
      <div
        style={{ width: "100%", height: 1000, position: "relative", zIndex: 0 }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          // color0="#5227FF"
          // color1="#FF9FFC"
          // color2="#B497CF"
        ></LiquidEther>
        <div className="pt-24 flex flex-col justify-end min-h-dvh items-center">
          <div className="absolute z-10 bottom-0 mx-auto w-full max-w-7xl px-6 lg:px-10 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-2 text-sm text-white/80"
            >
              <Sparkle className="h-3.5 w-3.5 fill-accent text-accent" />
              Helping ambitious brands launch faster
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-6xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl"
            >
              JB
              Stdio
            </motion.h1>

            <div className="mt-16 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-sm"
              >
                <p className="text-white/70">
                  We build websites and experiences that help brands launch
                  faster, grow smarter, and stand out with confidence.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="light">
                    Explore Projects <span className="text-accent">•</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Book a Call <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full max-w-md"
              >
                <div className="flex gap-2 overflow-hidden rounded-2xl">
                  <div className="relative h-40 w-1/2 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={images[0]}
                      alt="Studio"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="font-display text-lg font-bold text-white">
                        JB studio
                      </span>
                    </div>
                  </div>
                  <div className="h-40 w-1/2 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={images[1]}
                      alt="Detail"
                      className="h-full w-full object-cover opacity-80"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
                  <span>0.2</span>
                  <div className="h-px flex-1 bg-white/20" />
                  <span>0.3</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
