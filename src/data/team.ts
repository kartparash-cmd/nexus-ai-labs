export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const team: TeamMember[] = [
  {
    name: "Kartikeya Parashar",
    initials: "KP",
    role: "Full-Stack Engineer & AI Consultant",
    bio: "Senior full-stack developer with deep expertise in React, Next.js, Node.js, and AI integrations. Has shipped 10+ production web applications and AI systems as an independent founder. Specializes in taking AI from idea to deployed product fast.",
    tags: ["React", "Next.js", "Node.js", "OpenAI", "Claude API", "Supabase"],
    links: [
      { label: "GitHub", href: "#" }, // TODO: Add GitHub link
      { label: "LinkedIn", href: "#" }, // TODO: Add LinkedIn link
      { label: "Upwork", href: "#" }, // TODO: Add Upwork link
    ],
  },
  {
    name: "Bharat Verma",
    initials: "BV",
    role: "Full-Stack Engineer & AI Systems Architect",
    bio: "Seasoned full-stack developer with expertise across the entire stack. Co-built DoppelSocial, a multi-platform social media management tool. Specializes in scalable backend systems, API integrations, and production-grade AI infrastructure.",
    tags: [
      "Full-Stack",
      "System Design",
      "API Architecture",
      "Cloud",
      "AI Integration",
    ],
    links: [
      { label: "GitHub", href: "#" }, // TODO: Add GitHub link
      { label: "LinkedIn", href: "#" }, // TODO: Add LinkedIn link
    ],
  },
];
