
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 max-w-5xl mx-auto text-center"
        >
          <div className="inline-block mb-6 rounded-full px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium">
            Ready to Transform Your Food Production?
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            Experience the Future of <span className="text-primary">Food Technology</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Discover how our revolutionary cooling and treatment solutions can 
            increase your efficiency, reduce costs, and improve food quality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-md">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-primary/20 shadow-sm hover:bg-primary/5"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
