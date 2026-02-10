import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Dinas Perhubungan Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "2024",
      description:
        "Developed and maintained web applications for the transportation department, improving internal workflows and public-facing digital services.",
      tags: ["Web Development", "Frontend", "Government"],
    },
    {
      role: "Backend Developer Intern",
      company: "FIT Academy by Fitinline",
      location: "Yogyakarta, Indonesia",
      period: "2024",
      description:
        "Built and optimized backend systems and APIs, contributing to scalable solutions for the academy's digital learning platform.",
      tags: ["Backend", "API Development", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experiences that shaped my development journey
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow z-10 mt-8" />

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-0 md:mr-auto md:pl-0" : "md:pl-0 md:ml-auto md:pr-0"
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? undefined : undefined,
                  paddingLeft: undefined,
                }}
              >
                <div className={`md:mx-8 ml-0 ${index % 2 === 0 ? "" : ""}`}>
                  <motion.div whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-card transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shrink-0">
                          <Briefcase className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold leading-tight">{exp.role}</h3>
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {exp.period}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
