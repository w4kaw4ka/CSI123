import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import { motion } from "framer-motion";
import { Zap, Clock, FlaskConical, ShieldCheck, BarChart, Leaf } from "lucide-react";

const FoodTreatmentPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Food Treatment</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Explore our innovative food treatment solutions powered by Extreme Vacuum Technology.
          </p>
        </div>
      </div>
      
      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Food Treatment Technology" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Revolutionary Food Treatment Technology</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our Extreme Vacuum Food Treatment technology transforms traditional processes like marination, brining, and flavor infusion. By leveraging precisely controlled vacuum conditions, we accelerate the absorption of liquids and flavors into foods at a cellular level.
                </p>
                <p className="mb-4">
                  This revolutionary approach is up to 25 times faster than conventional methods, drastically reducing processing time while achieving superior flavor distribution, texture enhancement, and quality results.
                </p>
                <p>
                  Each treatment cycle is optimized by our AI algorithms that analyze food type, density, and desired outcome to deliver consistent, exceptional results with minimal operator intervention.
                </p>
              </div>
              
              <div className="mt-6 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <Clock className="mr-1 h-4 w-4" /> 25x faster than traditional methods
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Treatment Processes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Innovative Food Treatment Processes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technology excels across multiple food treatment applications, delivering superior results in flavor enhancement, texture modification, and process efficiency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Flavor Optimization" 
                  className="h-full w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Flavor Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Our Rapid-Chill technology revolutionizes marination, brining, and flavor infusion, enabling faster, deeper, and more consistent results across a variety of food products.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Transform hours-long processes into minutes while achieving deeper flavor penetration, even distribution, and enhanced moisture retention.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Create innovative flavor profiles by rapidly infusing oils, spices, and aromatic compounds into foods, unlocking new culinary possibilities.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Achieve consistent tenderness, juiciness, and premium flavor development in meats, vegetables, and other products.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-primary/10 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Texture Enhancement" 
                  className="h-full w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Texture Enhancement</h3>
                <p className="text-muted-foreground mb-4">
                  Through controlled vacuum processing, we enable precise modification of food textures to create premium products with unparalleled quality.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Achieve natural tenderization without additives or enzymes, preserving the integrity of the food.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Modify food structures at a cellular level to enhance texture and mouthfeel.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Elevate the sensory experience of food products, from perfectly tender meats to uniquely textured plant-based alternatives.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quality & Safety */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Quality Assurance</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our food treatment processes are engineered with quality as the top priority. Every aspect of our technology is designed to enhance and preserve the natural qualities of food:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Real-time monitoring systems that track and adjust treatment parameters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Precision control of vacuum levels to prevent texture degradation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Automated program selection based on food type and desired outcome</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Comprehensive data logging for quality control and process improvement</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                <FlaskConical className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Food Safety Compliance</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Safety is non-negotiable in food processing. Our systems are designed to meet and exceed industry standards:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>HACCP-compliant process controls and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>FDA-approved materials throughout the system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Sanitary design principles that facilitate thorough cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Safety interlocks and fail-safe mechanisms throughout the process</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Comprehensive training and certification programs for operators</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FoodTreatmentPage;
