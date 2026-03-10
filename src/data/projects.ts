export interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  metrics: string[];
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
      "Built a unified AI-powered social media dashboard with content scheduling, AI voice cloning for auto-replies, analytics, carousel builder, and a companion mobile app.",
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Stripe",
      "Sentry",
    ],
    impact: "Single dashboard replaces 8 separate tools",
    metrics: [
      "8 platform integrations",
      "90+ serverless edge functions",
      "AI voice cloning for brand-consistent replies",
    ],
    ctaLabel: "View Live",
    ctaLink: "https://doppel.so",
  },
  {
    id: "wealthpilot",
    name: "WealthPilot",
    category: "AI Trading System",
    problem:
      "Ashira Capital Partners needed an autonomous trading system that combines technical analysis with alternative data — no existing platform unified all the signals they needed.",
    solution:
      "Built a self-improving paper trading engine with 10 edge tools (congressional trades, options flow, dark pool monitoring, AI earnings fact-checking), Kelly criterion sizing, Monte Carlo risk simulation, and automated strategy evolution.",
    tech: [
      "Python",
      "Alpaca API",
      "Claude API",
      "yfinance",
      "NumPy",
      "Pandas",
    ],
    impact: "Autonomous trading with 10-layer risk management",
    metrics: [
      "10 alternative data edge tools",
      "497 automated tests",
      "AI earnings fact-checker (first of its kind)",
    ],
    ctaLabel: "Private Tool",
    ctaLink: "#work",
  },
  {
    id: "savethecommission",
    name: "SaveTheCommission.com",
    category: "Real Estate Platform",
    problem:
      "Home sellers lose 5-6% to agent commissions — no good FSBO alternative existed.",
    solution:
      "Built a full FSBO platform with AI-powered listing generator, automated blog pipeline (2 posts/week via Claude), Stripe premium tier, and state-specific legal guides.",
    tech: ["Next.js 16", "Supabase", "Stripe", "Claude AI", "Vercel Cron"],
    impact: "Saves sellers thousands in commission fees",
    metrics: [
      "AI generates 8 blog posts/month automatically",
      "Premium tier at $19/mo via Stripe",
      "50+ state-specific FSBO guides",
    ],
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
      "Built a free AI tools hub with 10 Claude-powered micro-tools, 80+ templates, 50+ tool directory, PWA support, developer API, and automated content pipeline.",
    tech: [
      "Next.js 16",
      "Claude AI",
      "Supabase",
      "MDX",
      "PWA",
      "i18n (4 languages)",
    ],
    impact: "Free AI toolkit for 10,000+ creators",
    metrics: [
      "Lighthouse: 95 Performance / 100 SEO",
      "10 AI tools, 80+ templates, 49+ prompts",
      "Developer API with 100 req/day",
    ],
    ctaLabel: "View Live",
    ctaLink: "https://freesocialkit.ai",
  },
  {
    id: "burnify",
    name: "Burnify",
    category: "AI Mobile App",
    problem:
      "There was no fun, AI-native way to create memes with smart captions and AI-edited images on mobile.",
    solution:
      "Built a React Native app with 3 AI modes — BURN (captions), REIMAGINE (AI image editing), and IGNITE (AI video generation) — powered by Gemini and Veo models, with a tiered subscription system.",
    tech: [
      "React Native",
      "Expo",
      "Gemini AI",
      "Google Veo",
      "RevenueCat",
      "Supabase",
    ],
    impact: "AI-powered meme creation in 3 modes",
    metrics: [
      "3 AI generation modes",
      "4-tier subscription system via RevenueCat",
      "Real-time canvas with gesture-based editing",
    ],
    ctaLabel: "Coming Soon",
    ctaLink: "#work",
  },
];
