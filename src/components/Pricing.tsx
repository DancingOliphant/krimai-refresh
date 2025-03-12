import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: 'per month',
      description: 'Essential AI tools for small investigation teams',
      features: [
        'Up to 5 user accounts',
        '500 GB secure storage',
        'Basic pattern recognition',
        'Document analysis',
        'Standard support',
        '1-year data retention'
      ],
      highlighted: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$699',
      period: 'per month',
      description: 'Advanced capabilities for professional investigators',
      features: [
        'Up to 20 user accounts',
        '2 TB secure storage',
        'Advanced pattern recognition',
        'Full evidence integration',
        'Priority support',
        '3-year data retention',
        'Custom reporting'
      ],
      highlighted: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored pricing',
      description: 'Full-scale solution for large departments',
      features: [
        'Unlimited user accounts',
        'Unlimited secure storage',
        'Custom AI model training',
        'Full system integration',
        '24/7 dedicated support',
        'Unlimited data retention',
        'Advanced analytics dashboard',
        'On-premises deployment option'
      ],
      highlighted: false,
      buttonText: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-950 opacity-90 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Choose the plan that's right for your investigation needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border
                ${plan.highlighted 
                  ? 'border-blue-500 transform md:-translate-y-4 relative z-10' 
                  : 'border-slate-800'
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-4 rounded-lg transition duration-300 font-medium
                  ${plan.highlighted 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
