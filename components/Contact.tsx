"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Book a session, ask a question, or plan a party. We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form
              id="book"
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-foreground">
                Book a session
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                    placeholder="07XXX XXXXXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="session"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Session type
                  </label>
                  <select
                    id="session"
                    name="session"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                  >
                    <option>Drop-in</option>
                    <option>Term time</option>
                    <option>Birthday party</option>
                    <option>Parent & child</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none"
                  placeholder="Tell us about your child's age, preferred dates, or any questions..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              >
                {submitted ? "Message sent!" : "Send enquiry"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Visit us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      Sensory Play Zone
                    </p>
                    <p className="text-muted">
                      42 Play Street, London, SW1A 1AA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                  <a href="tel:+442071234567" className="text-muted hover:text-primary">
                    +44 20 7123 4567
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                  <a
                    href="mailto:hello@sensoryplayzone.co.uk"
                    className="text-muted hover:text-primary"
                  >
                    hello@sensoryplayzone.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-muted">
                      Mon–Fri: 9:30 – 17:00
                    </p>
                    <p className="text-muted">
                      Sat–Sun: 10:00 – 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
