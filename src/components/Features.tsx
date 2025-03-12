import { Fingerprint, Shield, Zap, Database, Search, LineChart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Advanced Pattern Recognition',
      description: 'Identify patterns and connections in complex case data that human investigators might miss.',
      icon: <Search className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Secure Data Processing',
      description: 'Bank-level encryption and security protocols ensure your sensitive case data remains protected.',
      icon: <Shield className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Rapid Analysis',
      description: 'Process thousands of documents, reports, and evidence items in minutes rather than days or weeks.',
      icon: <Zap className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Comprehensive Database',
      description: 'Access a vast database of historical cases and precedents to inform your current investigations.',
      icon: <Database className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Biometric Integration',
      description: 'Seamlessly integrate with existing biometric systems for enhanced identification capabilities.',
      icon: <Fingerprint className="h-10 w-10 text-blue-500" />
    },
    {
      title: 'Performance Analytics',
      description: 'Track case progress and investigative performance with detailed analytics and reporting tools.',
      icon: <LineChart className="h-10 w-10 text-blue-500" />
    }
  ]

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-slate-950 opacity-90 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Our AI-powered platform offers a suite of tools designed specifically for modern criminal investigations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
