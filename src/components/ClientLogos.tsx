"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const projects = [
  { name: "DoppelSocial", tagline: "AI SaaS Platform" },
  { name: "WealthPilot", tagline: "AI Finance Tool" },
  { name: "SaveTheCommission", tagline: "Real Estate Platform" },
  { name: "FreeSocialKit.ai", tagline: "AI Tools Directory" },
  { name: "Burnify", tagline: "AI Mobile App" },
];

export default function ClientLogos() {
  return (
    <section className="w-full py-10 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <p className="text-center font-body text-sm uppercase tracking-wider text-muted mb-8">
            Products we&apos;ve shipped
          </p>
        </AnimatedSection>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-0 md:flex-nowrap md:gap-x-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.08 * i, ease: "easeOut" }}
                className="flex items-center"
              >
                {i > 0 && (
                  <span className="hidden md:block text-muted/30 mx-6 select-none" aria-hidden="true">
                    &bull;
                  </span>
                )}
                <span
                  className="font-display text-xl md:text-2xl text-muted hover:text-foreground transition-colors duration-300 cursor-default whitespace-nowrap px-3 md:px-0"
                  title={project.tagline}
                >
                  {project.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
