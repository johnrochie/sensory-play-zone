export default function AgeGroups() {
  const ageGroups = [
    {
      age: "0-1 Years",
      title: "Baby Explorers",
      description: "Gentle sensory stimulation for our youngest visitors. Soft textures, calming lights, and age-appropriate activities.",
      color: "from-cyan-400/20 to-cyan-400/5",
      icon: "👶",
    },
    {
      age: "1-3 Years",
      title: "Tiny Discoverers",
      description: "Interactive play focusing on motor skills and sensory awareness. Parent-guided activities in a safe environment.",
      color: "from-pink-400/20 to-pink-400/5",
      icon: "🧸",
    },
    {
      age: "3-5 Years",
      title: "Little Creators",
      description: "Creative expression through messy art and sensory exploration. Building confidence and social skills.",
      color: "from-yellow-400/20 to-yellow-400/5",
      icon: "🎨",
    },
    {
      age: "5-8 Years",
      title: "Big Thinkers",
      description: "Advanced sensory challenges and collaborative play. Learning through experimentation and creativity.",
      color: "from-purple-400/20 to-purple-400/5",
      icon: "🧩",
    },
  ];

  return (
    <section id="age-groups" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-cyan-400/5 to-gray-50" />
      <div className="absolute top-60 left-20 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-60 right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Programs by Age
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Tailored experiences designed for every stage of childhood development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((group, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${group.color} rounded-3xl p-8 border-2 border-white/30 shadow-xl hover:-translate-y-2 transition-all duration-300 text-center`}
            >
              <div className="text-6xl mb-4">{group.icon}</div>
              <div className="text-sm font-bold text-pink-400 mb-2">{group.age}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{group.title}</h3>
              <p className="text-gray-500 leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg">
            <span className="text-3xl">💝</span>
            <span className="font-bold text-lg">
              Age-appropriate supervision always provided. Parents welcome to play!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
