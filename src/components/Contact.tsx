import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={slideInLeft.transition}
          >
            <motion.div whileHover={{ x: 8, transition: { duration: 0.2 } }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-primary rounded-lg"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ x: 8, transition: { duration: 0.2 } }}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-gradient-accent rounded-lg"
                    whileHover={{ rotate: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MessageSquare className="h-6 w-6 text-accent-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">Social</h3>
                    <p className="text-sm text-muted-foreground">@yourhandle on Twitter</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={slideInRight.transition}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-secondary border-primary/20 focus:border-primary"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-secondary border-primary/20 focus:border-primary"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm font-medium">Subject</label>
                  <Input 
                    placeholder="Project inquiry" 
                    className="bg-secondary border-primary/20 focus:border-primary"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-secondary border-primary/20 focus:border-primary resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
