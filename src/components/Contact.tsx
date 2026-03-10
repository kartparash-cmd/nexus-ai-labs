"use client";

import { Send } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useCalEmbed } from "@/lib/useCalEmbed";

export function Contact() {
  const openCal = useCalEmbed();
  const inputStyles =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:border-foreground transition-colors";

  return (
    <section id="contact" className="section-padding section-surface">
      <AnimatedSection className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Have an AI Idea?
          </h2>
          <p className="text-muted">
            Tell us what you&apos;re trying to build. We&apos;ll tell you if we
            can ship it in 2 weeks.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className={inputStyles}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={inputStyles}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company (optional)"
              className={inputStyles}
            />
          </div>

          <div>
            <textarea
              placeholder="Tell us about your project"
              className={`${inputStyles} min-h-[120px]`}
            />
          </div>

          <div>
            <select className={inputStyles} defaultValue="">
              <option value="" disabled>
                Budget range
              </option>
              <option value="<$5k">&lt;$5k</option>
              <option value="$5k-$15k">$5k-$15k</option>
              <option value="$15k-$50k">$15k-$50k</option>
              <option value="$50k+">$50k+</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-primary w-full rounded-md py-4 text-lg flex items-center justify-center gap-2"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>

        <div className="text-center mt-12 space-y-2">
          <p className="text-muted">Or reach us directly:</p>
          <p>
            <a href="mailto:hello@nexusailabs.com" className="text-foreground font-medium underline underline-offset-2">
              hello@nexusailabs.com
            </a>
          </p>
          <p>
            <button
              onClick={openCal}
              className="text-foreground font-medium underline underline-offset-2"
            >
              Book a 30-min call &rarr;
            </button>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
