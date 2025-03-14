
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TechnologySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Our <span className="text-primary">Core Technology</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Extreme Vacuum Cooling technology that avoids dispersion point and delivers unprecedented cooling speeds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl overflow-hidden shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Extreme Vacuum Cooling™</h3>
            <p className="text-muted-foreground mb-6">
              Our patented technology leverages precision-controlled vacuum environments to rapidly extract heat while preserving food quality. By avoiding the dispersion point, our systems maintain cellular integrity and nutritional value.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
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
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-3">AI-Powered Food Algorithms</h3>
                <p className="text-muted-foreground mb-4">
                  Our proprietary AI algorithms adapt cooling and treatment cycles to specific food types, textures, and weights, ensuring optimal results for every item.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Smart Food Recognition:</span> Automatically identifies food types and adjusts parameters
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Adaptive Cycling:</span> Continuously optimizes vacuum levels and cooling times
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Data Analytics:</span> Tracks performance and suggests improvements to your processes
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-3">Two Technology Pillars</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Rapid Chilling</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Fast cooling of hot prepared foods for maximum safety and shelf-life extension.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Preserves flavor and texture while reducing bacterial growth</li>
                      <li>• Reduces cooling time by up to 80% compared to conventional methods</li>
                      <li>• HACCP compliant with complete temperature documentation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary">Rapid Food Treatment</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Specialized processing for texture enhancement, marination, and quality improvement.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Accelerates marination from hours to minutes</li>
                      <li>• Improves texture and tenderness of proteins</li>
                      <li>• Enhances flavor penetration and distribution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
