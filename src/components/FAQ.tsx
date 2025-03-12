'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How does KrimAI protect sensitive case data?',
      answer: 'KrimAI employs end-to-end encryption, secure access controls, and follows strict data security protocols that comply with law enforcement standards. All data is stored in secure, compliant facilities with regular security audits.'
    },
    {
      question: 'Can KrimAI integrate with our existing case management systems?',
      answer: 'Yes, KrimAI is designed with open APIs that allow integration with most popular case management systems used in law enforcement. Our team can work with you to ensure smooth integration with your existing tools and workflows.'
    },
    {
      question: 'What kind of training do our investigators need?',
      answer: 'KrimAI is designed to be intuitive and user-friendly. We provide comprehensive onboarding sessions, detailed documentation, and regular training webinars. Most users become proficient with the system within a few days of use.'
    },
    {
      question: 'Is KrimAI compliant with evidence handling regulations?',
      answer: 'Yes, KrimAI is built from the ground up to comply with chain of custody requirements and evidence handling regulations. The system maintains detailed audit logs and ensures that all evidence processing meets legal standards for court admissibility.'
    },
    {
      question: 'How often is KrimAI updated with new features?',
      answer: 'We release major updates quarterly and minor improvements monthly. All updates are automatically deployed to cloud users, while on-premises deployments receive scheduled updates that can be applied at your convenience.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-slate-950 opacity-90 z-0"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Have questions about KrimAI? Find answers to common questions below.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-xl border border-slate-800"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-blue-500" />
                )}
              </button>
              <div 
                className={`px-6 pb-6 text-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
