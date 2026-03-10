export interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  ctaLabel: string;
  ctaLink: string;
}

export const projects: Project[] = [
  {
    id: "doppelsocial",
    name: "DoppelSocial",
    category: "AI SaaS Platform",
    problem:
      "Managing social media across 8+ platforms is chaotic and time-consuming for brands.",
    solution:
      "Built a unified AI-powered social media dashboard with content scheduling, analytics, and AI-generated post suggestions across all major platforms.",
    tech: [
      "React",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "OpenAI API",
      "Twitter API",
      "Instagram API",
      "LinkedIn API",
    ],
    impact: "Single dashboard replaces 8 separate tools",
    ctaLabel: "View Live",
    ctaLink: "https://doppel.so",
  },
  {
    id: "wealthpilot",
    name: "WealthPilot",
    category: "AI Finance Tool",
    problem:
      "Individual investors have no intelligent, personalized tool to track portfolio performance and get AI-driven insights.",
    solution:
      "Built a full-stack wealth management dashboard with AI-powered analysis, portfolio tracking, and personalized recommendations.",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    impact: "AI-driven portfolio insights for individual investors",
    ctaLabel: "Case Study",
    ctaLink: "#work",
  },
  {
    id: "savethecommission",
    name: "SaveTheCommission.com",
    category: "Real Estate Platform",
    problem:
      "Home sellers lose 5-6% to agent commissions — no good FSBO alternative existed.",
    solution:
      "Built a full FSBO platform (Ownerly) that guides sellers through listing, pricing, docs, and negotiation without an agent.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "AI-powered Pricing"],
    impact: "Saves sellers thousands in commission fees",
    ctaLabel: "View Live",
    ctaLink: "https://savethecommission.com",
  },
  {
    id: "freesocialkit",
    name: "FreeSocialKit.ai",
    category: "AI Tools Directory",
    problem:
      "Creators and marketers need AI tools but can't afford expensive subscriptions.",
    solution:
      "Built a free AI tools directory with 30+ tools, funneling users into the DoppelSocial ecosystem.",
    tech: ["Next.js", "Supabase", "SEO-optimized", "Custom AI Integrations"],
    impact: "30+ free AI tools for creators",
    ctaLabel: "View Live",
    ctaLink: "https://freesocialkit.ai",
  },
  {
    id: "burnify",
    name: "Burnify",
    category: "AI Mobile App",
    problem:
      "Calorie tracking apps are tedious — users abandon them within a week.",
    solution:
      "Built an AI-powered mobile app that uses photo recognition and natural language to log food instantly and track burns intelligently.",
    tech: [
      "React Native",
      "Expo",
      "OpenAI Vision API",
      "Supabase",
      "Apple App Store",
    ],
    impact: "Instant food logging via photo recognition",
    ctaLabel: "Coming Soon",
    ctaLink: "#work",
  },
];
