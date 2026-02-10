import { Card } from "@/components/ui/card";
import { User, GraduationCap, Phone, Mail, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";

const About = () => {
  const infoCards = [
    { icon: User, label: "Nama", value: "Your Name" },
    { icon: MapPin, label: "Domisili", value: "Yogyakarta, Indonesia" },
    { icon: GraduationCap, label: "Pendidikan", value: "Sistem Informasi - UNJANI Yogyakarta" },
    { icon: Mail, label: "Email", value: "email@example.com" },
    { icon: Phone, label: "Phone", value: "+62 812-3456-7890" },
    { icon: Briefcase, label: "Status", value: "Available for Work" },
  ];

  const interests = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Web Technologies",
    "Full Stack Development",
    "Database Management",
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Photo */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={slideInLeft.transition}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-primary rounded-2xl opacity-20 absolute inset-0 blur-3xl"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/20">
                <img
                  src="/placeholder.svg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            className="space-y-8"
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={slideInRight.transition}
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">Hello There!</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Saya adalah mahasiswa Sistem Informasi di Universitas Jenderal Achmad Yani Yogyakarta
                yang memiliki passion dalam pengembangan web dan teknologi. Saya senang mempelajari
                hal-hal baru dan selalu berusaha untuk mengembangkan kemampuan saya dalam bidang
                programming, khususnya dalam frontend development dan UI/UX design.
              </p>
            </div>

            {/* Info Cards Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {infoCards.map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CV Button */}
            <div className="flex gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                View CV
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 text-primary font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </a>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Interests & Focus</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
