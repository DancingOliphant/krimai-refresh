import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Case Data',
      description: 'Securely upload your case files, evidence, and reports to our platform.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced AI algorithms analyze the data to identify patterns, connections, and insights.',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      number: '03',
      title: 'Review Insights',
      description: 'Explore the AI-generated insights, connections, and recommendations for your investigation.',
      color: 'from-purple-600 to-purple-400'
    },
    {
      number: '04',
      title: 'Take Action',
      description: 'Use the insights to inform your investigation strategy and next steps.',
      color: 'from-pink-600 to-pink-400'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-blue-950 opacity-90 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Our streamlined process makes it easy to leverage AI for your investigations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 text-white font-bold text-xl`}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl font-bold text-white mb-4">See KrimAI in Action</h3>
              <p className="text-gray-300 mb-6">
                Watch how our AI platform transforms investigation workflows and helps solve cases faster.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Watch Demo Video
              </button>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-80 relative bg-gray-800 rounded-lg overflow-hidden">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition duration-300">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-transparent border-l-white ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
