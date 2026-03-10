"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    number: 1,
    title: "Discovery Call",
    duration: "1 day",
    description: "We map your problem, data, and desired outcome.",
  },
  {
    number: 2,
    title: "Architecture",
    duration: "2-3 days",
    description:
      "We design the AI system, choose the right models and infrastructure.",
  },
  {
    number: 3,
    title: "Build Sprint",
    duration: "1-4 weeks",
    description: "We ship fast with weekly check-ins and demos.",
  },
  {
    number: 4,
    title: "Deploy & Handoff",
    duration: "",
    description:
      "Production deployment with docs, training, and ongoing support options.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding section-surface">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            How We Work
          </h2>
        </AnimatedSection>

        {/* Desktop timeline (horizontal) */}
        <div className="hidden md:flex flex-row items-start gap-4">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={index * 0.15}
              className="flex flex-1 items-start"
            >
              {/* Step content */}
              <div className="flex flex-col items-center text-center">
                {/* Numbered circle */}
                <div className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center text-foreground font-bold">
                  {step.number}
                </div>
                {/* Step info */}
                <h3 className="font-semibold text-lg text-foreground mt-4">
                  {step.title}
                </h3>
                {step.duration && (
                  <span className="text-muted text-sm mt-1">
                    {step.duration}
                  </span>
                )}
                <p className="text-muted mt-2 max-w-[200px]">
                  {step.description}
                </p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex items-center flex-1 pt-6">
                  <div className="h-0.5 bg-border w-full" />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile timeline (vertical) */}
        <div className="flex md:hidden flex-col gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={index * 0.15}
              className="flex flex-col items-center"
            >
              {/* Numbered circle */}
              <div className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center text-foreground font-bold">
                {step.number}
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="w-0.5 bg-border h-8 my-2" />
              )}

              {/* Step info */}
              <h3 className="font-semibold text-lg text-foreground mt-2">
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-muted text-sm mt-1">
                  {step.duration}
                </span>
              )}
              <p className="text-muted mt-2 text-center max-w-xs">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight box */}
        <AnimatedSection delay={0.6} className="mt-16">
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-lg text-foreground">
              Most projects go from signed contract to working demo in under{" "}
              <span className="text-accent font-bold">2 weeks</span>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
