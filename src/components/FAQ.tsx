"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How fast can you deliver?",
    answer:
      "Most projects ship in 2–4 weeks. We've built complete AI products in as little as 10 days. We'll give you a realistic timeline upfront and hit it.",
  },
  {
    question: "What if I don't know exactly what I need?",
    answer:
      "That's normal. Most clients come to us with a business problem, not a technical spec. We'll help you figure out the right AI solution in a free 30-minute discovery call.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. Every project includes 30 days of bug fixes and support. After that, we offer monthly maintenance plans or can train your team to manage the system.",
  },
  {
    question: "What makes you different from bigger AI consultancies?",
    answer:
      "We're two senior engineers who do the actual work. No account managers, no handoffs, no bloated teams. You talk directly to the people building your product.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Absolutely. We've integrated AI into React, Next.js, Python, Node.js, Ruby on Rails, and more. We adapt to your stack, not the other way around.",
  },
  {
    question: "What happens if the project doesn't work out?",
    answer:
      "We build in milestones with demos at each stage. If you're not happy at any checkpoint, you can pause or stop. We've never had a client walk away unsatisfied.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted mt-4 text-lg">
              Everything you need to know before working with us.
            </p>
          </div>
        </AnimatedSection>

        <div>
          {faqItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border-b border-border">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className="text-foreground font-semibold text-lg pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-muted" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted leading-relaxed pb-5">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
