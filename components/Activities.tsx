export default function Activities() {
  const activities = [
    {
      icon: "🏖️",
      title: "Sand Zone",
      color: "from-orange-400/20 to-orange-400/5",
      borderColor: "border-orange-400/40",
      description: "Kinetic sand and natural textures for tactile exploration and creative building.",
    },
    {
      icon: "💧",
      title: "Water Zone",
      color: "from-cyan-400/20 to-cyan-400/5",
      borderColor: "border-cyan-400/40",
      description: "Splash pads, water tables, and sensory pools for water play fun.",
    },
    {
      icon: "🎨",
      title: "Art Zone",
      color: "from-pink-400/20 to-pink-400/5",
      borderColor: "border-pink-400/40",
      description: "Messy art stations with painting, finger painting, and creative materials.",
    },
    {
      icon: "💡",
      title: "Light Zone",
      color: "from-purple-400/20 to-purple-400/5",
      borderColor: "border-purple-400/40",
      description: "Interactive light displays, light tables, and shadow play experiences.",
    },
    {
      icon: "🎵",
      title: "Music Zone",
      color: "from-yellow-400/20 to-yellow-400/5",
      borderColor: "border-yellow-400/40",
      description: "Musical instruments, sound exploration, and rhythm activities.",
    },
    {
      icon: "✋",
      title: "Texture Zone",
      color: "from-pink-300/20 to-pink-300/5",
      borderColor: "border-pink-300/40",
      description: "Different textures like fur, velvet, bumpy surfaces, and tactile materials.",
    },
  ];

  return (
    <section id="activities" className="relative py-24 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-pink-400/5 to-gray-50" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Sensory Zones
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Five unique areas designed to stimulate every sense and spark boundless creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <a
              key={index}
              href="#sessions"
              className={`bg-gradient-to-br ${activity.color} rounded-3xl p-8 border-2 ${activity.borderColor} hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-6xl mb-4">{activity.icon}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{activity.title}</h3>
              <p className="text-gray-500 leading-relaxed">{activity.description}</p>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="font-display text-4xl font-bold mb-4">Ready to Explore?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            All zones are supervised by trained staff who ensure safe, mess-free fun for everyone!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-pink-400 font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Book a Session
            </a>
            <a
              href="#sessions"
              className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30"
            >
              View Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
