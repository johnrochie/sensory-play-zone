import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo as the hero - large, beautiful, centered */}
        <div className="mb-12 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-yellow-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src="/logo.jpg"
              alt="Bambinos Logo"
              width={300}
              height={300}
              className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Bambinos
        </h1>

        <p className="text-2xl md:text-3xl text-gray-500 mb-8 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.4s" }}>
          Where Magic Meets Messy Play
        </p>

        {/* Tagline */}
        <p className="text-xl text-gray-400 mb-12 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
          Discover a world of sensory exploration designed to spark curiosity and creativity in every child
        </p>

        {/* CTA Button - logo-inspired design */}
        <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold rounded-2xl text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Book Your Session
          </button>
          <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-2xl text-lg border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-400/20 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-3">🌈</div>
            <h3 className="font-bold text-xl mb-2">Colorful Zones</h3>
            <p className="text-gray-500 text-sm">Sand, water, art, light, music & texture experiences</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-yellow-400/20 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-xl mb-2">Creative Play</h3>
            <p className="text-gray-500 text-sm">Messy art stations and sensory exploration</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-cyan-400/20 hover:-translate-y-2 transition-transform">
            <div className="text-4xl mb-3">👶</div>
            <h3 className="font-bold text-xl mb-2">All Ages Welcome</h3>
            <p className="text-gray-500 text-sm">Sessions for ages 0-8 years</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
