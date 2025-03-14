
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, CookingPot, Utensils, UtensilsCrossed } from "lucide-react";

const productItems = [
  {
    icon: <ChefHat className="h-12 w-12 text-primary" />,
    title: "Consultation & Implementation",
    description: "Expert guidance on integrating our rapid chilling technology into your existing workflow and kitchen setup.",
  },
  {
    icon: <CookingPot className="h-12 w-12 text-primary" />,
    title: "Training Programs",
    description: "Comprehensive training for your staff to maximize efficiency and results with our innovative cooling systems.",
  },
  {
    icon: <Utensils className="h-12 w-12 text-primary" />,
    title: "Custom Solutions",
    description: "Tailored solutions designed specifically for your operation's unique requirements and challenges.",
  },
  {
    icon: <UtensilsCrossed className="h-12 w-12 text-primary" />,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance programs to ensure optimal performance of your equipment.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Our Premium <span className="text-primary">Products</span> for Culinary Excellence
          </h2>
          <p className="text-muted-foreground text-balance">
            We provide revolutionary rapid chilling solutions to transform your culinary operations and enhance food quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productItems.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 border border-border/50 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <Link to="/products">
            <Button className="rounded-full shadow-md">
              Explore All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
