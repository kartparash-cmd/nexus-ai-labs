"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const row1 = [
  "Python",
  "OpenAI GPT-4",
  "Anthropic Claude",
  "LangChain",
  "Pinecone",
  "Weaviate",
  "FastAPI",
];

const row2 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "AWS",
  "Vercel",
];

export default function TechMarquee() {
  return (
    <section className="section-padding">
      <AnimatedSection>
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
          Built With
        </h2>
      </AnimatedSection>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee">
          {[...row1, ...row1].map((item, i) => (
            <span
              key={i}
              className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-foreground whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-foreground" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden mt-4">
        <div className="flex gap-4 animate-marquee-reverse">
          {[...row2, ...row2].map((item, i) => (
            <span
              key={i}
              className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-foreground whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-foreground" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
