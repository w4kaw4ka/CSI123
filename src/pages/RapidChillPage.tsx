import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import { motion } from "framer-motion";
import { 
  Zap, Clock, Shield, LineChart, FlaskConical, Utensils, 
  Hotel, GraduationCap, Leaf, Package, ShoppingCart 
} from "lucide-react";

const researchResults = [
  { 
    food: "Salmon", 
    traditional: "30 min", 
    evc: "6 min", 
    improvement: "5x faster",
    quality: "Enhanced texture, color preservation" 
  },
  { 
    food: "Lasagna", 
    traditional: "90 min", 
    evc: "17 min", 
    improvement: "5.3x faster",
    quality: "Better layer integrity, flavor retention" 
  },
  { 
    food: "Chicken Breast", 
    traditional: "45 min", 
    evc: "8 min", 
    improvement: "5.6x faster",
    quality: "Improved moisture retention, tenderness" 
  },
  { 
    food: "Beans", 
    traditional: "20 min", 
    evc: "4 min", 
    improvement: "5x faster",
    quality: "Preserved texture, nutritional content" 
  },
  { 
    food: "Rice", 
    traditional: "25 min", 
    evc: "5 min", 
    improvement: "5x faster",
    quality: "Perfect grain integrity, flavor enhancement" 
  }
];

const industryApplications = [
  {
    title: "Catering",
    description: "Rapid cooling for large-scale events and delivery services.",
    icon: Utensils
  },
  {
    title: "Hospitality",
    description: "Enhanced food quality and safety for hotels and restaurants.",
    icon: Hotel
  },
  {
    title: "Universities and K-12",
    description: "Efficient food service operations for educational institutions.",
    icon: GraduationCap
  },
  {
    title: "Agriculture",
    description: "Extend shelf life and preserve freshness for farm produce.",
    icon: Leaf
  },
  {
    title: "Prepared Foods",
    description: "Optimal cooling for ready-to-eat and convenience foods.",
    icon: Package
  },
  {
    title: "Supermarkets",
    description: "Cost-effective cooling solutions for retail food operations.",
    icon: ShoppingCart
  }
];

const RapidChillPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Rapid-Chill Solutions</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Discover our revolutionary rapid chilling technology for the food industry.
          </p>
        </div>
      </div>
      
      {/* Technology Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Science of Extreme Vacuum Cooling</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our Rapid-Chill technology harnesses the power of extreme vacuum conditions to revolutionize the food cooling process. Unlike conventional cooling that relies on conduction from the outside in, our vacuum technology triggers evaporative cooling from within the food itself.
                </p>
                <p className="mb-4">
                  By carefully controlling the pressure in the vacuum food chamber, we create the perfect environment for rapid cooling without compromising food quality. This precision approach allows us to cool food up to 5 times faster than traditional methods, preserving flavor, texture, and nutritional value.
                </p>
                <p>
                  The process is enhanced by our proprietary adaptive algorithms that adjust cooling parameters in real-time based on food type, density, and desired temperature, ensuring optimal results every time. This intelligent system ensures unmatched precision, reliability, and consistency in every batch.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="/placeholder.svg" 
                alt="Extreme Vacuum Cooling Technology" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">EVC Key Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Rapid-Chill technology delivers significant advantages over traditional cooling methods.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">5x Faster Cooling</h3>
              <p className="text-muted-foreground">
                Dramatically reduces cooling time from hours to minutes, improving operational efficiency and throughput.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Enhanced Flavor Retention</h3>
              <p className="text-muted-foreground">
                Preserves the organoleptic (flavor, texture, and nutritional) qualities of food with our revolutionary cooling process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Extended Shelf Life</h3>
              <p className="text-muted-foreground">
                Enables hot food to quickly exit the temperature danger zone, inhibiting pathogen growth and enzyme activity, to significantly extend product shelf life and reduce waste.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Industry Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industry Applications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Rapid-Chill technology is transforming operations across multiple sectors.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryApplications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Applications Section (Old format - keeping for reference) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sector Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for different business types and operational needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Restaurants & Catering</h3>
              <p className="text-muted-foreground mb-4">
                Improve kitchen efficiency, enhance food safety, and maintain quality during high-volume service periods.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Rapid cooling of prepared meals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Preserve quality during transport</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Extend shelf life of prepared items</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Food Manufacturing</h3>
              <p className="text-muted-foreground mb-4">
                Optimize production processes, ensure consistent quality, and reduce energy costs in large-scale operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Integration into production lines</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Batch processing optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Ready-to-eat meal production</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">Healthcare & Institutions</h3>
              <p className="text-muted-foreground mb-4">
                Ensure food safety, nutritional integrity, and efficient meal service in healthcare and institutional settings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Hospital meal preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">School and university dining</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                  <span className="text-muted-foreground">Correctional facility food service</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* R&D Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <FlaskConical className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Research & Testing Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our extensive R&D testing demonstrates the superior performance of EVC technology.
            </p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Food Item</th>
                  <th className="px-6 py-3 text-left">Traditional Cooling</th>
                  <th className="px-6 py-3 text-left">EVC Cooling</th>
                  <th className="px-6 py-3 text-left">Improvement</th>
                  <th className="px-6 py-3 text-left">Quality Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {researchResults.map((item, index) => (
                  <motion.tr
                    key={item.food}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 font-medium">{item.food}</td>
                    <td className="px-6 py-4">{item.traditional}</td>
                    <td className="px-6 py-4 text-accent font-medium">{item.evc}</td>
                    <td className="px-6 py-4 font-bold text-primary">{item.improvement}</td>
                    <td className="px-6 py-4">{item.quality}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RapidChillPage;
