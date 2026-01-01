"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsContactOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    const timeout = setTimeout(() => {
      setIsContactOpen(false);
    }, 200);
    setCloseTimeout(timeout);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isContactOpen) setIsContactOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-lg bg-black/50"
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <span className="font-semibold tracking-wide text-sm sm:text-base">MyPortfolio</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="opacity-80 hover:opacity-100 transition-opacity">
            Work
          </a>
          <a
            href="https://github.com/atulyasriv"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            Projects
          </a>
          <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
            About
          </a>

          {/* Contact dropdown - Desktop */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="opacity-80 hover:opacity-100 inline-flex items-center gap-1 transition-opacity">
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

            <motion.div
              initial={false}
              animate={{
                opacity: isContactOpen ? 1 : 0,
                y: isContactOpen ? 0 : -8,
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={`absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 ${
                isContactOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <a
                href="mailto:atulyasrivastava0104@gmail.com"
                className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Mail
              </a>
              <a
                href="https://www.linkedin.com/in/atulya-srivastava-76969730b/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/atulyasriv"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <a
                href="#work"
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Work
              </a>
              <a
                href="https://github.com/atulyasriv"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                About
              </a>
              <div className="pt-2">
                <button
                  onClick={toggleContact}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  <span>Contact</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    className={`transition-transform ${isContactOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M5 7l5 5 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-1 space-y-1"
                    >
                      <a
                        href="mailto:atulyasrivastava0104@gmail.com"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Mail
                      </a>
                      <a
                        href="https://www.linkedin.com/in/atulya-srivastava-76969730b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/atulyasriv"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/10 transition-colors text-sm"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
