
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-square md:aspect-[4/3] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              {/* Placeholder for B&W image */}
              <div className="text-center text-white/50 p-8 text-sm">
                Black and white image of a senior professional in an industrial setting
                <br/>(Image to be implemented)
              </div>
            </div>
          </motion.div>
          
          {/* Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-6">
              <Quote size={60} className="text-[#0033a0]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#0033a0] mb-6 max-w-lg">
              "EVC is a game-changer for the culinary industry. This is a revolutionary improvement in kitchen efficiency, sustainability, and food quality, all while reducing energy costs"
            </h2>
            
            <p className="text-lg font-medium text-[#0033a0]/80">
              Rich Rosendale, Certified Master Chef
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
