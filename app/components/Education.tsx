"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Star, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "The Millennium University",
    period: "2020",
    location: "Dhaka, Bangladesh",
    description:
      "Focused on web development, app development, IT systems, and network management. Developed a strong understanding of cutting-edge technologies and innovative problem-solving approaches.",
    highlights: [
      "Core CS: Data Structures, Algorithms, OOP, Database Systems",
      "Web: Full-stack development, REST APIs, Modern frameworks",
      "Systems: Operating Systems, Computer Networks, Security",
      "Capstone: Final year project on distributed systems",
    ],
    icon: GraduationCap,
    color: "#00d4aa",
  },
  {
    degree: "Diploma in Engineering, Computer Science",
    institution: "Rajshahi Polytechnic Institute",
    period: "2014",
    location: "Rajshahi, Bangladesh",
    description:
      "Gained expertise in software development, IT systems and management. Built a solid technical foundation with a focus on real-world applications and hands-on learning.",
    highlights: [
      "Programming: C, C++, Java, Assembly",
      "Hardware: Digital Logic, Microprocessors, Computer Architecture",
      "Software: SDLC, Database Design, Project Management",
      "Practical: Lab work, workshops, industry visits",
    ],
    icon: Award,
    color: "#6366f1",
  },
  {
    degree: "SSC in Science",
    institution: "Rajshahi Collegiate School",
    period: "2008",
    location: "Rajshahi, Bangladesh",
    description:
      "Graduated with a strong foundation in scientific principles and mathematics. One of the oldest and most prestigious schools in Bangladesh.",
    highlights: [
      "Focus: Mathematics, Physics, Chemistry, Biology",
      "Achievement: High academic standing",
      "Foundation: Analytical thinking and problem solving",
    ],
    icon: BookOpen,
    color: "#f43f5e",
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024", icon: Star, color: "#ff9900" },
  { name: "MongoDB Associate Developer", issuer: "MongoDB Inc.", year: "2023", icon: Star, color: "#47a248" },
  { name: "Docker Certified Associate", issuer: "Docker Inc.", year: "2023", icon: Star, color: "#2496ed" },
  { name: "Linux System Administration", issuer: "Linux Foundation", year: "2022", icon: Star, color: "#fcc624" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
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
            Education & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Formal education and continuous learning that shaped my technical foundation and professional growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Timeline - Mobile First */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Line - Mobile: left-6, Desktop: left-6 (same) */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Timeline Dot - Positioned at left-6 (center of line) */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10" style={{
                  background: edu.color,
                  borderColor: edu.color,
                }}>
                  <edu.icon className="w-5 h-5" style={{ color: "#0a0f1a" }} aria-hidden="true" />
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-card-border card-hover h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${edu.color}20` }}>
                      <edu.icon className="w-6 h-6" style={{ color: edu.color }} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <p className="text-muted text-sm leading-relaxed mb-4">{edu.description}</p>

                      {/* Highlights */}
                      <div className="space-y-1.5">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: edu.color }} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications & Skills Learned */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-500" />
                Certifications
              </h3>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="glass rounded-2xl p-5 border border-card-border card-hover flex items-center gap-4"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}20` }}
                    >
                      <cert.icon className="w-6 h-6" style={{ color: cert.color }} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{cert.name}</h4>
                      <p className="text-sm text-muted">{cert.issuer}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: `${cert.color}20`, color: cert.color }}>
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Journey */}
            <div className="glass rounded-2xl p-6 border border-card-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Continuous Learning
              </h3>
              <p className="text-muted mb-6">
                Technology evolves rapidly. I stay current through structured learning, open-source contributions,
                and hands-on experimentation with emerging tools.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Currently Exploring", items: ["Rust", "WebAssembly", "Kubernetes", "GraphQL Federation"], color: "#00d4aa" },
                  { title: "Want to Learn", items: ["Go", "gRPC", "Event Sourcing", "Edge Computing"], color: "#6366f1" },
                  { title: "Teaching/Mentoring", items: ["Node.js Fundamentals", "API Design", "Database Optimization", "System Design"], color: "#f43f5e" },
                  { title: "Open Source", items: ["Contributing to NestJS", "Next.js Examples", "Dev Tools", "Documentation"], color: "#8b5cf6" },
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                    className="p-4 rounded-xl" style={{ background: `${category.color}10`, border: `1px solid ${category.color}30` }}
                  >
                    <h4 className="font-semibold text-sm mb-3" style={{ color: category.color }}>{category.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium rounded border" style={{ borderColor: `${category.color}30`, color: category.color }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-card-border text-center"
            >
              <p className="text-lg text-muted italic mb-4">
                "The only way to learn a new programming language is by writing programs in it."
              </p>
              <p className="text-sm text-primary font-medium">— Dennis Ritchie</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}