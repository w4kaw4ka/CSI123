
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import { motion } from "framer-motion";
import { LeafyGreen, Zap, BarChart, Timer, ShieldCheck, Recycle } from "lucide-react";

const AgriculturePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Agriculture Solutions</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Learn how our technology is revolutionizing agricultural processes and sustainability.
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
                <LeafyGreen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Transforming Controlled Environment Agriculture</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our Extreme Vacuum Cooling (EVC) technology is revolutionizing post-harvest processes in Controlled Environment Agriculture (CEA), delivering unprecedented improvements in cooling efficiency, product quality, and shelf life.
                </p>
                <p>
                  By integrating our systems into CEA operations, producers can dramatically reduce cooling times, improve batch consistency, and minimize product loss while using a fraction of the energy required by conventional cooling methods.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/placeholder.svg" 
                alt="Agriculture Technology" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Key Value Propositions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Key Value Propositions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our EVC technology delivers significant advantages for CEA operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Energy Efficiency</h3>
              <p className="text-muted-foreground">
                EVC technology uses only 20% of the energy required by conventional refrigeration, significantly reducing operational costs and environmental impact.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Timer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Higher Throughput</h3>
              <p className="text-muted-foreground">
                Dramatic reduction in post-harvest cooling time compared to refrigeration, with less space required for cooling operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Uniform Quality</h3>
              <p className="text-muted-foreground">
                Precision, uniform cooling with patent-protected technology ensures consistent CEA products with no "edge freeze" issues common in conventional cooling.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Extended Shelf Life</h3>
              <p className="text-muted-foreground">
                CSI's Rapid-Chill™ technology reduces waste by extending product shelf life, increasing overall yields and profitability for CEA operations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Food Safety</h3>
              <p className="text-muted-foreground">
                Rapid cooling ensures produce reaches optimal refrigeration temperatures quickly, minimizing pathogen growth and ensuring safer products.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <LeafyGreen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Smaller Footprint</h3>
              <p className="text-muted-foreground">
                EVC systems require significantly less space than conventional cooling rooms, maximizing valuable facility space for production or other operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Test Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Testing & Quality Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our extensive testing demonstrates significant improvements in shelf life and quality for CEA products.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-8 left-0 bg-accent text-white px-4 py-2 rounded-t-lg font-medium">
                Leafy Greens
              </div>
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Leafy Greens Test Results" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Extended Freshness & Appearance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">4-6 days additional shelf life compared to conventional cooling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">73% reduction in wilting during storage period</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Improved color retention throughout shelf life</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">91% reduction in cooling time vs. conventional methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -top-8 left-0 bg-accent text-white px-4 py-2 rounded-t-lg font-medium">
                Herbs
              </div>
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Herbs Test Results" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Aroma & Flavor Preservation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">5-7 days additional shelf life for delicate herbs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">86% improved aroma retention in sensory testing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Significant reduction in moisture loss during storage</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">94% reduction in cooling time compared to conventional methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 left-0 bg-accent text-white px-4 py-2 rounded-t-lg font-medium">
                Microgreens
              </div>
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Microgreens Test Results" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Texture & Nutrient Retention</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">3-5 days extended shelf life for delicate microgreens</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">77% higher nutrient retention compared to conventional cooling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Improved stem integrity throughout storage period</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">89% reduction in cooling time vs. conventional methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -top-8 left-0 bg-accent text-white px-4 py-2 rounded-t-lg font-medium">
                Vine Crops
              </div>
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Vine Crops Test Results" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Shelf Life & Quality Enhancement</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">4-7 days additional shelf life for tomatoes and cucumbers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">68% reduction in surface moisture after cooling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Improved firmness retention during storage period</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-muted-foreground">85% reduction in cooling time compared to conventional methods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AgriculturePage;
