import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0033a0] mb-6 font-sans">
              Tailor-made processing solutions
            </h2>
            
            <p className="text-lg text-[#0033a0]/80 mb-8 font-sans">
              Our innovative solutions are designed to increase the quality of your products while 
              reducing operational costs. By leveraging our patented Extreme Vacuum Cooling technology, 
              we provide revolutionary food processing capabilities that preserve and enhance flavor and texture vs. traditional methods.
            </p>
            
            <Link to="/contact" className="inline-flex items-center text-[#0033a0] font-medium hover:underline font-sans">
              Have our specialists review your process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          
          {/* Right Column - Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-md font-sans"
            >
              <h3 className="text-2xl font-bold text-[#0033a0] mb-4 font-sans">
                Rapid CHILLING
              </h3>
              <p className="text-[#0033a0]/80 mb-6 font-sans">
                Our industry-leading technology rapidly chills food up to 5x faster than conventional methods, 
                while preserving quality and reducing energy consumption.
              </p>
              <Link to="/rapid-chill" className="inline-flex items-center text-[#0033a0] font-medium hover:underline font-sans">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-md font-sans"
            >
              <h3 className="text-2xl font-bold text-[#0033a0] mb-4 font-sans">
                Rapid Food Treatment
              </h3>
              <p className="text-[#0033a0]/80 mb-6 font-sans">
                Transform your menu offerings and your bottom line with our patented food treatment technology 
                that saves time and revolutionizes flavor enhancement.
              </p>
              <Link to="/food-treatment" className="inline-flex items-center text-[#0033a0] font-medium hover:underline font-sans">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
