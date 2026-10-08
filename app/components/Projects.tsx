"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Server, Globe, Users, Zap, Shield } from "lucide-react";

const projects = [
  {
    name: "Ziyarah",
    tagline: "eSIM Platform",
    description:
      "A comprehensive eSIM platform enabling travelers to purchase and manage digital SIM cards globally. Built with modern tech stack for scalability and performance.",
    longDescription:
      "Ziyarah is a full-featured eSIM marketplace where users can browse, purchase, and manage eSIM data plans for international travel. The platform handles complex integrations with multiple telecom providers, automated provisioning, and real-time usage tracking.",
    image: "/projects/ziyarah.jpg",
    tech: ["NestJS", "Next.js", "PostgreSQL", "TypeScript", "Docker", "Redis", "Stripe"],
    category: "Full Stack",
    links: {
      live: "https://ziyarah.net",
      github: null,
    },
    highlights: [
      "Multi-provider eSIM integration",
      "Automated provisioning system",
      "Real-time usage analytics",
      "Multi-currency payments",
    ],
    icon: Globe,
    color: "#00d4aa",
    featured: true,
  },
  {
    name: "EBS (Enterprise Business System)",
    tagline: "Social Platform Backend",
    description:
      "Backend system for a social platform featuring feeds, likes, comments, file drives, and event attendees management. Handles high-volume social interactions.",
    longDescription:
      "EBS is a robust backend powering a social networking platform. It manages complex social graphs, real-time feeds, media storage, and event management. Built to scale with millions of interactions per day.",
    image: "/projects/ebs.jpg",
    tech: ["Node.js", "Express.js", "MySQL", "MongoDB", "Redis", "Socket.io"],
    category: "Backend",
    links: {
      live: null,
      github: null,
    },
    highlights: [
      "Real-time feed algorithm",
      "Media drive with CDN",
      "Event management system",
      "Scalable microservices",
    ],
    icon: Users,
    color: "#6366f1",
    featured: true,
  },
  {
    name: "Emutation",
    tagline: "Data Migration & Cleanup",
    description:
      "Automated system for cleaning 30-day-old draft records and migrating corrupted images with validation and database updates.",
    longDescription:
      "Emutation handles critical data maintenance tasks including automated cleanup of stale draft records, image corruption detection and migration, and database integrity verification. Ensures data quality across large datasets.",
    image: "/projects/emutation.jpg",
    tech: ["Node.js", "Python", "MySQL", "Image Processing", "Cron Jobs"],
    category: "Data Engineering",
    links: {
      live: null,
      github: null,
    },
    highlights: [
      "Automated 30-day cleanup",
      "Image corruption detection",
      "Batch migration pipeline",
      "Data integrity validation",
    ],
    icon: Database,
    color: "#f43f5e",
    featured: false,
  },
  {
    name: "BTRC Integration",
    tagline: "Government API Gateway",
    description:
      "Server setup using Apache NiFi to handle BTRC LIMS API and D-Nothi API submissions for regulatory compliance.",
    longDescription:
      "Built a robust integration layer using Apache NiFi to facilitate secure data exchange between internal systems and Bangladesh Telecommunication Regulatory Commission (BTRC) APIs. Handles LIMS submissions and D-Nothi document management.",
    image: "/projects/btrc.jpg",
    tech: ["Apache NiFi", "REST APIs", "XML/JSON", "Docker", "Linux"],
    category: "Integration",
    links: {
      live: null,
      github: null,
    },
    highlights: [
      "BTRC LIMS API integration",
      "D-Nothi document submission",
      "Automated retry logic",
      "Audit logging & monitoring",
    ],
    icon: Server,
    color: "#8b5cf6",
    featured: false,
  },
  {
    name: "E-commerce Platform",
    tagline: "Full-Stack Shop",
    description:
      "Complete e-commerce backend with Node.js and MongoDB integrating multiple payment methods including local and international gateways.",
    longDescription:
      "Full-featured e-commerce platform supporting product catalog, cart, checkout, order management, and multiple payment integrations (SSLCommerz, bKash, Nagad, Stripe). Includes admin panel for inventory and order management.",
    image: "/projects/ecommerce.jpg",
    tech: ["Node.js", "Express.js", "MongoDB", "Payment APIs", "JWT", "Redis"],
    category: "Full Stack",
    links: {
      live: null,
      github: null,
    },
    highlights: [
      "Multi-gateway payments",
      "Inventory management",
      "Order tracking system",
      "Admin dashboard",
    ],
    icon: Zap,
    color: "#fbbf24",
    featured: true,
  },
  {
    name: "POS System",
    tagline: "Point of Sale",
    description:
      "Backend for a Point of Sale system built with PHP, AJAX, and MySQL focusing on efficient transaction processing and inventory management.",
    longDescription:
      "A reliable POS backend handling sales transactions, inventory tracking, customer management, and reporting. Built with PHP and MySQL for stability, featuring real-time updates via AJAX for smooth cashier experience.",
    image: "/projects/pos.jpg",
    tech: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap"],
    category: "Backend",
    links: {
      live: null,
      github: null,
    },
    highlights: [
      "Real-time transactions",
      "Inventory synchronization",
      "Sales reporting",
      "Multi-user support",
    ],
    icon: Shield,
    color: "#06b6d4",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
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
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A collection of projects showcasing my expertise across full-stack development, backend engineering,
            data processing, and system integration.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button className="px-5 py-2 rounded-full bg-primary text-background font-medium text-sm">All</button>
          <button className="px-5 py-2 rounded-full bg-card border border-card-border text-muted font-medium text-sm hover:border-primary/50 hover:text-foreground transition-colors">Full Stack</button>
          <button className="px-5 py-2 rounded-full bg-card border border-card-border text-muted font-medium text-sm hover:border-primary/50 hover:text-foreground transition-colors">Backend</button>
          <button className="px-5 py-2 rounded-full bg-card border border-card-border text-muted font-medium text-sm hover:border-primary/50 hover:text-foreground transition-colors">Data & Integration</button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-3xl overflow-hidden border border-card-border card-hover group relative"
            >
              {/* Project Header */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br"
                  style={{ background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm border"
                    style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}
                  >
                    <project.icon className="w-10 h-10" style={{ color: project.color }} aria-hidden="true" />
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-bold rounded-full" style={{ background: project.color, color: "#0a0f1a" }}>
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: `${project.color}20`, color: project.color }}>
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                  <p className="text-sm text-primary font-medium">{project.tagline}</p>
                </div>

                <p className="text-muted text-sm leading-relaxed line-clamp-3">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-card-border">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded border"
                      style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}10` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded border border-card-border text-muted">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-card-border">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      <span className="w-4 h-4 font-bold text-lg">GH</span>
                      Code
                    </a>
                  )}
                  {!project.links.live && !project.links.github && (
                    <span className="text-sm text-muted">Private Project</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/iAtikurRahman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            <span className="w-5 h-5 font-bold text-lg">GH</span>
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}