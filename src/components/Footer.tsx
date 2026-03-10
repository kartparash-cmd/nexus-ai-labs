import { Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin }, // TODO: Add real link
  { label: "Twitter", href: "#", icon: Twitter },   // TODO: Add real link
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex justify-between items-start flex-col md:flex-row gap-8">
          {/* Left: Logo + tagline */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 font-display text-xl tracking-normal text-background"
            >
              Nexus AI Labs
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            </a>
            <p className="text-white/60 text-sm mt-2">We ship AI that works.</p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Social links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-white/50 hover:text-white transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs">
            &copy; 2026 Nexus AI Labs. Building AI that ships.
          </p>
        </div>
      </div>
    </footer>
  );
}
