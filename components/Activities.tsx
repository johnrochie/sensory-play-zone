import Image from "next/image";
import {
  Droplets,
  Palette,
  Sun,
  Music,
  Layers,
} from "lucide-react";

const zones = [
  {
    id: "sand-water",
    title: "Sand & Water",
    icon: Droplets,
    description: "Splash, pour, and dig. Our sand and water stations let kids explore cause and effect, buoyancy, and textures.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9414d2d38?w=600&q=80",
    color: "accent",
  },
  {
    id: "art-messy",
    title: "Art & Messy",
    icon: Palette,
    description: "Paint, slime, foam, and goo. Get wonderfully messy with non-toxic materials and washable stations.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80",
    color: "primary",
  },
  {
    id: "light-sensory",
    title: "Light & Sensory",
    icon: Sun,
    description: "Fibre optics, bubbles, mirrors, and colour. Calming and captivating visual experiences.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    color: "secondary",
  },
  {
    id: "music-sound",
    title: "Music & Sound",
    icon: Music,
    description: "Drums, chimes, shakers, and singalongs. Discover rhythm, pitch, and the joy of making noise.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    color: "accent",
  },
  {
    id: "texture-materials",
    title: "Texture & Materials",
    icon: Layers,
    description: "Kinetic sand, rice, beans, clay, and fabrics. Tactile exploration for every preference.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9414d2d38?w=600&q=80",
    color: "primary",
  },
];

const colorClasses: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/20 text-foreground",
  accent: "bg-accent/20 text-accent",
};

export default function Activities() {
  return (
    <section id="activities" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our play zones
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Five themed zones designed for endless exploration and development.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {zones.map((zone, i) => (
            <div
              key={zone.id}
              className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} gap-8 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={zone.image}
                    alt={zone.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${colorClasses[zone.color]}`}
                >
                  <zone.icon size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {zone.title}
                </h3>
                <p className="text-muted text-lg">{zone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
