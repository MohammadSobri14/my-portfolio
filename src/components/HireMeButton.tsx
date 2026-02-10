import { motion } from "framer-motion";
import { Send } from "lucide-react";

const HireMeButton = () => {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_0_60px_hsl(189_94%_43%/0.5)] transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Send className="h-4 w-4" />
      <span className="hidden sm:inline">Hire Me Now</span>
      <span className="sm:hidden">Hire Me</span>
    </motion.a>
  );
};

export default HireMeButton;
