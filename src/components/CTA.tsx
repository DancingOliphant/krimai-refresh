export default function CTA() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-950 opacity-90 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-10 shadow-2xl border border-blue-700">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to transform your investigations?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Join hundreds of law enforcement agencies using KrimAI to solve cases faster and more effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
                Request Demo
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
