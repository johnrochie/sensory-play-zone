import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo in navbar */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-sm opacity-50" />
              <Image
                src="/logo.jpg"
                alt="Bambinos"
                width={50}
                height={50}
                className="relative rounded-xl shadow-lg"
              />
            </div>
            <span className="font-display font-bold text-xl hidden sm:block bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Bambinos
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-800 hover:text-pink-400 font-medium transition-colors">
              About
            </a>
            <a href="#activities" className="text-gray-800 hover:text-yellow-400 font-medium transition-colors">
              Activities
            </a>
            <a href="#sessions" className="text-gray-800 hover:text-cyan-400 font-medium transition-colors">
              Sessions
            </a>
            <a href="#contact" className="text-gray-800 hover:text-purple-400 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
