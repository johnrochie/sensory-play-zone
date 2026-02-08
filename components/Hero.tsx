import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />

      <div className="flex-1 max-w-2xl animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
          <Sparkles size={18} />
          Where play meets development
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Amazing sensory play,
          <br />
          <span className="text-primary">messy fun</span> for little explorers
        </h1>
        <p className="text-lg text-muted mb-8 max-w-xl">
          Sand, water, paint, light & music — our premium play zones help kids
          learn through discovery. Safe, supervised, and endlessly fun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Book a Session
            <ArrowRight size={20} />
          </Link>
          <Link
            href="#activities"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all"
          >
            Explore Zones
          </Link>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
        <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
          <div className="col-span-2 sm:col-span-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            <Image
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
              alt="Children playing with sensory materials"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <Image
              src="https://images.unsplash.com/photo-1587654780291-39c9414d2d38?w=400&q=80"
              alt="Kids artistic messy play"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=80"
              alt="Child enjoying water play"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
