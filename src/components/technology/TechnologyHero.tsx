
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TechnologyHero = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Extreme Vacuum Cooling Technology
            </h2>
            <p className="text-muted-foreground mb-6">
              Our patented technology leverages advanced vacuum environments to achieve rapid, uniform cooling while avoiding the dispersion point - a critical threshold where food structure and quality are compromised.
            </p>
            <p className="text-muted-foreground mb-6">
              Unlike conventional cooling methods that take hours, our Extreme Vacuum Cooling (EVC) technology reduces temperature from 85°C to 3°C in minutes while preserving texture, flavor, nutrients, and color.
            </p>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Key Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Up to 80% faster cooling</span> compared to traditional blast chillers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Uniform temperature reduction</span> throughout the food mass
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Preserves cellular structure</span> by avoiding the dispersion point
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Energy efficient operation</span> with 40-50% less energy consumption
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">EVC</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Technology Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive 3D model of our vacuum cooling process
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
