
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coolingTestData = [
  { name: "Cooked Rice (2kg)", traditional: 45, evc5000: 8, improvement: "82%" },
  { name: "Soup (5L)", traditional: 60, evc5000: 12, improvement: "80%" },
  { name: "Roast Chicken (3kg)", traditional: 75, evc5000: 15, improvement: "80%" },
  { name: "Pasta (4kg)", traditional: 40, evc5000: 9, improvement: "78%" },
  { name: "Stew (6L)", traditional: 90, evc5000: 18, improvement: "80%" },
];

const treatmentTestData = [
  { name: "Sous Vide Proteins", traditional: 25, evcRapid: 1.5, improvement: "94%" },
  { name: "Fresh Vegetables", traditional: 18, evcRapid: 0.8, improvement: "96%" },
  { name: "Baked Goods", traditional: 30, evcRapid: 1.2, improvement: "96%" },
  { name: "Pasta Products", traditional: 15, evcRapid: 0.7, improvement: "95%" },
  { name: "Sauces & Purees", traditional: 20, evcRapid: 0.9, improvement: "96%" },
];

const chartData = coolingTestData.map(item => ({
  name: item.name,
  "Traditional Method (min)": item.traditional,
  "EVC-5000 (min)": item.evc5000
}));

const treatmentChartData = treatmentTestData.map(item => ({
  name: item.name,
  "Traditional Method (min)": item.traditional,
  "EVC-Rapid (min)": item.evcRapid
}));

const TestingResultsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            <span className="text-primary">R&D Testing</span> Results
          </h2>
          <p className="text-muted-foreground text-balance">
            Our rigorous testing demonstrates the significant performance advantages of our revolutionary technology compared to traditional methods.
          </p>
        </motion.div>

        <Tabs defaultValue="cooling" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-card p-1 shadow-md">
              <TabsTrigger value="cooling">Cooling Performance</TabsTrigger>
              <TabsTrigger value="treatment">Treatment Speed</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="cooling">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-6">EVC-5000 vs. Traditional Cooling Times</h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                      <YAxis label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Traditional Method (min)" fill="#8884d8" />
                      <Bar dataKey="EVC-5000 (min)" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="glass-card p-6 rounded-2xl shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4">Testing Methodology</h3>
                  <p className="text-muted-foreground mb-4">
                    Tests were conducted in a controlled laboratory environment using standardized food samples. Each food item was brought to 85°C before cooling. Traditional cooling was conducted in a standard professional blast chiller, while our tests used the EVC-5000 system with Extreme Vacuum Cooling™ technology.
                  </p>
                  <p className="text-muted-foreground">
                    All tests were independently verified by the Culinary Institute for Food Technology (CIFT) and followed HACCP guidelines for cooling requirements.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Key Findings</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Average cooling time reduction of 80% across all tested food items</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Consistent temperature reduction through food mass (less than 1°C variance)</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Moisture retention improved by 22% compared to traditional cooling</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">Microbial load significantly reduced due to faster cooling through the danger zone (40°F-140°F)</p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="treatment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-6">EVC-Rapid vs. Traditional Treatment Times</h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={treatmentChartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                      <YAxis label={{ value: 'Time (minutes)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Traditional Method (min)" fill="#8884d8" />
                      <Bar dataKey="EVC-Rapid (min)" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="glass-card p-6 rounded-2xl shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4">Treatment Process Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    The EVC-Rapid utilizes our proprietary Accelerated Phase Transition (APT) technology to drastically reduce treatment time while maintaining or improving food quality. Our tests compared conventional methods against the EVC-Rapid across various food products.
                  </p>
                  <p className="text-muted-foreground">
                    The results demonstrate an average 95% reduction in process time, with consistent quality improvements across all tested food categories.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold mb-4">Quality Impact Assessment</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 text-sm font-medium">
                      <div className="text-muted-foreground">Parameter</div>
                      <div className="text-muted-foreground">Traditional</div>
                      <div className="text-muted-foreground">EVC-Rapid</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm border-t pt-2">
                      <div>Texture Retention</div>
                      <div>74%</div>
                      <div className="text-primary font-medium">96%</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm border-t pt-2">
                      <div>Flavor Profile</div>
                      <div>Good</div>
                      <div className="text-primary font-medium">Excellent</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm border-t pt-2">
                      <div>Color Preservation</div>
                      <div>68%</div>
                      <div className="text-primary font-medium">94%</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm border-t pt-2">
                      <div>Nutrient Retention</div>
                      <div>72%</div>
                      <div className="text-primary font-medium">91%</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-sm border-t pt-2">
                      <div>Overall Quality</div>
                      <div>7.5/10</div>
                      <div className="text-primary font-medium">9.8/10</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestingResultsSection;
