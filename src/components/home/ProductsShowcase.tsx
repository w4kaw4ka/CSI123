import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ThreeDViewer from "../ThreeDViewer";

const ProductsShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState(0);
  
  const products = [
    { id: 0, name: "EVC-1000", description: "Industrial-scale rapid chilling system" },
    { id: 1, name: "EVC-500", description: "Medium capacity food treatment unit" },
    { id: 2, name: "EVC-250", description: "Compact solution for smaller operations" },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0033a0] mb-6">
            Our EVC Technology Products
          </h2>
          <p className="text-lg text-[#0033a0]/80">
            Explore our line of revolutionary Extreme Vacuum Cooling systems designed to meet your Rapid-Chill needs, from modest to industrial scale.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full aspect-[16/9] md:aspect-[21/9] bg-secondary/10 relative"
      >
        <div className="absolute inset-0">
          <ThreeDViewer />
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                selectedProduct === product.id 
                  ? "bg-[#0033a0] text-white shadow-lg" 
                  : "bg-white/80 text-[#0033a0]/70 hover:bg-white hover:text-[#0033a0]"
              }`}
            >
              <span className="font-medium text-sm">{product.id + 1}</span>
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-md">
            <p className="font-medium text-[#0033a0]">
              {products[selectedProduct].name}: {products[selectedProduct].description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductsShowcase;
