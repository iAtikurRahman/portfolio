"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Code2, Database, Server, Globe, Image as ImgIcon } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/iAtikurRahman", label: "GitHub", ariaLabel: "Visit my GitHub profile" },
  { href: "https://linkedin.com/in/iatikurrahman", label: "LinkedIn", ariaLabel: "Visit my LinkedIn profile" },
  { href: "mailto:iAtikurRahman.bd@gmail.com", label: "Email", ariaLabel: "Send me an email" },
];

const infoItems = [
  { icon: MapPin, text: "Rajshahi, Bangladesh" },
  { icon: Phone, text: "+880 1920 644448" },
  { icon: Mail, text: "iAtikurRahman.bd@gmail.com" },
];

const techIcons = [
  { icon: Code2, color: "#00d4aa", delay: 0 },
  { icon: Database, color: "#6366f1", delay: 0.2 },
  { icon: Server, color: "#f43f5e", delay: 0.4 },
  { icon: Globe, color: "#fbbf24", delay: 0.6 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-noise" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-primary/20 blur-3xl animate-float hidden lg:block" style={{ animationDelay: "0s" }} aria-hidden="true" />
      <div className="absolute top-1/3 right-20 w-32 h-32 rounded-2xl border border-secondary/20 blur-3xl animate-float hidden lg:block" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-xl border border-accent/20 blur-3xl animate-float hidden lg:block" style={{ animationDelay: "4s" }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Full Stack Developer
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
              >
                <span className="block">MD. ATIKUR</span>
                <span className="block gradient-text">RAHMAN</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-muted font-medium max-w-xl"
              >
                Crafting scalable backends & beautiful frontends
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap items-center gap-2 text-muted text-sm"
              >
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-card-border">
                  <Code2 className="w-4 h-4 text-primary" />
                  5+ Years Experience
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-card-border">
                  <Database className="w-4 h-4 text-secondary" />
                  3 Databases
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-card-border">
                  <Server className="w-4 h-4 text-accent" />
                  Microservices
                </span>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-card border border-card-border">
                  <Globe className="w-4 h-4 text-amber-500" />
                  API Integration
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-xl"
            >
              Dedicated developer with expertise in PHP, JavaScript, TypeScript, Python, and various database technologies.
              Building REST APIs, microservices, e-commerce platforms, and social applications with modern tech stacks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-background bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary-glow hover:to-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,170,0.4)]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary border-2 border-primary bg-transparent hover:bg-primary hover:text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,170,0.3)]"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 pt-4 border-t border-card-border"
            >
              <span className="text-xs text-muted uppercase tracking-wider hidden sm:inline">Connect:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-card-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.ariaLabel}
                  >
                    <span className="w-5 h-5 text-muted group-hover:text-primary transition-colors font-bold text-lg">{social.label[0]}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Info Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted"
            >
              {infoItems.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-primary/70" aria-hidden="true" />
                  {item.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative lg:order-first"
          >
            {/* Profile Image Card */}
            <div className="relative glass rounded-3xl p-6 md:p-8 border border-card-border glow-primary max-w-md mx-auto">
              <div className="relative aspect-square max-w-xs mx-auto mb-8">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                <img
                  src="/atikur.jpg"
                  alt="MD. Atikur Rahman - Full Stack Developer"
                  className="relative w-full h-full object-cover rounded-2xl border-4 border-primary/30 shadow-2xl"
                  width={400}
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center hidden sm:block">
                  <ImgIcon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Code Window - Mobile optimized */}
              <div className="rounded-2xl overflow-hidden bg-background/50 border border-card-border mb-8 hidden md:block">
                <div className="flex items-center gap-2 px-4 py-3 bg-card-border/50 border-b border-card-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-xs text-muted font-mono">server.js</div>
                </div>
                <pre className="p-4 md:p-6 overflow-x-auto text-sm leading-relaxed font-mono text-foreground/90"><code>{`const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    developer: 'Atikur Rahman',
    stack: ['Node.js', 'NestJS', 'Next.js'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL']
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}</code></pre>
              </div>

              {/* Mobile Code Snippet */}
              <div className="rounded-2xl overflow-hidden bg-background/50 border border-card-border mb-8 md:hidden">
                <div className="flex items-center gap-2 px-3 py-2 bg-card-border/50 border-b border-card-border">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center text-xs text-muted font-mono">server.js</div>
                </div>
                <pre className="p-3 overflow-x-auto text-xs leading-relaxed font-mono text-foreground/90"><code>{`const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    developer: 'Atikur Rahman',
    stack: ['Node.js', 'NestJS', 'Next.js'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL']
  });
});

app.listen(3000, () => {
  console.log('Server running...');
});`}</code></pre>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 flex flex-col gap-3 hidden md:block">
                {techIcons.map(({ icon: Icon, color, delay }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + delay, duration: 0.5, type: "spring", stiffness: 100 }}
                    className="p-3 rounded-xl bg-background/80 border border-card-border backdrop-blur-sm shadow-lg"
                    style={{ boxShadow: `0 10px 30px ${color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
                  </motion.div>
                ))}
              </div>

              {/* Stats - Mobile: relative grid, Desktop: absolute positioned */}
              <div className="grid grid-cols-2 gap-3 md:absolute md:-bottom-6 md:left-8 md:right-8 md:gap-4 md:grid-cols-4">
                {[
                  { value: "5+", label: "Years Exp" },
                  { value: "50+", label: "Projects" },
                  { value: "30+", label: "APIs Built" },
                  { value: "10+", label: "Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    className="glass rounded-2xl p-4 md:p-6 text-center border border-card-border"
                  >
                    <div className="text-2xl md:text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Orbital elements */}
            <div className="absolute inset-0 -inset-20 hidden lg:block" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-primary/10 rounded-full"
                  style={{ borderWidth: i === 0 ? "1px" : i === 1 ? "1px" : "1px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hidden lg:block"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}