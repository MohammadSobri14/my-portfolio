import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Folder,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";
import dynamic from "next/dynamic";
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });
const Squares = dynamic(() => import("./Squares"), { ssr: false });

const UpworkIcon = ({ className }: { className?: string }) => (
  <img src="/upwork.png" alt="Upwork" className={`object-contain ${className || ""}`} />
);

const Hero = () => {
  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammad-sobri-804a55265",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/MohammadSobri14",
      label: "GitHub",
    },
    {
      icon: UpworkIcon,
      href: "https://www.upwork.com/freelancers/~01ef4ca7f6b610c5df",
      label: "Upwork",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-hero">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#352B48"
          hoverFillColor="#14D1F2"
        />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Status Badge */}
      <motion.div
        className="fixed bottom-8 left-8 z-40"
        initial={scaleIn.initial}
        animate={scaleIn.animate}
        transition={scaleIn.transition}
      >
        <span className="px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-400 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Available for Work
        </span>
      </motion.div>

      <div className="relative z-20 container px-6 md:px-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-left">
            {/* Heading */}
            <motion.h1
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold leading-tight tracking-tight md:whitespace-nowrap"
            >
              <span className="text-muted-foreground font-bold">
                Welcome to My{" "}
              </span>

              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>

            <motion.p
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground font-medium mt-4"
            >
              Web Developer{" "}
              <span>| Building Modern & Scalable Web Applications</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build fast, responsive, and scalable web applications using
              modern technologies. Passionate about clean architecture and
              crafting seamless digital experiences.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                View CV
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download="CV Mohammad Sobri.pdf"
                className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md border border-primary/50 text-primary font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                Connect With Me
              </span>

              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden md:flex items-center justify-center h-[600px] overflow-visible">
            <Lanyard position={[0.5, 0.5, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
