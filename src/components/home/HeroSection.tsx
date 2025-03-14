import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left side - Video */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 h-[40vh] lg:h-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gray-800">
            {/* Placeholder for video - replace with actual video */}
            <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
              Profile view video of professional working on machine
              <br/>(Video to be implemented)
            </div>
          </div>
        </motion.div>

        {/* Right side - Text content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 bg-[#0033A0] text-white flex items-center p-8 lg:p-16"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
                  Patented, Transformational Food Tech
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Revolutionize Your Food Operations With Breakthrough Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
            >
              Our Extreme Vacuum Cooling™ products transform food processing with cooling solutions that are up to 5x faster than traditional methods, all while preserving quality and saving energy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="rounded-full shadow-md bg-white text-[#0033A0] hover:bg-white/90">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/technology">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-[#0033A0] bg-white shadow-sm hover:bg-white/90"
                >
                  Explore Our Technology
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-white">5x</p>
                <p className="text-sm text-white/70">Faster Cooling</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">40%</p>
                <p className="text-sm text-white/70">Energy Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">25x</p>
                <p className="text-sm text-white/70">Faster Treatment</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
