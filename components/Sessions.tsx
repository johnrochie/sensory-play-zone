import { Calendar, PartyPopper, Users, Baby } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    icon: Calendar,
    title: "Drop-in sessions",
    price: "£12",
    period: "per child",
    description: "Flexible 90-minute sessions. Book when it suits you.",
    features: ["Open play in all zones", "Supervised by trained staff", "No commitment"],
    popular: false,
  },
  {
    icon: Calendar,
    title: "Term time",
    price: "£45",
    period: "per month",
    description: "Weekly sessions throughout the school term. Best value.",
    features: ["Same day & time each week", "10% off parties & workshops", "Priority booking"],
    popular: true,
  },
  {
    icon: PartyPopper,
    title: "Birthday parties",
    price: "£180",
    period: "for up to 12 kids",
    description: "Private hire, themed setup, and party bags included.",
    features: ["2-hour private zone hire", "Themed decorations", "Party host included"],
    popular: false,
  },
  {
    icon: Users,
    title: "Parent & child",
    price: "£18",
    period: "per session",
    description: "Guided parent-child sessions for 1–3 year olds.",
    features: ["Bonding through play", "Tips to take home", "Small groups"],
    popular: false,
  },
];

export default function Sessions() {
  return (
    <section id="sessions" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sessions & pricing
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the option that fits your family. All sessions are supervised
            and age-appropriate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl border-2 p-6 ${
                plan.popular
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background"
              } hover:shadow-lg transition-shadow`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  Most popular
                </span>
              )}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <plan.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {plan.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>
              <p className="text-muted text-sm mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#book"
                className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/90"
                }`}
              >
                Book now
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted mt-8 text-sm">
          Holiday sessions and workshops available — check our calendar or get in
          touch.
        </p>
      </div>
    </section>
  );
}
