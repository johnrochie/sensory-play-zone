import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            About Sensory Play Zone
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            A magical space where children explore, create, and discover through sensory experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Feature cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-400/20 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">What We Offer</h3>
              <p className="text-gray-500 leading-relaxed">
                Five unique sensory zones designed to stimulate different senses: sand, water, art, light, and texture. Each area offers age-appropriate exploration in a safe, welcoming environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-400/20 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To provide a creative, inclusive space where children can develop essential skills through play. Sensory experiences build coordination, cognitive abilities, social skills, and emotional well-being.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-cyan-400/20 hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">For Families</h3>
              <p className="text-gray-500 leading-relaxed">
                We welcome families of all shapes and sizes! Our sessions are flexible, affordable, and designed with both children and parents in mind. Join our community and watch your little ones thrive.
              </p>
            </div>
          </div>

          {/* Right: Logo-focused display */}
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-yellow-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src="/logo.jpg"
                alt="Sensory Play Zone"
                width={250}
                height={250}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-gradient-to-br from-pink-400 to-pink-400/80 rounded-3xl p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm font-medium">Sensory Zones</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-400/80 rounded-3xl p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm font-medium">Happy Families</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-400/80 rounded-3xl p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2">4+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-400/80 rounded-3xl p-6 text-center text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm font-medium">Safe & Clean</div>
              </div>
            </div>

            {/* CTA banner */}
            <div className="mt-8 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 rounded-3xl p-8 text-center text-white shadow-2xl">
              <h3 className="font-display text-3xl font-bold mb-3">Join Our Play Family!</h3>
              <p className="mb-6 font-medium">
                First session? Come see why families love us
              </p>
              <button className="px-8 py-3 bg-white text-pink-400 font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                Book Your Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
