import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-gray-50 to-cyan-400/10" />
      <div className="absolute top-20 left-40 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Ready to book or have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Location</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                45 High Street<br />
                Townsville, AB1 2CD<br />
                United Kingdom
              </p>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg text-sm font-bold text-gray-600">
                Free parking available on site
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-bold">01234 567 890</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span className="font-bold">hello@sensoryplayzone.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span className="font-bold">Follow us @SensoryPlayZone</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-500">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-pink-400 font-bold">
                  <span>Bank Holidays</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Mini logo display */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-pink-400 to-cyan-400 rounded-full blur-md opacity-20" />
                <Image
                  src="/logo.jpg"
                  alt="Sensory Play Zone"
                  width={100}
                  height={100}
                  className="relative rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-pink-400/20">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">Book Your Session</h3>
            <form className="space-y-5">
              <div>
                <label className="block font-bold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
                  placeholder="07123 456 789"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Session Type</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors bg-white">
                  <option value="">Select a session</option>
                  <option value="drop-in">Drop-In Session - £12</option>
                  <option value="term">Term Time Pass - £45/month</option>
                  <option value="party">Birthday Party - £180</option>
                  <option value="parent-child">Parent & Child - £18</option>
                </select>
              </div>

              <div>
                <label className="block font-bold mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none"
                  placeholder="Any questions or special requests?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg text-lg"
              >
                Book Now
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll confirm your booking within 24 hours!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
