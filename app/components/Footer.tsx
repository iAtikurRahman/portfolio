"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Code, Heart, ArrowUp } from "lucide-react";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  const currentYear = 2026;

  const footerLinks = {
    Navigation: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    Connect: [
      { label: "GitHub", href: "https://github.com/iAtikurRahman", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/iatikurrahman", external: true },
      { label: "Email", href: "mailto:iAtikurRahman.bd@gmail.com", external: true },
      { label: "Twitter", href: "https://twitter.com/iAtikurRahman", external: true },
    ],
    Resources: [
      { label: "Resume", href: "#", external: false },
      { label: "Blog", href: "#", external: false },
      { label: "Open Source", href: "https://github.com/iAtikurRahman", external: true },
      { label: "Privacy Policy", href: "#", external: false },
    ],
  };

  const socialLinks = [
    { href: "https://github.com/iAtikurRahman", label: "GitHub", color: "#24292e", initial: "GH" },
    { href: "https://linkedin.com/in/iatikurrahman", label: "LinkedIn", color: "#0077b5", initial: "IN" },
    { href: "mailto:iAtikurRahman.bd@gmail.com", label: "Email", color: "#ea4335", initial: "✉" },
    { href: "https://twitter.com/iAtikurRahman", label: "Twitter", color: "#1da1f2", initial: "X" },
  ];

  return (
    <footer className={`relative border-t border-card-border bg-background/50 backdrop-blur-sm ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="#home" className="flex items-center gap-2 text-xl font-bold gradient-text mb-4">
              <Code className="w-7 h-7 animate-pulse-glow" />
              <span>AR</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Full Stack Developer crafting scalable backends & beautiful frontends.
              Based in Rajshahi, Bangladesh. Building the web, one commit at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + socialLinks.indexOf(social) * 0.05, duration: 0.3 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-card-border hover:border-primary/50 hover:bg-primary/10 transition-colors group"
                  style={{ color: social.color }}
                  aria-label={social.label}
                >
                  <span className="w-5 h-5 font-bold text-lg flex items-center justify-center" aria-hidden="true">{social.initial}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.Navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.Connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    {link.external && <ArrowUp className="w-3 h-3 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.Resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    {link.external && <ArrowUp className="w-3 h-3 opacity-50" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-card-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {currentYear} MD. Atikur Rahman. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">Built with</span>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-accent animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <span className="text-muted">·</span>
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <span className="text-muted">·</span>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500" />
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>

            <a
              href="#home"
              className="w-10 h-10 rounded-xl border border-card-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-primary" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}