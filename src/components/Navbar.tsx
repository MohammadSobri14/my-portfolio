import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FolderOpen, Code2, Mail, Menu, X, GraduationCap, Award } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Award, label: "Certificates", href: "#certificates" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", "")).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-2 py-2 ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl border border-primary/20 shadow-card"
            : "bg-card/60 backdrop-blur-md border border-border"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              (item.href === "#" && activeSection === "") ||
              item.href === `#${activeSection}`;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
