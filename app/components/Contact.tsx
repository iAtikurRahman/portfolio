"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you'd send to an API endpoint
    // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    // For demo, we'll show success
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "iAtikurRahman.bd@gmail.com",
      href: "mailto:iAtikurRahman.bd@gmail.com",
      color: "#00d4aa",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1920 644448",
      href: "tel:+8801920644448",
      color: "#6366f1",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rajshahi, Bangladesh",
      href: null,
      color: "#f43f5e",
    },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/iAtikurRahman", color: "#24292e", initial: "GH" },
    { label: "LinkedIn", href: "https://linkedin.com/in/iatikurrahman", color: "#0077b5", initial: "IN" },
    { label: "Twitter", href: "https://twitter.com/iAtikurRahman", color: "#1da1f2", initial: "X" },
    { label: "Email", href: "mailto:iAtikurRahman.bd@gmail.com", color: "#ea4335", initial: "✉" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 pb-32">
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Have a project in mind? Looking for a developer? I'm always open to discussing new opportunities,
            interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-6 md:p-8 border border-card-border h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-card-border hover:border-primary/30 transition-colors"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-medium hover:text-primary transition-colors break-words">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-card-border hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                      style={{ color: social.color }}
                    >
                      <span className="w-5 h-5 font-bold text-lg flex items-center justify-center" aria-hidden="true">{social.initial}</span>
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability - Mobile Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-card-border"
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Availability
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 sm:p-4 rounded-xl" style={{ background: "rgba(0, 212, 170, 0.1)" }}>
                  <p className="text-primary font-semibold text-sm sm:text-base">Freelance Projects</p>
                  <p className="text-muted text-xs sm:text-sm">Open for opportunities</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl" style={{ background: "rgba(99, 102, 241, 0.1)" }}>
                  <p className="text-secondary font-semibold text-sm sm:text-base">Full-time Roles</p>
                  <p className="text-muted text-xs sm:text-sm">Open to discussions</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl" style={{ background: "rgba(244, 63, 94, 0.1)" }}>
                  <p className="text-accent font-semibold text-sm sm:text-base">Consulting</p>
                  <p className="text-muted text-xs sm:text-sm">Architecture & Code Review</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl" style={{ background: "rgba(139, 92, 246, 0.1)" }}>
                  <p className="text-purple-500 font-semibold text-sm sm:text-base">Mentoring</p>
                  <p className="text-muted text-xs sm:text-sm">Junior Developers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-6 md:p-8 border border-card-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                      placeholder="Your name"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                      placeholder="your@email.com"
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none"
                    disabled={status === "submitting"}
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consulting">Consulting</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors outline-none resize-none"
                    placeholder="Tell me about your project, timeline, budget, or just say hi..."
                    disabled={status === "submitting"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-background bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary-glow hover:to-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,170,0.4)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(0, 212, 170, 0.15)", border: "1px solid rgba(0, 212, 170, 0.3)" }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-primary font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(244, 63, 94, 0.15)", border: "1px solid rgba(244, 63, 94, 0.3)" }}
                    >
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-accent font-medium">{errorMessage || "Something went wrong. Please try again."}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs text-muted text-center">
                  By submitting this form, you agree to my{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}