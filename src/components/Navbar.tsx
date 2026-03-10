"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCalEmbed } from "@/lib/useCalEmbed";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openCal = useCalEmbed();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-lg bg-white/90 shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display text-xl tracking-normal text-foreground">
          Kyro Labs
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-cyan" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground focus:outline-none focus:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={openCal}
          className="hidden md:inline-flex btn-glow rounded-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2"
        >
          Book a Free Call
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-border bg-white/95 backdrop-blur-lg"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base text-muted transition-colors hover:text-foreground focus:outline-none focus:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openCal();
                  }}
                  className="btn-glow mt-2 inline-flex rounded-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2"
                >
                  Book a Free Call
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
