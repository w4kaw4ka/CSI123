import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import { motion } from "framer-motion";
import { Users, Lightbulb, HeartHandshake } from "lucide-react";

const leadershipTeam = [
  {
    name: "Mark Linder",
    position: "Co-founder",
    image: "/placeholder.svg",
    bio: "With over 20 years of experience in food technology innovation, Mark leads our strategic vision and product development."
  },
  {
    name: "John Field",
    position: "Co-founder",
    image: "/placeholder.svg",
    bio: "John brings deep technical expertise in vacuum technology and has pioneered revolutionary approaches to food conditioning."
  },
  {
    name: "Chris Choffat",
    position: "VP Operations",
    image: "/placeholder.svg",
    bio: "Chris oversees all operational aspects of CSI, ensuring efficient manufacturing and delivery of our innovative solutions."
  },
  {
    name: "Greg Fatigati",
    position: "R&D Culinary",
    image: "/placeholder.svg",
    bio: "A classically trained chef with technical expertise, Greg leads our culinary research and development initiatives."
  },
  {
    name: "Dr. Sarah Chen",
    position: "Chief Science Officer",
    image: "/placeholder.svg",
    bio: "With a Ph.D. in Food Science, Sarah leads our scientific research and ensures our technology meets the highest standards."
  },
  {
    name: "Michael Rodriguez",
    position: "VP Business Development",
    image: "/placeholder.svg",
    bio: "Michael has helped hundreds of food businesses implement our technology, driving growth and innovation."
  }
];

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Learn more about Culinary Sciences Inc. and our mission to transform the food industry.
          </p>
        </div>
      </div>
      
      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Our Story</h2>
            <div className="space-y-4">
              <p className="mb-4">
                Founded in 2018, Culinary Sciences Inc. (CSI) was born from a vision to revolutionize how the food industry approaches Rapid Chilling and Food Treatment. Our founders, with decades of experience in engineering and culinary arts, identified a critical gap in the market: traditional methods were inefficient, inconsistent, and compromised food quality.
              </p>
              <p className="mb-4">
                What began as an experimental prototype in a small workshop has evolved into a suite of groundbreaking Extreme Vacuum Cooling (EVC) technologies that are transforming food operations across restaurants, food manufacturers, and agricultural businesses worldwide.
              </p>
              <p>
                Our mission is simple: to develop and deliver innovative, IP-protected technologies that dramatically enhance food quality and flavor, extend shelf life, reduce energy consumption, and create more sustainable food systems. Through continuous research and development, we're pushing the boundaries of what's possible in rapid-chilling and food treatment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving innovation and excellence at Culinary Sciences Inc.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-accent font-medium mb-3">{leader.position}</p>
                  <p className="text-muted-foreground">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <HeartHandshake className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Values & Commitment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Culinary Sciences Inc.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We're committed to pushing boundaries and developing technologies that challenge conventional thinking and methods. Our R&D team designs for efficiency and innovation, integrating these principles into every stage of our products—from concept to release. By combining cutting-edge engineering with practical applications, we create solutions that transform the way the food industry operates.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We embrace quality and believe it belongs everywhere within CSI. From our manufacturing supply chain to our Extreme Vacuum Cooling (EVC) systems, we ensure precision and reliability in every step of the process. Our equipment is designed to preserve and enhance the natural flavors, textures, and nutritional profiles of foods, delivering consistent results that food producers and consumers can trust.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                Environmental responsibility is at the core of our operations. Our technologies reduce energy consumption, minimize waste, and support more sustainable food systems. By prioritizing sustainability, we help our partners meet their environmental goals while maintaining the highest standards of performance and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
