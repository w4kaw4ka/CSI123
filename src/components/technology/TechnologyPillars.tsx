
import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Clock, Utensils, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechnologyPillars = () => {
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
            Two Technology <span className="text-primary">Pillars</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Our core technology powers two revolutionary applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl shadow-md border border-primary/20"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Snowflake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Rapid Chilling</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Fast cooling of hot prepared foods for maximum safety and shelf-life extension while maintaining quality, flavor and nutritional value.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Dramatic Time Reduction:</span> Cool foods from 85°C to 3°C in 3-12 minutes versus 90+ minutes with traditional methods
                </p>
              </div>
              
              <div className="flex items-start">
                <Utensils className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Quality Preservation:</span> Maintains texture, flavor, nutrients and appearance by avoiding the dispersion point
                </p>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Operational Efficiency:</span> Increases kitchen throughput, reduces food waste, and extends shelf life by 25-40%
                </p>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-5">
                <h4 className="font-semibold mb-3">Ideal Applications</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Soups & Sauces</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Pasta Dishes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Rice & Grains</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Meat & Poultry</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Seafood</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Vegetables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl shadow-md border border-primary/20"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Rapid Food Treatment</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Specialized processing for texture enhancement, marination, and quality improvement with unprecedented speed and consistency.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Accelerated Processes:</span> Reduce marination time from hours to 90 seconds - 3 minutes with superior flavor penetration
                </p>
              </div>
              
              <div className="flex items-start">
                <Utensils className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Enhanced Texture:</span> Improve tenderness and mouthfeel through precise cellular manipulation without damaging integrity
                </p>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-medium">Consistency:</span> Achieve uniform results across batches with programmable, repeatable processes
                </p>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-5">
                <h4 className="font-semibold mb-3">Ideal Applications</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Marinated Proteins</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Flavor Infusion</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Tenderizing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Specialty Foods</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Sauce Penetration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                    <span>Brining</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPillars;
