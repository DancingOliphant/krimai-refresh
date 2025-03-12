export default function Testimonials() {
  const testimonials = [
    {
      quote: "KrimAI has completely transformed how our department approaches complex investigations. We're solving cases in half the time.",
      author: "Detective Sarah Johnson",
      title: "Major Crimes Unit, New York Police Department",
      avatar: "/avatars/avatar-1.jpg"
    },
    {
      quote: "The pattern recognition capabilities are truly remarkable. KrimAI identified connections in cold cases that we had missed for years.",
      author: "James Wilson",
      title: "Chief Investigator, FBI",
      avatar: "/avatars/avatar-2.jpg"
    },
    {
      quote: "As a prosecutor, the insights provided by KrimAI have strengthened our cases substantially. Conviction rates are up 40%.",
      author: "Michael Rodriguez",
      title: "District Attorney's Office, Los Angeles",
      avatar: "/avatars/avatar-3.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-slate-950 opacity-90 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Hear from law enforcement professionals who use KrimAI every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-slate-800"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
