import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team features, and analytics.",
      tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform using GPT-4 for generating marketing copy and social media posts.",
      tags: ["React", "OpenAI", "Firebase", "Material-UI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-responsive fitness tracker with workout plans, progress tracking, and nutrition calculator.",
      tags: ["React Native", "Redux", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with scheduling and insights.",
      tags: ["React", "Chart.js", "Express", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
