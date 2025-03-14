
import React from "react";
import { motion } from "framer-motion";
import { Zap, Activity, Droplets, BarChart4 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Rapid Chilling Technology",
    description:
      "Our Extreme Vacuum Cooling™ technology chills food up to 5x faster than conventional blast chillers.",
  },
  {
    id: 2,
    icon: <Activity className="h-6 w-6 text-primary" />,
    title: "Enhanced Food Safety",
    description:
      "Quickly move through the temperature danger zone, reducing microbial growth risk and improving food safety.",
  },
  {
    id: 3,
    icon: <Droplets className="h-6 w-6 text-primary" />,
    title: "Moisture Retention",
    description:
      "Preserve the natural moisture of your food, maintaining taste, texture, and appearance.",
  },
  {
    id: 4,
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
    title: "Energy Efficiency",
    description:
      "Reduce energy costs by up to 40% compared to conventional cooling methods without compromising on performance.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-balance">
            Revolutionary <span className="text-primary">Features</span> &{" "}
            <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-muted-foreground text-lg text-balance">
            Our cutting-edge technology offers numerous advantages over traditional
            methods, saving time, energy, and improving quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-balance">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 glass-card rounded-2xl bg-gradient-to-br from-accent/80 to-accent/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-display font-bold text-primary mb-2">5x</h3>
              <p className="text-sm font-medium">Faster Cooling</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-display font-bold text-primary mb-2">40%</h3>
              <p className="text-sm font-medium">Energy Savings</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-display font-bold text-primary mb-2">25x</h3>
              <p className="text-sm font-medium">Faster Food Treatment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
