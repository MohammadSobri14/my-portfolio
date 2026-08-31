import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    image: string;
    imageClass?: string;
    liveUrl?: string;
    githubUrl?: string;
    githubUrls?: { label: string; url: string }[];
  }> = [
    {
      title: "Mavoka",
      description:
        "An integrated internship platform bridging vocational students (SMK) with real-world industry practices.",
      tags: ["Next.js", "Laravel", "PostgreSQL"],
      image: "/project/mavoka.png",
      imageClass: "object-contain",
      liveUrl: "https://mavoka-dev.fitacademy.id/",
      githubUrls: [
        {
          label: "FE",
          url: "https://github.com/magang-unjani-2025/mavoka-fe-2025.git",
        },
        {
          label: "BE",
          url: "https://github.com/magang-unjani-2025/mavoka-be-2025.git",
        },
      ],
    },
    {
      title: "Community Health Center Risk Management System",
      description:
        "Web-based system for healthcare centers (Puskesmas) to manage risk workflows, from identification and mitigation to multi-role approvals.",
      tags: ["Next.js", "Laravel", "MySQL"],
      image: "/project/ews%20risk.png",
      imageClass: "object-contain",
      githubUrls: [
        {
          label: "FE",
          url: "https://github.com/MohammadSobri14/ews-risk-register-fe.git",
        },
        {
          label: "BE",
          url: "https://github.com/MohammadSobri14/ews-risk-register-be.git",
        },
      ],
    },
    {
      title: "Jeep Operations System",
      description:
        "Integrated tourism platform covering operations, booking, and accounting. Our module handles role-based access, jeep scheduling, employee attendance, and digital ticketing.",
      tags: ["Next.js", "Laravel", "MySQL"],
      image: "/project/tlogo%20putri.png",
      imageClass: "object-contain",
      githubUrls: [
        {
          label: "FE",
          url: "https://github.com/azzikraaksan/tlogo-putri-fe.git",
        },
        {
          label: "BE",
          url: "https://github.com/Putra-pkwl03/tlogo-putri-project.git",
        },
      ],
    },
    {
      title: "Company Profile - Motorcycle Club",
      description:
        "A modern and professional company profile website for a motorcycle club, designed to represent the club's identity, showcase its activities, and provide clear information.",
      tags: ["Next.js"],
      image: "/project/harley.png",
      imageClass: "object-cover",
      liveUrl: "https://the-harley-circle.vercel.app/",
      githubUrl: "https://github.com/MohammadSobri14/sertfikasi_bnsp_jwd_fe.git",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search, virtual tours, and agent management system.",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for managing multiple social media accounts with scheduling and insights.",
      tags: ["React", "Chart.js", "Express", "Redis"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
                    className={`w-full h-full ${project.imageClass || "object-cover"}`}
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
                    {project.liveUrl && project.liveUrl !== "#" && (
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
                    )}
                    {project.githubUrls ? (
                      project.githubUrls.map((repo, i) => (
                        <Button
                          key={i}
                          size="sm"
                          variant="outline"
                          className="border-primary/50 hover:bg-primary/10 px-2"
                          asChild
                          title={`GitHub - ${repo.label}`}
                        >
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            <span className="text-xs">{repo.label}</span>
                          </a>
                        </Button>
                      ))
                    ) : (
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
                    )}
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
