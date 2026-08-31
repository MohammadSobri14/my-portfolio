import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail } from "lucide-react";

const UpworkIcon = ({ className }: { className?: string }) => (
  <img src="/upwork.png" alt="Upwork" className={`object-contain ${className || ""}`} />
);

const HireMeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full mb-4 right-0 bg-card/90 backdrop-blur-md border border-primary/20 p-2 rounded-xl shadow-lg flex flex-col gap-1 min-w-[160px]"
          >
            <a
              href="mailto:sobrimuhammad19@gmail.com"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-4 w-4 text-primary" />
              Gmail
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ef4ca7f6b610c5df"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              <UpworkIcon className="h-4 w-4" />
              Upwork
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_60px_hsl(189_94%_43%/0.5)] transition-shadow duration-300 w-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Send className="h-4 w-4" />
        <span className="hidden sm:inline">Hire Me Now</span>
        <span className="sm:hidden">Hire Me</span>
      </motion.button>
    </div>
  );
};

export default HireMeButton;
