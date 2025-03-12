import AnimatedBackground from '@/components/AnimatedBackground'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 z-0"></div>
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          KrimAI
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl">
          Revolutionizing criminal investigations with state-of-the-art AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-blue-400 hover:border-blue-300 text-blue-300 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
