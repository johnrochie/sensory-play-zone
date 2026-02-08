import { Heart, Brain, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Cognitive growth",
    description: "Sensory play builds neural pathways and supports problem-solving, memory, and language development.",
  },
  {
    icon: Heart,
    title: "Emotional well-being",
    description: "Exploration and mess reduce anxiety, build confidence, and help children regulate their emotions.",
  },
  {
    icon: Sparkles,
    title: "Creativity & curiosity",
    description: "Open-ended play fuels imagination and encourages kids to experiment, discover, and learn.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What is sensory play?
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Sensory play is any activity that stimulates a child&apos;s senses —
            touch, sight, sound, smell, and movement. It&apos;s how young children
            naturally explore the world and build the foundations for learning,
            creativity, and emotional resilience.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {benefits.map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12 border border-primary/20">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Our philosophy
          </h3>
          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            We believe every child deserves a space to play freely, get messy, and
            explore without limits. Our zones are designed by early-years
            specialists to be safe, stimulating, and inclusive. We focus on
            process, not product — it&apos;s the journey of discovery that
            matters, not a perfect outcome. Parents can relax knowing their
            little ones are in caring hands while having the time of their lives.
          </p>
        </div>
      </div>
    </section>
  );
}
