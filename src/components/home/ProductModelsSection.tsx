
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import ThreeDViewer from "../ThreeDViewer";

const productModels = [
  {
    id: "evc-5000",
    name: "EVC-5000",
    title: "Ultimate Rapid Chilling Solution",
    description: "Our flagship extreme vacuum cooling system offering 5x faster cooling for high-volume operations.",
    specs: [
      "Capacity: 200kg/hr",
      "Dimensions: 2.4m x 1.5m x 2.1m",
      "Power: 380-415V, 3-phase",
      "Cooling Time: 3-8 minutes (vs. 15-40 min conventional)",
      "Energy Efficiency: 40% less than blast chillers"
    ],
    idealFor: "Large restaurants, hotels, institutional catering, food manufacturers"
  },
  {
    id: "evc-3000",
    name: "EVC-3000",
    title: "Professional Series Chiller",
    description: "Versatile mid-range chilling system with exceptional performance and flexible configuration options.",
    specs: [
      "Capacity: 120kg/hr",
      "Dimensions: 1.8m x 1.2m x 1.9m",
      "Power: 380-415V, 3-phase",
      "Cooling Time: 4-10 minutes",
      "Energy Efficiency: 35% less than blast chillers"
    ],
    idealFor: "Medium-sized restaurants, catering operations, commercial kitchens"
  },
  {
    id: "evc-1500",
    name: "EVC-1500",
    title: "Compact Professional Chiller",
    description: "Space-efficient solution that delivers rapid chilling without compromising on performance.",
    specs: [
      "Capacity: 60kg/hr",
      "Dimensions: 1.2m x 0.9m x 1.7m",
      "Power: 220-240V, single-phase",
      "Cooling Time: 5-12 minutes",
      "Energy Efficiency: 30% less than blast chillers"
    ],
    idealFor: "Small restaurants, cafes, specialty food production"
  },
  {
    id: "evc-rapid",
    name: "EVC-Rapid",
    title: "Rapid Treatment System",
    description: "Specialized unit designed for rapid food treatment, up to 25x faster than traditional methods.",
    specs: [
      "Capacity: 40kg/hr",
      "Dimensions: 1.0m x 0.8m x 1.5m",
      "Power: 220-240V, single-phase",
      "Treatment Time: 90 seconds - 3 minutes",
      "Energy Efficiency: 45% less than conventional systems"
    ],
    idealFor: "Specialty food producers, R&D facilities, ghost kitchens"
  }
];

const ProductModelsSection = () => {
  const [activeTab, setActiveTab] = useState("evc-5000");

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Our <span className="text-primary">Product</span> Models
          </h2>
          <p className="text-muted-foreground text-balance">
            Explore our range of cutting-edge rapid chilling solutions designed for various operational needs.
          </p>
        </motion.div>

        <Tabs
          defaultValue="evc-5000"
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <TabsList className="glass-card p-1 shadow-md">
              {productModels.map((model) => (
                <TabsTrigger 
                  key={model.id} 
                  value={model.id}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {model.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {productModels.map((model) => (
            <TabsContent key={model.id} value={model.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[400px] lg:h-[500px] w-full glass-card rounded-2xl overflow-hidden shadow-lg"
                >
                  <ThreeDViewer />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full px-6">
                    <div className="inline-block glass-card px-4 py-2 rounded-full">
                      <p className="text-sm font-medium">
                        <span className="text-primary">Interactive:</span> Rotate & Zoom to explore the {model.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {model.name}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                  <p className="text-muted-foreground mb-6">{model.description}</p>
                  
                  <div className="glass-card border border-border/50 p-6 rounded-xl mb-6">
                    <h4 className="font-bold mb-3">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {model.specs.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                          </div>
                          <span className="ml-3 text-muted-foreground text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Ideal For</h4>
                    <p className="text-muted-foreground text-sm">{model.idealFor}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full shadow-md">
                      Request Specification Sheet
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="rounded-full border-primary/20">
                        Request Demo
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductModelsSection;
