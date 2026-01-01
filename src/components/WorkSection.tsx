"use client";

import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 sm:py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 md:mb-20 text-center"
        >
          My <span className="text-white">Work</span>
        </motion.h2>

        {/* LOCARLA Internship */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

          <div className="relative flex gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Company Logo/Icon */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-green-500/10"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
                  L
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-12 sm:pb-16">
              {/* Role and Date */}
              <div className="mb-4 sm:mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block mb-2 sm:mb-3"
                >
                  <span className="text-xs sm:text-sm md:text-base text-zinc-400 font-medium">
                    December 2025 - January 2026
                  </span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
                >
                  Python Development Intern
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-lg sm:text-xl md:text-2xl text-zinc-300"
                >
                  at <span className="text-white font-semibold">LOCARLA</span>
                </motion.p>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                  Built an efficient graph visualization pipeline that validates structured data using guardrails, enforces immutability after approval, and enables dynamic frontend graph switching without repeated backend calls.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  Tech: Python, Pydantic, Plotly, HTML, CSS, JavaScript
                </p>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-6 sm:mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-white/5"
                  >
                    <img
                      src="/locarla-1.jpg"
                      alt="LOCARLA application - Bar chart view"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-white/5"
                  >
                    <img
                      src="/locarla-2.jpg"
                      alt="LOCARLA application - Donut chart view"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-green-500/10 bg-white/5"
                  >
                    <img
                      src="/locarla-3.jpg"
                      alt="LOCARLA application - Pie chart view"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative pl-4 sm:pl-6 border-l-2 border-white/10"
              >
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">
                  {/* Project Name */}
                </h4>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {/* Add project description here */}
                  {/* Example: "Developed a Python-based data processing system that improved efficiency by 40% through optimized algorithms and real-time processing capabilities." */}
                </p>
                
                {/* Project Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Add project-specific technologies here */}
                </div>

                {/* Optional: Project Link */}
                {/* Uncomment if you have a link to the project */}
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors mt-2"
                >
                  View Project
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M11 3h6v6M17 3l-8 8M17 3v6h-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

