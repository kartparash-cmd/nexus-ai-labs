"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { AnimatedSection } from "@/components/AnimatedSection";

export function FeaturedWork() {
  return (
    <section id="work" className="section-dark section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted text-lg">
              Real projects. Real impact. Not hypothetical demos.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {projects.slice(0, 5).map((project: Project, index: number) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                className="glass-card rounded-xl p-6 md:p-8"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl">{project.name}</h3>
                      <span className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <span className="font-semibold text-foreground">
                        The Problem:{" "}
                      </span>
                      <span className="text-muted">{project.problem}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-foreground">
                        Our Solution:{" "}
                      </span>
                      <span className="text-foreground">{project.solution}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-white/[0.08] text-sm px-3 py-1 rounded-full text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-accent font-medium">{project.impact}</p>

                    <a
                      href={project.ctaLink}
                      className="btn-glow rounded-md px-6 py-2 text-sm inline-flex items-center gap-1.5"
                    >
                      {project.ctaLabel}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
