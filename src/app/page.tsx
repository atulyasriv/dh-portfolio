"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO (first screen) */}
      <section className="h-screen flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-bold"
        >
          Hello, I’m Atulya Srivastava
        </motion.h1>
      </section>

      {/* SCROLL-REVEAL SECTION */}
      <IntroSection />
    </main>
  );
}
