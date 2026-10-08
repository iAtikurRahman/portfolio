"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Layers,
  GitBranch,
  Box,
  Cloud,
  Terminal,
  FlaskConical,
  PenTool,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "#00d4aa",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "PHP", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    color: "#6366f1",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#f43f5e",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 90 },
      { name: "Express.js", level: 95 },
      { name: "FastAPI", level: 80 },
      { name: "REST/GraphQL APIs", level: 92 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "#fbbf24",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 92 },
      { name: "Redis", level: 80 },
      { name: "Prisma ORM", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    color: "#06b6d4",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git/GitHub", level: 95 },
      { name: "Apache NiFi", level: 80 },
      { name: "Apache Airflow", level: 75 },
      { name: "Linux/Server Mgmt", level: 88 },
    ],
  },
  {
    title: "Testing & Quality",
    icon: FlaskConical,
    color: "#8b5cf6",
    skills: [
      { name: "Jest/Vitest", level: 85 },
      { name: "React Testing Library", level: 80 },
      { name: "Postman/Insomnia", level: 90 },
      { name: "ESLint/Prettier", level: 95 },
      { name: "CI/CD Pipelines", level: 82 },
    ],
  },
];

const otherSkills = [
  { name: "WordPress", icon: Code2, color: "#21759b" },
  { name: "GitHub Actions", icon: GitBranch, color: "#2088ff" },
  { name: "Docker Compose", icon: Box, color: "#2496ed" },
  { name: "Cloud Services", icon: Cloud, color: "#ff9900" },
  { name: "Microservices", icon: Layers, color: "#6366f1" },
  { name: "Payment Gateways", icon: Server, color: "#0070ba" },
  { name: "E-commerce", icon: Code2, color: "#ff6b35" },
  { name: "API Integration", icon: GitBranch, color: "#00d4aa" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
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
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            My <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A curated set of technologies I work with daily. I believe in choosing the right tool for the job
            and continuously expanding my technical repertoire.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-6 border border-card-border card-hover group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${category.color}20` }}
                >
                  <category.icon className="w-6 h-6" style={{ color: category.color }} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    className="skill-item"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Competencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="glass rounded-2xl p-5 border border-card-border card-hover group flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${skill.color}20` }}
                >
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} aria-hidden="true" />
                </div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 glass rounded-2xl p-6 border border-card-border"
        >
          <h4 className="text-lg font-semibold mb-4 text-center">Proficiency Scale</h4>
          <div className="grid grid-cols-5 gap-4 text-center">
            {[
              { range: "90-100%", label: "Expert", color: "#00d4aa" },
              { range: "75-89%", label: "Advanced", color: "#6366f1" },
              { range: "60-74%", label: "Intermediate", color: "#fbbf24" },
              { range: "40-59%", label: "Learning", color: "#f43f5e" },
              { range: "0-39%", label: "Beginner", color: "#64748b" },
            ].map((level, index) => (
              <div key={index} className="p-3 rounded-xl" style={{ background: `${level.color}15` }}>
                <div className="w-full h-2 rounded bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${level.color}, ${level.color}80)` }} />
                <p className="text-xs font-medium mt-2" style={{ color: level.color }}>{level.label}</p>
                <p className="text-xs text-muted">{level.range}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}