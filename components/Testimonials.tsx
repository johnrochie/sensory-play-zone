import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mum of two",
    rating: 5,
    text: "My kids absolutely love it here. The staff are so patient and the zones are always spotless. Best sensory play we've found — worth every penny.",
  },
  {
    name: "James & Emma",
    role: "Parents of Leo, 3",
    rating: 5,
    text: "Leo has sensory processing differences and this place has been a game-changer. He's more confident and sleeps better after sessions. Can't recommend enough.",
  },
  {
    name: "Priya K.",
    role: "Mum of Aria",
    rating: 5,
    text: "Booked a birthday party and it was flawless. The kids had a blast, the setup was beautiful, and we didn't have to lift a finger. Will definitely be back.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What parents say
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Trusted by hundreds of families. Here&apos;s what they&apos;re
            saying.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <Quote
                className="absolute top-4 right-4 text-primary/20"
                size={32}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
