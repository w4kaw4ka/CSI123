
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card p-8 overflow-hidden">
              <div className="relative aspect-video bg-primary/5 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Food technology innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="aspect-square bg-primary/5 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    alt="Food tech innovation detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-primary/5 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    alt="Food tech control systems"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="section-title text-balance">
              Transforming the Food Industry Through{" "}
              <span className="text-primary">Innovation</span>
            </h2>

            <p className="text-muted-foreground mb-6 text-balance">
              At CSI, we're pioneering revolutionary technologies that are transforming how food is prepared, 
              processed, and preserved on a large scale. Our solutions combine efficiency, quality, and sustainability.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-semibold">Industry-Leading Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    Our Extreme Vacuum Cooling™ technology offers unprecedented cooling speeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-semibold">Energy Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce operational costs with up to 40% energy savings compared to conventional methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-semibold">Superior Food Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Preserve taste, texture, and nutritional value while extending shelf-life.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button className="rounded-full shadow-md">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
