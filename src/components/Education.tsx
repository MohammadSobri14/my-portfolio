import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-secondary/30">
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
              Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background that built my foundation
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={scaleIn.initial}
          whileInView={scaleIn.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={scaleIn.transition}
        >
          <motion.div whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-card transition-all duration-300">
              {/* Decorative gradient bar */}
              <div className="h-1.5 bg-gradient-primary w-full" />

              <div className="p-8">
                <div className="flex items-start gap-5">
                  <motion.div
                    className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <GraduationCap className="h-7 w-7 text-primary-foreground" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Sistem Informasi</h3>
                    <p className="text-primary font-medium">
                      Universitas Jenderal Achmad Yani Yogyakarta
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> Yogyakarta, Indonesia
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" /> Currently Enrolled
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm pt-2 leading-relaxed">
                      Studying Information Systems with a focus on software development,
                      database management, and modern web technologies.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
