
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import { motion } from "framer-motion";
import { Leaf, Recycle, BarChart3, Award, Scale, ShieldCheck } from "lucide-react";

const SustainabilityPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Sustainability</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Discover how our technologies contribute to a more sustainable food industry.
          </p>
        </div>
      </div>
      
      {/* Hero Section */}
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
                  alt="Sustainability Initiatives" 
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
              <div className="inline-block p-3 rounded-full bg-accent/10 mb-4">
                <Leaf className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Sustainability Commitment</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  At Culinary Sciences Inc., sustainability isn't just a buzzword—it's a core principle that guides everything we do. We believe that technological innovation must also drive environmental stewardship.
                </p>
                <p className="mb-4">
                  Our Extreme Vacuum Cooling and Food Treatment technologies were developed with sustainability in mind, from energy-efficient operations to reducing food waste across the supply chain.
                </p>
                <p>
                  We're committed to helping our clients achieve their sustainability goals while improving their operational efficiency and product quality. Our solutions deliver measurable environmental benefits alongside clear business advantages.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Energy Efficiency Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Recycle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Energy-Efficient Conditioning Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technologies dramatically reduce energy consumption compared to conventional methods.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">80% Energy Reduction</h3>
                  <p className="text-muted-foreground mb-6">
                    Our EVC technology uses just 20% of the energy required by conventional refrigeration systems for the same cooling capacity. This dramatic reduction translates to lower operational costs and a significantly reduced carbon footprint.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-bold text-primary mb-2">Cooling Energy Comparison</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">Conventional: 100 kWh per batch</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">EVC Technology: 20 kWh per batch</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">Annual Savings: 28,800 kWh</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-bold text-primary mb-2">Environmental Impact</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">Carbon Reduction: 20 tons CO₂ annually</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">Equivalent to planting 330 trees</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                          <span className="text-muted-foreground">Reduced refrigerant use and leakage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-primary mb-4">Smart Energy Management</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Our systems incorporate advanced energy management features that further reduce consumption and optimize performance:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3"></div>
                      <span className="text-muted-foreground">AI-driven power management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Standby mode optimization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Energy recovery systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Peak demand reduction</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 mr-3"></div>
                      <span className="text-muted-foreground">Solar compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Food Waste Reduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Reduced Food Waste</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technologies help combat food waste through improved preservation and shelf life extension.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Food waste is a global challenge with significant environmental consequences. Our EVC technology directly addresses this issue by extending product shelf life and maintaining quality throughout the supply chain.
                </p>
                
                <h4 className="text-lg font-semibold text-primary mt-6 mb-3">Impact on Food Waste Reduction:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>30-50% reduction in product spoilage during transport and storage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Extended shelf life allows more flexible distribution and retail display</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>Maintained product quality reduces consumer rejection and waste</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3"></div>
                    <span>More efficient use of raw materials throughout processing</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-accent font-medium">
                    For every ton of food saved from waste, approximately 4.2 tons of CO₂ equivalent emissions are prevented.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Food Waste Reduction" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Commitments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Environmental Commitments & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our operations and products meet rigorous environmental standards.
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
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Energy Star Certification" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Energy Star Certification</h3>
              <p className="text-muted-foreground">
                Our equipment meets or exceeds Energy Star requirements for energy efficiency in commercial food service equipment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="ISO 14001 Certification" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">ISO 14001 Certification</h3>
              <p className="text-muted-foreground">
                Our manufacturing facilities are ISO 14001 certified, demonstrating our commitment to environmental management systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Carbon Trust Standard" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Carbon Trust Standard</h3>
              <p className="text-muted-foreground">
                We've achieved the Carbon Trust Standard for our efforts in measuring, managing, and reducing carbon emissions year over year.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Our Environmental Commitments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">2025 Goals</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">50% reduction in operational carbon footprint</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">100% renewable energy for manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Zero waste to landfill across all facilities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-3">2030 Vision</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Carbon-neutral operations globally</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">Closed-loop manufacturing systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 mr-2"></div>
                    <span className="text-muted-foreground">100% recyclable or biodegradable product components</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Sustainable Manufacturing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sustainable Manufacturing Practices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainability extends throughout our manufacturing operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Materials Selection</h3>
              <p className="text-muted-foreground mb-4">
                We carefully select materials with sustainability in mind, prioritizing recycled content, recyclability, and reduced environmental impact.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">30% recycled materials in components</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">85% recyclable by weight</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">RoHS-compliant electronics</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Production Efficiency</h3>
              <p className="text-muted-foreground mb-4">
                Our lean manufacturing processes minimize waste and maximize resource efficiency throughout production.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">45% reduction in water usage since 2018</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">70% waste diversion from landfill</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Energy-efficient assembly processes</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Product Lifecycle</h3>
              <p className="text-muted-foreground mb-4">
                We design our products with their entire lifecycle in mind, from manufacturing to end-of-life considerations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Modular design for easy repair and upgrade</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Product takeback and recycling program</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Extended warranty to encourage longevity</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SustainabilityPage;
