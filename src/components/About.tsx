import { Card } from "@/components/ui/card";
import {
  User,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import dynamic from "next/dynamic";
const LightRays = dynamic(() => import("./LightRays"), { ssr: false });
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const About = () => {
  const infoCards = [
    { icon: User, label: "Name", value: "Mohammad Sobri" },
    {
      icon: MapPin,
      label: "Domicile",
      value: "Special Region of Yogyakarta, Indonesia",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Universitas Jenderal Achmad Yani Yogyakarta",
    },
    { 
      icon: Award, 
      label: "Degree", 
      value: (
        <span className="flex flex-wrap items-center gap-2">
          <span>Bachelor of Computer Science</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold border border-primary/20">
            GPA: 3.83 / 4.00
          </span>
        </span>
      )
    },
    {
      icon: Mail,
      label: "Email",
      value: "sobrimuhammad19@gmail.com",
      href: "mailto:sobrimuhammad19@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 851-5618-1586",
      href: "https://wa.me/6285156181586",
    },
  ];

  const skills = [
    { name: "Next.js", icon: "nextjs" },
    { name: "Laravel", icon: "laravel" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "Figma", icon: "figma" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Info */}
          <motion.div 
            className="space-y-12 flex flex-col items-center text-center"
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={fadeInUp.transition}
          >

            {/* Info Cards Grid */}
            <motion.div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 text-left"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {infoCards.map((item, index) => {
                const CardWrapper = item.href ? 'a' : 'div';
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <CardWrapper 
                      href={item.href}
                      target={item.href?.startsWith('http') ? "_blank" : undefined}
                      rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="block group h-full"
                    >
                      <Card className={`p-5 h-full bg-card/60 backdrop-blur-sm border transition-all duration-300 flex items-start gap-4 rounded-xl ${item.href ? 'border-primary/20 hover:bg-primary/5 hover:border-primary/50 hover:shadow-glow cursor-pointer' : 'border-primary/10 hover:border-primary/40'}`}>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted-foreground mb-1 group-hover:text-primary/80 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors break-all sm:break-words">
                            {item.value}
                          </p>
                        </div>
                      </Card>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Tech Stack / Skills */}
            <div className="w-full pt-6">
              <h4 className="text-xl font-semibold mb-6 text-center">Tech Stack</h4>
              <motion.div 
                className="flex flex-wrap justify-center gap-4 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="cursor-pointer hover:shadow-glow rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <img 
                          src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                          alt={skill.name} 
                          className="h-12 w-12 object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
