
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "5-Star Hotel Chain",
    category: "Hospitality",
    description: "Implemented rapid chilling system across 12 locations, resulting in 40% reduction in energy costs and improved food safety compliance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "University Dining Services",
    category: "Education",
    description: "Transformed campus food service operations with our technology, reducing food waste by 35% and increasing meal preparation efficiency.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Global Food Manufacturer",
    category: "Industrial",
    description: "Deployed multiple EVC systems in production facilities worldwide, cutting processing times by 75% and improving product quality.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Success <span className="text-primary">Stories</span> From Our Clients
          </h2>
          <p className="text-muted-foreground text-balance">
            See how leading organizations have transformed their operations with our rapid chilling technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="text-xs font-medium py-1 px-2 rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Link to="/case-studies" className="group inline-flex items-center text-primary font-medium">
                  Read Case Study 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/case-studies">
            <Button className="rounded-full shadow-md">
              View All Case Studies
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
