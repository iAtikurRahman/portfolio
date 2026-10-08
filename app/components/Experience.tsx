"use client";

import { motion } from "framer-motion";
import { Building2, Code2, Server, Database, Globe, Users, Zap, Shield } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer (Node.js)",
    company: "Business Automation Ltd",
    period: "2023 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Developing REST APIs and social platform features using Node.js. Managing complex data migration and data fetching tasks. Contributing to website design and development with focus on responsive, user-friendly interfaces.",
    achievements: [
      "Built scalable REST APIs serving 100K+ daily requests",
      "Implemented social features: feeds, likes, comments, real-time notifications",
      "Migrated legacy data from MySQL to MongoDB with zero downtime",
      "Optimized database queries reducing response time by 40%",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "Socket.io", "Docker"],
    icon: Server,
    color: "#00d4aa",
  },
  {
    role: "Developer (Node.js)",
    company: "3W Business Private Limited",
    period: "2022 – 2023",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Developed REST APIs and integrated them into various platforms. Led e-commerce site development including payment method integration. Played a key role in website design and development ensuring optimal user experience.",
    achievements: [
      "Built complete e-commerce backend with payment gateway integration (SSLCommerz, bKash, Nagad)",
      "Developed admin dashboard for order/inventory management",
      "Integrated third-party logistics APIs for automated shipping",
      "Implemented JWT authentication with role-based access control",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Payment APIs", "JWT", "AWS S3"],
    icon: Code2,
    color: "#6366f1",
  },
  {
    role: "Developer (PHP)",
    company: "Pencilbox Ltd",
    period: "2021 – 2022",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Developed REST APIs and enhanced website design and development. Implemented API integrations to improve application functionality. Collaborated with clients to deliver tailored solutions meeting specific requirements.",
    achievements: [
      "Built RESTful APIs for multiple client projects using PHP/Laravel",
      "Integrated payment gateways and social media APIs",
      "Developed custom CMS solutions for content-heavy websites",
      "Optimized legacy codebase improving performance by 35%",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "jQuery", "Bootstrap"],
    icon: Database,
    color: "#f43f5e",
  },
  {
    role: "IT Engineer",
    company: "Supreme Knitwear Ltd",
    period: "2014 – 2021",
    location: "Rajshahi, Bangladesh",
    type: "Full-time",
    description:
      "Managed IT infrastructure and provided comprehensive technical support. Implemented and maintained network systems ensuring secure and reliable operations for manufacturing facility.",
    achievements: [
      "Managed 200+ workstations and server infrastructure",
      "Implemented network monitoring and backup solutions",
      "Reduced system downtime by 60% through proactive maintenance",
      "Led migration to virtualized server environment",
    ],
    technologies: ["Windows Server", "Active Directory", "VMware", "Network Security", "Backup Solutions"],
    icon: Building2,
    color: "#8b5cf6",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
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
            Professional Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            From IT infrastructure to full-stack development — a journey of continuous growth and learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 md:pt-8"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-8 md:top-12 w-5 h-5 rounded-full border-4 z-10" style={{
                left: index % 2 === 0 ? "calc(50% - 12px)" : "calc(50% - 12px)",
                background: exp.color,
                borderColor: exp.color,
              }} />

              {/* Experience Card */}
              <div className="glass rounded-3xl p-6 md:p-8 border border-card-border card-hover relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${exp.color}20` }}
                  >
                    <exp.icon className="w-6 h-6" style={{ color: exp.color }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: `${exp.color}20`, color: exp.color }}>
                        {exp.type}
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                        className="w-2 h-2 rounded-full"
                        style={{ background: exp.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted leading-relaxed mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-6">
                  <h5 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">Key Achievements</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: exp.color }} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.03, duration: 0.2 }}
                      className="px-3 py-1 text-xs font-medium rounded-full border"
                      style={{
                        borderColor: `${exp.color}40`,
                        color: exp.color,
                        background: `${exp.color}10`,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "5+", label: "Years Professional Exp", icon: Building2, color: "#00d4aa" },
            { value: "4", label: "Companies Worked", icon: Users, color: "#6366f1" },
            { value: "3", label: "Tech Stacks Mastered", icon: Code2, color: "#f43f5e" },
            { value: "100+", label: "APIs Designed", icon: Server, color: "#8b5cf6" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 text-center border border-card-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${stat.color}20` }}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} aria-hidden="true" />
              </div>
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}