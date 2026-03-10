export interface Service {
  icon: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
}

export const services: Service[] = [
  {
    icon: "MessageSquareText",
    title: "AI Chatbots & Knowledge Assistants",
    description:
      "RAG-powered chatbots trained on your company documents, support tickets, or product data.",
    problem: "Your team wastes hours searching through documents, wikis, and Slack threads for answers.",
    solution: "We build a chatbot that indexes all your internal knowledge and gives instant, sourced answers.",
    result: "60% fewer support tickets. Answers in seconds, not hours.",
  },
  {
    icon: "Workflow",
    title: "AI Workflow Automation & Agents",
    description:
      "Multi-step AI agents that handle repetitive tasks end-to-end.",
    problem: "Your staff spends 20+ hours a week on manual data entry, email drafting, and report generation.",
    solution: "We deploy AI agents that handle entire workflows — from data extraction to CRM updates to email replies.",
    result: "80% reduction in manual work. Your team focuses on what actually matters.",
  },
  {
    icon: "BrainCircuit",
    title: "Custom LLM Applications",
    description:
      "Internal copilots and AI-powered tools built on GPT-4, Claude, or open-source models.",
    problem: "Off-the-shelf AI tools don't understand your industry jargon, processes, or compliance needs.",
    solution: "We build custom AI tools fine-tuned to your domain — whether that's legal, healthcare, finance, or retail.",
    result: "AI that speaks your language and follows your rules. No generic responses.",
  },
  {
    icon: "Rocket",
    title: "Full-Stack AI Products",
    description:
      "Complete SaaS products with AI at the core — from zero to deployed.",
    problem: "You have a great AI product idea but no technical team to build it.",
    solution: "We take it from concept to launched product — auth, payments, AI engine, and all the infrastructure.",
    result: "Market-ready product in weeks, not months. Built to scale from day one.",
  },
];
