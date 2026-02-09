import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full blur-sm opacity-50" />
                <Image
                  src="/logo.jpg"
                  alt="Bambinos"
                  width={60}
                  height={60}
                  className="relative rounded-xl"
                />
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Bambinos
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A magical space where children explore, create, and discover through sensory experiences.
              We believe every child deserves to learn through play in a safe, nurturing environment.
            </p>
            <div className="flex gap-4">
              {["📘", "📸", "🐦", "▶️"].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl hover:scale-110 hover:bg-white/20 transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Activities", href: "#activities" },
                { label: "Session Pricing", href: "#sessions" },
                { label: "Age Groups", href: "#age-groups" },
                { label: "Contact Us", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-pink-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Boyles of Ballyseedy, Tralee, Co Kerry</li>
              <li>📞 066 719 1234</li>
              <li>📧 hello@bambinos.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2024 Bambinos. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors">CookiePolicy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
