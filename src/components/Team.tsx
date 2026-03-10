"use client";

import { motion } from "framer-motion";
import { team, type TeamMember } from "@/data/team";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Team() {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">
            The Team
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member: TeamMember, index: number) => (
            <AnimatedSection key={member.name} delay={index * 0.15}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div>
                  <div className="glass-card rounded-xl p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-surface-alt to-surface-alt flex items-center justify-center">
                      <span className="font-display text-2xl text-foreground">
                        {member.initials}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl mt-4 text-foreground">
                      {member.name}
                    </h3>

                    <p className="text-muted text-sm">{member.role}</p>

                    <p className="text-muted mt-3 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-alt text-xs px-3 py-1 rounded-full text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                      {member.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-foreground underline underline-offset-2 text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
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
