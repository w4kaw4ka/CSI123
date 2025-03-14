
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CompanyShowcase from "@/components/case-studies/CompanyShowcase";
import FoodResultsSection from "@/components/case-studies/FoodResultsSection";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CaseStudiesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Case Studies</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Discover how our Extreme Vacuum Cooling technology is transforming food operations across industries.
          </p>
        </div>
      </div>
      <CaseStudiesHero />
      
      {/* Full-Width Technology Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our <span className="text-primary">Core Technology</span>
            </h2>
            <p className="text-muted-foreground">
              Extreme Vacuum Cooling technology that avoids dispersion point and delivers unprecedented cooling speeds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Extreme Vacuum Cooling™</h3>
            <p className="text-muted-foreground mb-6">
              Our patented technology leverages precision-controlled vacuum environments to rapidly extract heat while preserving food quality. By avoiding the dispersion point, our systems maintain cellular integrity and nutritional value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold">Rapid Temperature Reduction</h4>
                  <p className="text-sm text-muted-foreground">
                    Achieves cooling from 85°C to 3°C in minutes instead of hours
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold">Uniform Cooling</h4>
                  <p className="text-sm text-muted-foreground">
                    Consistent temperature throughout the entire food mass with less than 1°C variance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold">Quality Preservation</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintains texture, color, and nutritional value far better than conventional methods
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold">Energy Efficiency</h4>
                  <p className="text-sm text-muted-foreground">
                    Uses up to 40% less energy than conventional cooling methods
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <CompanyShowcase />
      <FoodResultsSection />
    </Layout>
  );
};

export default CaseStudiesPage;
