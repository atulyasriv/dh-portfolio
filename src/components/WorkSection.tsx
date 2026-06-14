"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "IRONCLAD",
    description:
      "Real-time industrial telemetry dashboard with live data streaming and alerting, built on a FastAPI + WebSocket backend with a React frontend.",
    tech: ["FastAPI", "WebSockets", "React"],
  },
  {
    title: "GitHub TimeMachine",
    description:
      "Visualizes a repository's commit history over time, using NLP to categorize commits, with a React frontend and Flask backend powered by the GitHub API.",
    tech: ["React", "Flask", "GitHub API", "NLP"],
  },
  {
    title: "House Price Prediction System",
    description:
      "ML-powered web app that estimates house prices from key features using a Scikit-Learn regression model served through Flask.",
    tech: ["Python", "Flask", "Scikit-Learn"],
  },
];

const experience = [
  {
    role: "Python Developer Intern",
    org: "LOCARLA",
    period: "Dec. 2025 - Jan. 2026",
    description:
      "Built an interactive real-estate analytics dashboard using Plotly.js, implementing secure backend-driven visualization pipelines and exportable bar, pie, and donut charts to enhance the reliability, accessibility, and usability of housing stock and energy rating insights.",
  },
  {
    role: "Women in Tech - Head",
    org: "Google Developers Group",
    period: "Sep. 2025 – Present",
    description:
      "Engaged in Google Developers Group initiatives by completing Gen AI Study Jams focused on Vertex AI, Google Workspace tools, and the Cloud Vision API, and by creating Hacktoberfest coding challenges that encouraged collaboration and strengthened technical skills within the developer community.",
  },
  {
    role: "Content Development Manager",
    org: "The STEAM Boat",
    period: "May. 2024 - Sep. 2024",
    description:
      "• Developed and curated educational content, articles, and outreach campaigns in collaboration with cross-functional teams to promote diversity in technology, inspire women to pursue STEM careers, and increase awareness of opportunities within the tech industry.",
  },
];

export default function WorkSection() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          My <span className="text-white font-extrabold">Work</span>
        </h2>

        {/* PROJECTS */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-white">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col"
              >
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <h4 className="text-lg font-bold">{exp.role}</h4>
                  <p className="text-zinc-400 text-sm">{exp.org}</p>
                  <p className="text-zinc-300 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                <span className="text-sm text-zinc-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
