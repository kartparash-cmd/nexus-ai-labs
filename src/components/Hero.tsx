"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const terminalLines = [
  { role: "user", text: "How can AI reduce our support ticket volume?" },
  {
    role: "assistant",
    text: "Based on your ticket data, a RAG-powered chatbot can auto-resolve ~60% of L1 queries. I'll draft an implementation plan.",
  },
  { role: "system", text: "✓ Plan generated · 3 integrations identified · ETA: 4 weeks" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 md:py-24 md:pt-32">
      {/* Background gradient mesh blobs */}
      <div className="gradient-orb absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_#E5E5E5_0%,_transparent_70%)] opacity-40 blur-[80px]" />
      <div className="gradient-orb absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_#F5F5F4_0%,_transparent_70%)] opacity-40 blur-[80px]" />
      <div className="gradient-orb absolute -bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,_#E5E5E5_0%,_#F5F5F4_50%,_transparent_70%)] opacity-40 blur-[80px]" />

      {/* Grid overlay */}
      <div className="bg-grid absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left content */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-display text-5xl leading-tight text-foreground md:text-7xl"
          >
            We Build AI That{" "}
            <span className="text-foreground underline decoration-accent decoration-2 underline-offset-4">Actually Works</span> for Your
            Business
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-body mt-6 text-lg leading-relaxed text-muted md:text-xl"
          >
            Custom LLM applications, RAG chatbots, AI agents, and workflow
            automation — delivered by two senior engineers who ship fast and
            maintain what they build.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              className="btn-primary rounded-md px-6 py-3 text-lg"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="btn-glow rounded-md px-6 py-3 text-lg"
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.p
            {...fadeUp(0.3)}
            className="mt-10 text-sm text-muted"
          >
            <span className="text-accent">✦</span> Shipped 10+ production AI systems{" "}<span className="text-accent">✦</span> Full-stack &amp; ML expertise{" "}<span className="text-accent">✦</span> Based in India, working globally{" "}<span className="text-accent">✦</span>
          </motion.p>
        </div>

        {/* Floating terminal mockup — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
          className="animate-float hidden w-full max-w-md rounded-xl border border-[#1E293B] bg-[#0F172A] p-0 lg:block"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 rounded-t-xl border-b border-white/10 bg-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-xs text-muted">nexus-ai-chat</span>
          </div>

          {/* Terminal body */}
          <div className="space-y-4 p-5 font-mono text-sm">
            {terminalLines.map((line, i) => (
              <div key={i}>
                {line.role === "user" && (
                  <div>
                    <span className="text-[#6EE7B7]">you@client</span>
                    <span className="text-muted">:~$</span>
                    <span className="ml-2 text-[#F1F5F9]">{line.text}</span>
                  </div>
                )}
                {line.role === "assistant" && (
                  <div className="mt-1 rounded bg-white/10 p-3 text-[#F1F5F9]/90">
                    <span className="mb-1 block text-xs text-[#6EE7B7]">
                      nexus-ai ➜
                    </span>
                    {line.text}
                  </div>
                )}
                {line.role === "system" && (
                  <div className="mt-1 text-[#22C55E]">{line.text}</div>
                )}
              </div>
            ))}
            <div className="flex items-center text-muted">
              <span className="text-[#6EE7B7]">you@client</span>
              <span>:~$</span>
              <span className="ml-2 inline-block h-4 w-2 animate-pulse bg-[#6EE7B7]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
