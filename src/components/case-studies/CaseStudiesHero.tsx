
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    alt: "Industrial manufacturing equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    alt: "Food production facility"
  },
  {
    url: "https://images.unsplash.com/photo-1581092921461-39b788cb465a",
    alt: "Professional kitchen with chefs"
  }
];

const CaseStudiesHero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </motion.div>
          ))}
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImage === index 
                    ? "bg-white scale-125" 
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute bottom-24 left-0 w-full px-8 md:px-16">
            <div className="glass-card max-w-lg p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Transforming Food Operations Worldwide
              </h2>
              <p className="text-muted-foreground">
                See how Culinary Sciences is revolutionizing food safety, quality, and efficiency with our Extreme Vacuum Cooling technology across diverse industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
