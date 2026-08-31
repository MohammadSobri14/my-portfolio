import { Github, Linkedin, Mail, Heart } from "lucide-react";

const UpworkIcon = ({ className }: { className?: string }) => (
  <img src="/upwork.png" alt="Upwork" className={`object-contain ${className || ""}`} />
);

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-background border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Mohammad Sobri
            </h3>
            <p className="text-sm text-muted-foreground">
              Web Developer crafting beautiful digital experiences
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#certificates"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Certificates
              </a>
              <a
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/mohammad-sobri-804a55265"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/MohammadSobri14"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:sobrimuhammad19@gmail.com"
                className="p-2 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01ef4ca7f6b610c5df"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <UpworkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Mohammad Sobri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
