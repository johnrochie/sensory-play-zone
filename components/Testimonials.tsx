export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Local Mom",
      rating: 5,
      quote: "My daughter absolutely loves it here! She's developed so much confidence and her creativity has blossomed. The staff are amazing with the kids.",
      color: "from-pink-400/30 to-pink-400/5",
    },
    {
      name: "James T.",
      location: "Father of 2",
      rating: 5,
      quote: "Best birthday party venue we've ever used! The kids were engaged for hours and the staff made everything so easy. Highly recommend!",
      color: "from-yellow-400/30 to-yellow-400/5",
    },
    {
      name: "Emily R.",
      location: "Childcare Professional",
      rating: 5,
      quote: "As a nursery teacher, I'm impressed by the quality of sensory experiences offered. It's educational, safe, and incredibly well-organized.",
      color: "from-cyan-400/30 to-cyan-400/5",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-yellow-400/5 to-cyan-400/10" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            What Families Say
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Hear from parents and children who love Sensory Play Zone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.color} rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold font-display text-lg">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 justify-center">
          {["✅ Fully Insured", "✅ DBS Checked Staff", "✅ OFSTED Compliant", "✅ COVID Secure"].map((badge, index) => (
            <div key={index} className="px-5 py-2.5 bg-white rounded-full shadow-lg font-bold text-sm hover:-translate-y-1 transition-transform cursor-default">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
