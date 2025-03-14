
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodResults = [
  {
    name: "Salmon Fillets",
    coolingTime: {
      traditional: "52 minutes",
      evc: "7 minutes",
      improvement: "87%"
    },
    qualityMetrics: {
      moisture: "98% retention",
      texture: "Firm, flaky texture preserved",
      color: "Vibrant color maintained",
      notes: "No protein leakage compared to 12% loss with traditional methods"
    }
  },
  {
    name: "Lasagna",
    coolingTime: {
      traditional: "75 minutes",
      evc: "14 minutes",
      improvement: "81%"
    },
    qualityMetrics: {
      moisture: "96% retention",
      texture: "Layer integrity maintained",
      color: "No surface discoloration",
      notes: "Cheese texture preserved without hardening or separation"
    }
  },
  {
    name: "Chicken Breast",
    coolingTime: {
      traditional: "48 minutes",
      evc: "9 minutes",
      improvement: "81%"
    },
    qualityMetrics: {
      moisture: "97% retention",
      texture: "Tender, juicy consistency",
      color: "Natural appearance maintained",
      notes: "42% longer shelf life compared to conventional cooling"
    }
  },
  {
    name: "Pinto Beans",
    coolingTime: {
      traditional: "65 minutes",
      evc: "11 minutes",
      improvement: "83%"
    },
    qualityMetrics: {
      moisture: "99% retention",
      texture: "Perfect firmness maintained",
      color: "Rich color preserved",
      notes: "Bean integrity preserved without splitting or mushiness"
    }
  }
];

const FoodResultsSection = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            <span className="text-primary">R&D Results</span> by Food Type
          </h2>
          <p className="text-muted-foreground text-balance">
            Our laboratory testing shows remarkable improvements in both cooling time and food quality 
            across diverse food categories.
          </p>
        </motion.div>

        <Tabs defaultValue="salmon" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-card p-1 shadow-md">
              {foodResults.map(food => (
                <TabsTrigger key={food.name.toLowerCase()} value={food.name.toLowerCase()}>
                  {food.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {foodResults.map(food => (
            <TabsContent key={food.name.toLowerCase()} value={food.name.toLowerCase()}>
              <div className="glass-card rounded-2xl overflow-hidden shadow-md">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col"
                    >
                      <h3 className="text-2xl font-bold mb-6">{food.name} Processing Results</h3>
                      
                      <div className="glass-card p-6 rounded-xl bg-secondary/5 mb-6">
                        <h4 className="text-lg font-semibold mb-4">Cooling Time Comparison</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm">Traditional Method</span>
                              <span className="font-medium">{food.coolingTime.traditional}</span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-slate-400 rounded-full" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm">EVC Technology</span>
                              <span className="font-medium text-primary">{food.coolingTime.evc}</span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${100 - parseInt(food.coolingTime.improvement)}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="text-center pt-3">
                            <span className="text-xl font-bold text-primary">{food.coolingTime.improvement}</span>
                            <span className="text-sm text-muted-foreground"> faster cooling</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-sm">HACCP compliant cooling (under 90 minutes)</p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-sm">Minimal time in bacterial danger zone (40°F-140°F)</p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-sm">Increased production throughput</p>
                          </li>
                          <li className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-sm">Energy savings compared to conventional cooling</p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div className="glass-card p-6 rounded-xl mb-6">
                        <h4 className="text-lg font-semibold mb-4">Quality Assessment</h4>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-4 rounded-lg bg-secondary/5 text-center">
                              <h5 className="text-sm font-medium mb-2">Moisture Retention</h5>
                              <p className="text-primary font-bold">{food.qualityMetrics.moisture}</p>
                            </div>
                            
                            <div className="glass-card p-4 rounded-lg bg-secondary/5 text-center">
                              <h5 className="text-sm font-medium mb-2">Texture</h5>
                              <p className="text-xs">{food.qualityMetrics.texture}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-4 rounded-lg bg-secondary/5 text-center">
                              <h5 className="text-sm font-medium mb-2">Color</h5>
                              <p className="text-xs">{food.qualityMetrics.color}</p>
                            </div>
                            
                            <div className="glass-card p-4 rounded-lg bg-secondary/5 text-center">
                              <h5 className="text-sm font-medium mb-2">Shelf Life</h5>
                              <p className="text-primary font-bold">+30-40%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="glass-card p-6 rounded-xl bg-primary/5">
                        <h4 className="text-lg font-semibold mb-4">Additional Findings</h4>
                        <p className="text-sm mb-4">{food.qualityMetrics.notes}</p>
                        
                        <div className="pt-3 border-t border-border/40">
                          <h5 className="text-sm font-medium mb-2">Microbiological Analysis</h5>
                          <p className="text-xs text-muted-foreground">
                            Bacterial growth reduced by 92% compared to conventional cooling methods over a 7-day shelf life test. Natural flavors preserved without the need for additional preservatives.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FoodResultsSection;
