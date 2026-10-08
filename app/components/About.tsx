"use client";

import { motion } from "framer-motion";
import { Award, Target, Heart, Zap, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Writing clean, maintainable code with attention to detail and best practices.",
    color: "#00d4aa",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building optimized, scalable solutions that handle real-world loads efficiently.",
    color: "#6366f1",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Continuously learning new technologies and applying them to solve complex problems.",
    color: "#f43f5e",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams and clients to deliver solutions that exceed expectations.",
    color: "#fbbf24",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Creating applications that serve diverse users across different regions and cultures.",
    color: "#06b6d4",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for quality in every line of code and every project delivered.",
    color: "#8b5cf6",
  },
];

const highlights = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Happy Clients", value: "20+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            I'm a passionate Full Stack Developer from Rajshahi, Bangladesh, with over 5 years of experience
            building scalable web applications, REST APIs, and microservices. My journey started with PHP and
            evolved through Node.js, TypeScript, and modern frameworks like NestJS and Next.js.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 border border-card-border space-y-6">
              <h3 className="text-2xl font-bold">Professional Journey</h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Currently working as a <strong className="text-foreground">Backend Developer (Node.js)</strong> at
                  <strong className="text-primary">Business Automation Ltd</strong> since 2023, where I develop REST APIs,
                  social platform features, and manage complex data migration tasks.
                </p>
                <p>
                  Previously at <strong className="text-foreground">3W Business Private Limited</strong> (2022-2023) as a Node.js Developer,
                  leading e-commerce development with payment gateway integrations.
                </p>
                <p>
                  Started my career at <strong className="text-foreground">Pencilbox Ltd</strong> (2021-2022) as a PHP Developer,
                  building REST APIs and enhancing web applications. Before tech, I spent 7 years as an
                  <strong className="text-foreground">IT Engineer at Supreme Knitwear Ltd</strong> managing IT infrastructure and networks.
                </p>
              </div>

              {/* Education */}
              <div className="pt-6 border-t border-card-border">
                <h4 className="text-lg font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-card-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">B.Sc. in Computer Science & Engineering</p>
                      <p className="text-sm text-muted">The Millennium University — 2020</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-card-border">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Diploma in Engineering, Computer Science</p>
                      <p className="text-sm text-muted">Rajshahi Polytechnic Institute — 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="glass rounded-2xl p-6 text-center border border-card-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-black gradient-text">{highlight.value}</div>
                  <div className="text-sm text-muted mt-1">{highlight.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8">Core Values</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="group glass rounded-2xl p-6 border border-card-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${value.color}20` }}
                    >
                      <value.icon className="w-6 h-6" style={{ color: value.color }} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-muted">{value.description}</p>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ background: value.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 glass rounded-2xl p-6 border border-card-border"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Development Philosophy
              </h4>
              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Write code that humans can read, not just machines",
                  "Test early, test often, automate everything",
                  "Choose the right tool for the job, not the trendiest",
                  "Document decisions, not just implementation",
                  "Security and performance are features, not afterthoughts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}