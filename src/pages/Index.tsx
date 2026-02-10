import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HireMeButton from "@/components/HireMeButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HireMeButton />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
