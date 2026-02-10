import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Figma", level: 85 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: skillIndex * 0.1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
