import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Fixed Status Badge */}
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

      <div className="container relative z-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Main heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mohammad Sobri
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Web Developer
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I craft beautiful, functional web experiences that solve real problems. 
            Specializing in React, TypeScript, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "var(--shadow-glow)" }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
