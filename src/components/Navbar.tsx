"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <span className="font-semibold tracking-wide">MyPortfolio</span>

        <div className="flex items-center gap-6 text-sm">
          <a href="#work" className="opacity-80 hover:opacity-100">
            Work
          </a>
          <a href="#about" className="opacity-80 hover:opacity-100">
            About
          </a>

          {/* Contact dropdown (Gmail + LinkedIn only) */}
          <div className="relative group">
            <button
              className="opacity-80 hover:opacity-100 inline-flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                className="mt-[1px]"
              >
                <path
                  d="M5 7l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div
              className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-2
                         opacity-0 translate-y-1 pointer-events-none
                         transition duration-150 ease-out
                         group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
              role="menu"
            >
              {/* Gmail */}
              <a
                href="mailto:atulyasrivastava104@gmail.com?subject=Hello%20Atulya"
                className="block rounded-lg px-4 py-3 hover:bg-white/10"
                role="menuitem"
              >
                atulyasrivastava0104@gmail.com
              </a>

              {/* LinkedIn — replace URL with your real profile */}
              <a
                href="https://www.linkedin.com/in/atulya-srivastava-76969730b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-lg px-4 py-3 hover:bg-white/10"
                role="menuitem"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
