"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <Navigation />
      <main className="flex-1 w-full" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}