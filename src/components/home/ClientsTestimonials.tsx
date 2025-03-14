
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const clientLogos = [
  {
    name: "Taylor Farms",
    logoPlaceholder: "Taylor Farms logo",
    url: "/case-studies"
  },
  {
    name: "Levy Restaurants",
    logoPlaceholder: "Levy Restaurants logo",
    url: "/case-studies"
  },
  {
    name: "Roundabout",
    logoPlaceholder: "Roundabout logo",
    url: "/case-studies"
  },
  {
    name: "Thistle",
    logoPlaceholder: "Thistle logo",
    url: "/case-studies"
  }
];

const ClientsTestimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0033a0] mb-4">
            Hear what our clients say about the EVC
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry leaders trust our technology to transform their operations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Link 
                to={client.url}
                className="bg-gray-100 rounded-lg w-full aspect-[4/2] flex items-center justify-center hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Logo</span>
                  </div>
                  <p className="text-primary font-medium">{client.logoPlaceholder}</p>
                </div>
              </Link>
              <span className="mt-3 text-sm text-gray-600 font-medium">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsTestimonials;
