
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const foodTestingData = {
  "salmon": {
    coolingTime: [
      { name: 'EVC Technology', time: 8, fill: '#8B5CF6' },
      { name: 'Blast Chiller', time: 42, fill: '#94A3B8' },
      { name: 'Conventional', time: 75, fill: '#CBD5E1' },
    ],
    qualityMetrics: [
      { name: 'Moisture Retention', evc: 96, conventional: 82 },
      { name: 'Texture Preservation', evc: 95, conventional: 76 },
      { name: 'Color Retention', evc: 94, conventional: 79 },
      { name: 'Nutrient Preservation', evc: 92, conventional: 78 },
    ]
  },
  "lasagna": {
    coolingTime: [
      { name: 'EVC Technology', time: 12, fill: '#8B5CF6' },
      { name: 'Blast Chiller', time: 58, fill: '#94A3B8' },
      { name: 'Conventional', time: 90, fill: '#CBD5E1' },
    ],
    qualityMetrics: [
      { name: 'Moisture Retention', evc: 93, conventional: 75 },
      { name: 'Texture Preservation', evc: 91, conventional: 72 },
      { name: 'Color Retention', evc: 90, conventional: 81 },
      { name: 'Nutrient Preservation', evc: 89, conventional: 74 },
    ]
  },
  "chicken": {
    coolingTime: [
      { name: 'EVC Technology', time: 7, fill: '#8B5CF6' },
      { name: 'Blast Chiller', time: 38, fill: '#94A3B8' },
      { name: 'Conventional', time: 65, fill: '#CBD5E1' },
    ],
    qualityMetrics: [
      { name: 'Moisture Retention', evc: 97, conventional: 78 },
      { name: 'Texture Preservation', evc: 96, conventional: 74 },
      { name: 'Color Retention', evc: 92, conventional: 83 },
      { name: 'Nutrient Preservation', evc: 94, conventional: 80 },
    ]
  },
  "beans": {
    coolingTime: [
      { name: 'EVC Technology', time: 6, fill: '#8B5CF6' },
      { name: 'Blast Chiller', time: 29, fill: '#94A3B8' },
      { name: 'Conventional', time: 55, fill: '#CBD5E1' },
    ],
    qualityMetrics: [
      { name: 'Moisture Retention', evc: 95, conventional: 84 },
      { name: 'Texture Preservation', evc: 94, conventional: 78 },
      { name: 'Color Retention', evc: 97, conventional: 81 },
      { name: 'Nutrient Preservation', evc: 96, conventional: 79 },
    ]
  }
};

const RDResults = () => {
  const [foodType, setFoodType] = useState("salmon");
  
  return (
    <section className="py-20 bg-gradient-to-t from-white to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            R&D <span className="text-primary">Testing Results</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Scientific data comparing our technology with conventional methods across various food types
          </p>
        </motion.div>

        <Tabs
          defaultValue="salmon"
          value={foodType}
          onValueChange={setFoodType}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <TabsList className="glass-card p-1 shadow-md">
              <TabsTrigger 
                value="salmon"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Salmon
              </TabsTrigger>
              <TabsTrigger 
                value="lasagna"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Lasagna
              </TabsTrigger>
              <TabsTrigger 
                value="chicken"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Chicken
              </TabsTrigger>
              <TabsTrigger 
                value="beans"
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Beans
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(foodTestingData).map((food) => (
            <TabsContent key={food} value={food} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
                >
                  <h3 className="text-xl font-bold mb-4">Cooling Time Comparison (minutes)</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Time to cool from 85°C to 3°C for {food.charAt(0).toUpperCase() + food.slice(1)}
                  </p>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={foodTestingData[food].coolingTime}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="time" name="Minutes" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
                >
                  <h3 className="text-xl font-bold mb-4">Quality Preservation</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Comparison of quality metrics (higher % is better)
                  </p>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={foodTestingData[food].qualityMetrics}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="evc" name="EVC Technology" fill="#8B5CF6" />
                        <Bar dataKey="conventional" name="Conventional" fill="#94A3B8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Key Findings for {food.charAt(0).toUpperCase() + food.slice(1)}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Speed Advantage</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Our EVC technology cools {food} {Math.round(foodTestingData[food].coolingTime[2].time / foodTestingData[food].coolingTime[0].time)}x faster than conventional methods and {Math.round(foodTestingData[food].coolingTime[1].time / foodTestingData[food].coolingTime[0].time)}x faster than blast chillers.
                        </p>
                        
                        <h4 className="font-semibold text-primary mb-2">Food Safety</h4>
                        <p className="text-sm text-muted-foreground">
                          Rapid cooling through the danger zone (60°C to 10°C) in under 6 minutes, dramatically reducing bacterial growth potential.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Quality Benefits</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                            <span className="text-muted-foreground">
                              <span className="font-medium">{foodTestingData[food].qualityMetrics[0].evc - foodTestingData[food].qualityMetrics[0].conventional}% better moisture retention</span> preventing dry, overcooked texture
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                            <span className="text-muted-foreground">
                              <span className="font-medium">{foodTestingData[food].qualityMetrics[1].evc - foodTestingData[food].qualityMetrics[1].conventional}% improved texture preservation</span> maintaining the ideal mouthfeel
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                            <span className="text-muted-foreground">
                              <span className="font-medium">{foodTestingData[food].qualityMetrics[3].evc - foodTestingData[food].qualityMetrics[3].conventional}% better nutrient retention</span> preserving nutritional value
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RDResults;
