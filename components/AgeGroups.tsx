import { Baby, Smile, Sparkles } from "lucide-react";

const ageGroups = [
  {
    icon: Baby,
    ages: "1–2 years",
    title: "Toddlers",
    description: "Soft textures, gentle sounds, water play, and supervised exploration. Parent participation welcome.",
    activities: ["Water tables", "Soft play textures", "Bubble stations", "Parent & child sessions"],
  },
  {
    icon: Smile,
    ages: "2–4 years",
    title: "Preschoolers",
    description: "Sand, paint, slime, and music. More independence with staff on hand to guide and support.",
    activities: ["Sand & water zone", "Art & messy zone", "Music & sound", "Light & sensory"],
  },
  {
    icon: Sparkles,
    ages: "4–7 years",
    title: "Little explorers",
    description: "Full access to all zones. Creative projects, messy science, and collaborative play.",
    activities: ["All zones", "Themed workshops", "Birthday parties", "Drop-in or term"],
  },
];

export default function AgeGroups() {
  return (
    <section id="age-groups" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Age groups
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Every zone is designed for safe, age-appropriate play. Find the right
            fit for your child.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {ageGroups.map((group) => (
            <div
              key={group.ages}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <group.icon size={28} />
              </div>
              <span className="text-primary font-semibold text-sm">
                {group.ages}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">
                {group.title}
              </h3>
              <p className="text-muted mb-6">{group.description}</p>
              <h4 className="font-semibold text-foreground mb-2">
                Activities include
              </h4>
              <ul className="space-y-2">
                {group.activities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
