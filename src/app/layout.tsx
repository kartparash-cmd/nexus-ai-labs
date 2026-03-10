import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nexus AI Labs — We Ship AI That Works",
  description:
    "Custom LLM applications, RAG chatbots, AI agents, and workflow automation — delivered by senior engineers who ship fast and maintain what they build.",
  keywords: [
    "AI consulting",
    "LLM development",
    "RAG chatbots",
    "AI agents",
    "workflow automation",
    "custom AI",
  ],
  openGraph: {
    title: "Nexus AI Labs — We Ship AI That Works",
    description:
      "Custom LLM applications, RAG chatbots, AI agents, and workflow automation — shipped by two senior engineers.",
    type: "website",
    locale: "en_US",
    siteName: "Nexus AI Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI Labs — We Ship AI That Works",
    description:
      "Custom LLM applications, RAG chatbots, AI agents, and workflow automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
