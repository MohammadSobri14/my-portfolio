import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development Fundamentals",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Web Development",
    },
    {
      title: "Backend Development with Node.js",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Backend",
    },
    {
      title: "Database Management",
      issuer: "Oracle Academy",
      year: "2023",
      category: "Database",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2023",
      category: "Design",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Certifications and achievements from my learning journey
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-card transition-all duration-300 h-full group">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-11 h-11 bg-gradient-accent rounded-lg flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Award className="h-5 w-5 text-accent-foreground" />
                  </motion.div>

                  <div className="space-y-2 min-w-0">
                    <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent border-accent/20"
                      >
                        {cert.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Update sertifikat ini dengan data asli milikmu
        </motion.p>
      </div>
    </section>
  );
};

export default Certificates;
