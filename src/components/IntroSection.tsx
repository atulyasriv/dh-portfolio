"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* LEFT — your photo */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-[420px] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          <img
            src="/portfoliopic.jpg"
            alt="My Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — about content */}
        <div className="text-zinc-300 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 sm:mb-6">
            About <span className="text-white font-extrabold">Me</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl/relaxed mb-3 sm:mb-4">
            I am specializing in{" "}
            <span className="text-white font-semibold">
              Artificial Intelligence and Machine Learning
            </span>
            , with a strong focus on understanding the mathematics that uses
            modern AI systems. Alongside this, I am highly efficient in{" "}
            <span className="text-white font-semibold">Web Development</span>
            {""} and enjoy building clean, scalable, and user-focused digital
            experiences.
          </p>

          <p className="text-base sm:text-lg md:text-xl/relaxed mb-3 sm:mb-4">
            As an active member of the{" "}
            <span className="text-white font-semibold">
              Google Developers Group
            </span>{" "}
            on my campus, I collaborate with peers to explore new technologies
            and contribute to impactful projects.
          </p>

          <p className="text-base sm:text-lg md:text-xl/relaxed">
            Currently, I am expanding my expertise in{" "}
            <span className="text-white font-semibold">
              Software Development
            </span>
            , where I combine my technical skills and curiosity to solve
            real-world problems and create meaningful solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
