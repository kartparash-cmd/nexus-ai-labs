"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We needed an autonomous trading system that combined technical signals with alternative data \u2014 congressional trades, options flow, dark pool activity. Nexus built WealthPilot with 10 edge tools, 497 automated tests, and a self-improving strategy engine. The AI earnings fact-checker alone was something no other platform had.",
    name: "Ashira Capital Partners",
    role: "Quantitative Finance",
    company: "WealthPilot",
    initials: "AC",
  },
  {
    quote:
      "We needed to manage 8 social platforms from one place \u2014 scheduling, AI-generated replies in our brand voice, analytics, and a mobile app. Nexus shipped DoppelSocial with 90+ serverless functions, AI voice cloning, and a full content calendar with drag-and-drop. It replaced 8 separate tools.",
    name: "DoppelSocial",
    role: "AI SaaS Platform",
    company: "doppel.so",
    initials: "DS",
  },
  {
    quote:
      "We wanted a free AI toolkit that could drive organic traffic to our main product. Nexus built FreeSocialKit.ai with 10 AI tools, 80+ templates, a developer API, and automated content pipelines. It hit Lighthouse scores of 95/100 and runs in 4 languages as a PWA.",
    name: "FreeSocialKit.ai",
    role: "AI Tools Directory",
    company: "freesocialkit.ai",
    initials: "FK",
  },
];

export default function Testimonials() {
  return (
    <section className="section-surface section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.initials} delay={index * 0.15}>
              <div className="glass-card p-8 h-full flex flex-col">
                <Quote size={24} className="text-accent mb-4 flex-shrink-0" />

                <p className="text-foreground text-base leading-relaxed italic mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <span className="text-background text-sm font-semibold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
