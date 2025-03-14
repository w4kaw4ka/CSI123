
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, BarChart4, FileSearch, Zap } from "lucide-react";

const AIAlgorithms = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Powered by <span className="text-primary">AI Algorithms</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Our proprietary AI algorithms adapt cooling and treatment cycles to specific food types, textures, and weights, ensuring optimal results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <BrainCircuit className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Food Recognition</h3>
            <p className="text-muted-foreground mb-4">
              AI systems automatically identify food types and adjust parameters for optimal results.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Weight-based adjustments</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Density recognition</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Texture classification</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <BarChart4 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Adaptive Cycling</h3>
            <p className="text-muted-foreground mb-4">
              Real-time optimization of vacuum levels and cooling times during processing.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Dynamic pressure control</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Temperature-based adjustments</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Predictive cycle completion</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <FileSearch className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive tracking of performance metrics to suggest process improvements.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Energy efficiency reporting</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Usage pattern optimization</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Predictive maintenance</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 rounded-2xl shadow-md border border-border/50"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Recipe Integration</h3>
            <p className="text-muted-foreground mb-4">
              AI-powered recipe programs tailored for specific dishes and ingredients.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Customized food profiles</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">One-touch operation</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                <span className="text-muted-foreground">Cloud recipe sharing</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAlgorithms;
