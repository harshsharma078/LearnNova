 export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "LearnNova made complex topics simple. The interactive courses kept me engaged and motivated.",
      name: "Riya Sharma",
      role: "Computer Science Student",
      initials: "RS",
    },
    {
      quote:
        "The certified courses boosted my resume. I landed a better job thanks to LearnNova.",
      name: "Amit Verma",
      role: "Working Professional",
      initials: "AV",
    },
    {
      quote:
        "Mentorship sessions gave me clarity and confidence. The community support is amazing.",
      name: "Sneha Patel",
      role: "Aspiring Developer",
      initials: "SP",
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Decorative blurred accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            What Our Learners Say
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Trusted by students and professionals worldwide
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-10 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote */}
              <p className="italic text-lg text-gray-200 mb-8 leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-semibold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}