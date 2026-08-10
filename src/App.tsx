import Navbar from "@/components/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Work from "@/components/sections/Work"
import Services from "@/components/sections/Services"
import Process from "@/components/sections/Process"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import Pricing from "@/components/sections/Pricing"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"
import WhatYouCanExpect from "@/components/sections/WhatYouCanExpect"

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <WhyChooseUs />
      <Pricing />
      <WhatYouCanExpect />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
