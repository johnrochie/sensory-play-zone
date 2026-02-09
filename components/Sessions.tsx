export default function Sessions() {
  const sessions = [
    {
      name: "Drop-In Session",
      price: "€12",
      duration: "90 minutes",
      description: "Flexible play time for one child",
      features: ["Access to all 5 zones", "Supervised play", "Parent-friendly seating", "Clean & safe environment"],
      popular: false,
      color: "from-gray-100/50 to-gray-100/20",
      borderColor: "border-gray-200/40",
    },
    {
      name: "Term Time Pass",
      price: "€45",
      duration: "Per Month",
      description: "Unlimited weekly sessions",
      features: ["Up to 4 sessions per week", "Priority booking", "Discounted party packages", "Parent & child sessions included"],
      popular: true,
      color: "from-pink-400/20 to-pink-400/10",
      borderColor: "border-pink-400/40",
    },
    {
      name: "Birthday Party",
      price: "€180",
      duration: "2 hours",
      description: "Private party for 12 kids",
      features: ["Exclusive access to venue", "Dedicated party host", "Party decorations included", "Food & drink packages available"],
      popular: false,
      color: "from-yellow-400/20 to-yellow-400/10",
      borderColor: "border-yellow-400/40",
    },
    {
      name: "Parent & Child",
      price: "€18",
      duration: "Per Session",
      description: "For ages 1-3 years",
      features: ["Guided sensory play", "Bonding activities", "Take-home activity ideas", "Small group sessions"],
      popular: false,
      color: "from-cyan-400/20 to-cyan-400/10",
      borderColor: "border-cyan-400/40",
    },
  ];

  return (
    <section id="sessions" className="relative py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-40 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-40 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            Session Pricing
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Flexible options to fit every family's schedule and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${session.color} rounded-3xl p-8 border-2 ${session.borderColor} relative hover:-translate-y-2 transition-all duration-300 ${
                session.popular ? "lg:scale-105 shadow-2xl" : "shadow-xl"
              }`}
            >
              {session.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">{session.name}</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {session.price}
                </div>
                <div className="text-gray-600 font-medium">{session.duration}</div>
              </div>

              <p className="text-center text-gray-500 mb-6">{session.description}</p>

              <ul className="space-y-3 mb-8">
                {session.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3 rounded-xl font-bold text-center transition-all duration-300 ${
                  session.popular
                    ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-white hover:scale-105 shadow-lg"
                    : "bg-white border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                }`}
              >
                {session.popular ? "Get Started" : "Book Now"}
              </a>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
            <span className="text-2xl">🎉</span>
            <span className="font-medium">
              First session HALF PRICE when you book online!{" "}
              <a href="#contact" className="text-pink-400 font-bold hover:underline">
                Book Now →
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
