"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were skeptical about AI \u2014 every vendor promised the moon. Nexus delivered a customer support chatbot that resolved 60% of our tickets automatically in the first month. No fluff, no delays. They just shipped.",
    name: "Rajesh Mehta",
    role: "Head of Operations",
    company: "TechScale Solutions",
    initials: "RM",
  },
  {
    quote:
      "We went from a napkin sketch to a launched AI product in 3 weeks. What I loved most was talking directly to the engineers building it \u2014 no project managers, no telephone game. Just fast, honest execution.",
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "DataBridge Analytics",
    initials: "SC",
  },
  {
    quote:
      "Their document analysis tool processes 500+ compliance reports for us every week now. The fact that they integrated it with our legacy systems without any downtime was impressive. These guys know what they\u2019re doing.",
    name: "Marcus Williams",
    role: "VP of Engineering",
    company: "Meridian Health",
    initials: "MW",
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
