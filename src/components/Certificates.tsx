import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ZoomIn, X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Certificates = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const animationRef = useRef<number>();

  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    let lastTime = performance.now();
    let fractionalScroll = 0;
    const scrollSpeed = 0.025; // Adjust this value to make it faster or slower (pixels per millisecond)

    const animateScroll = (time: number) => {
      if (sliderRef.current) {
        const delta = time - lastTime;
        lastTime = time;
        
        fractionalScroll += delta * scrollSpeed;
        
        if (fractionalScroll >= 1) {
          const pixels = Math.floor(fractionalScroll);
          sliderRef.current.scrollLeft += pixels;
          fractionalScroll -= pixels;
          
          if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 1) {
            sliderRef.current.scrollLeft = 0;
          }
        }
      }
      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  const certificates = [
    {
      title: "Cloud Practitioner Essentials (Basic AWS Cloud)",
      issuer: "Dicoding Indonesia",
      year: "2025",
      category: "Cloud Computing",
      images: [
        "/certificates/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).pdf",
      ],
    },
    {
      title: "DQLab Data Science Certificate",
      issuer: "DQLab",
      year: "2025",
      category: "Data Science",
      images: ["/certificates/certificate-DQLABINTP1EMSEOO.pdf"],
    },
    {
      title: "Professional Competency Certification",
      issuer: "BNSP",
      year: "2025",
      category: "Professional Certification",
      images: ["/certificates/BNSP.jpeg", "/certificates/BNSP 2.png"],
    },
    {
      title: "The Complete Full-Stack Web Development",
      issuer: "Udemy",
      year: "2025",
      category: "Full-Stack",
      images: ["/certificates/The Complete Full-Stack.jpg"],
    },
    {
      title: "Basic Project Management",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Project Management",
      images: ["/certificates/Belajar Dasar Manajemen Proyek.pdf"],
    },
    {
      title: "Basic Artificial Intelligence",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Artificial Intelligence",
      images: ["/certificates/Belajar Dasar AI.pdf"],
    },
    {
      title: "Basic Data Science",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Data Science",
      images: ["/certificates/Belajar Dasar Data Science.pdf"],
    },
    {
      title: "Basic HTML",
      issuer: "Codepolitan",
      year: "2024",
      category: "Web Development",
      images: ["/certificates/Belajar Dasar HTML - CODEPOLITAN.pdf"],
    },
    {
      title: "Basic Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Database",
      images: [
        "/certificates/Belajar Dasar Structured Query Language (SQL).pdf",
      ],
    },
    {
      title: "Self-Development Strategy",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Soft Skills",
      images: ["/certificates/Belajar Strategi Pengembangan Diri.pdf"],
    },
    {
      title: "Alibaba Cloud Developer Certification",
      issuer: "Alibaba Cloud",
      year: "2023",
      category: "Cloud Computing",
      images: ["/certificates/Alibaba.png"],
    },
  ];

  const handleOpenModal = (images: string[]) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImages) {
      setCurrentIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    }
  };

  return (
    <section id="certificates" className="py-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeInUp.transition}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Certificates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My learning journey and achievements.
          </p>
        </motion.div>

        <div 
          className="relative group/slider -mx-4 px-4 md:mx-0 md:px-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-left-5 z-10 p-3 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm border border-border/50 shadow-xl text-foreground opacity-0 md:group-hover/slider:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:-right-5 z-10 p-3 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm border border-border/50 shadow-xl text-foreground opacity-0 md:group-hover/slider:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] flex-none flex flex-col self-stretch"
              >
              <Card 
                onClick={() => handleOpenModal(cert.images)}
                className="bg-card overflow-hidden flex flex-col border border-border/40 shadow-sm hover:border-border hover:shadow-md transition-all duration-300 h-full w-full cursor-pointer group"
              >
                <div className="w-full h-44 sm:h-48 overflow-hidden bg-muted/30 p-3 flex items-center justify-center relative">
                  {cert.images[0].endsWith(".pdf") ? (
                    <div className="w-full h-full relative overflow-hidden pointer-events-none rounded-md bg-white flex items-center justify-center">
                      <object 
                        data={`${cert.images[0]}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                        type="application/pdf"
                        className="w-[102%] h-[102%] border-0 pointer-events-none"
                        aria-hidden="true"
                        tabIndex={-1}
                      />
                    </div>
                  ) : (
                    <img 
                      src={cert.images[0]} 
                      alt={cert.title} 
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {cert.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-[10px] font-medium px-2 py-0.5 rounded-md text-muted-foreground border border-border/50">
                      1/{cert.images.length}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {cert.issuer} &bull; {cert.year}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                      {cert.category}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImages(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl bg-transparent flex items-center justify-center group"
            >
              <button
                onClick={() => setSelectedImages(null)}
                className="absolute top-0 right-0 m-4 p-2 rounded-full bg-background/50 hover:bg-background backdrop-blur-md transition-colors z-20 border border-border/50 text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 p-2 rounded-full bg-background/50 hover:bg-background backdrop-blur-md transition-colors z-20 border border-border/50 text-foreground opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 p-2 rounded-full bg-background/50 hover:bg-background backdrop-blur-md transition-colors z-20 border border-border/50 text-foreground opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-background/50 backdrop-blur-md px-3 py-2 rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    {selectedImages.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-primary/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              <AnimatePresence mode="wait">
                {selectedImages[currentIndex].endsWith(".pdf") ? (
                  <motion.iframe
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={selectedImages[currentIndex]}
                    title={`Certificate Detail ${currentIndex + 1}`}
                    className="w-full h-[85vh] rounded-lg shadow-2xl bg-white"
                  />
                ) : (
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    src={selectedImages[currentIndex]}
                    alt={`Certificate Detail ${currentIndex + 1}`}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

