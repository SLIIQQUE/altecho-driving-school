"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Car, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export default function LuxuryNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-luxury shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <nav className="container-main">
          <div className="flex items-center justify-between" style={{ height: '80px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#d4af37]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-white tracking-wide">
                  ALTECHO
                </span>
                <span className="text-xs text-[#d4af37] tracking-widest uppercase">
                  Driving School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-body text-sm tracking-wide transition-all duration-300 relative ${
                    pathname === link.href
                      ? "text-[#d4af37]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 border border-[#d4af37]/30 rounded-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => {
                  const event = new CustomEvent("open-ai-chat");
                  window.dispatchEvent(event);
                }}
                className="btn-luxury flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                AI Tutor
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-[#d4af37]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-[#0a0a0a] z-50 lg:hidden border-l border-[#d4af37]/20"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span className="font-display font-bold text-xl text-white">MENU</span>
                  <button
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="w-6 h-6 text-[#d4af37]" />
                  </button>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 font-body text-sm tracking-wide transition-all duration-200 ${
                        pathname === link.href
                          ? "text-[#d4af37] border border-[#d4af37]/30 rounded-md bg-[#d4af37]/5"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="p-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      const event = new CustomEvent("open-ai-chat");
                      window.dispatchEvent(event);
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-luxury w-full justify-center flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    AI Tutor
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
