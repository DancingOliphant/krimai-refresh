import AnimatedBackground from '@/components/AnimatedBackground'
import Header from '@/components/Header'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 z-0"></div>
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto pt-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              KrimAI
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl">
              Revolutionizing criminal investigations with state-of-the-art AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="bg-transparent border border-blue-400 hover:border-blue-300 text-blue-300 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
