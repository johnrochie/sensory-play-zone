"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#sessions", label: "Sessions" },
  { href: "#age-groups", label: "Age Groups" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Sensory Play Zone"
            width={44}
            height={44}
            className="rounded-lg object-cover"
          />
          <span className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            Sensory Play Zone
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            className="px-5 py-2.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Book a Session
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border py-4 px-4 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-medium hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 bg-primary text-white rounded-full font-semibold mt-2"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
