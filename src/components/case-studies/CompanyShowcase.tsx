
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const companyStudies = [
  {
    id: "marriott-international",
    name: "Marriott International",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    industry: "Hospitality",
    location: "Global",
    challenge: "Managing food safety and quality across 500+ properties while reducing energy consumption.",
    solution: "Implemented EVC-5000 units in 120 flagship properties, with plans to expand to all locations.",
    results: [
      "42% reduction in energy costs related to food cooling",
      "68% faster cooling times compared to traditional methods",
      "99.8% compliance with food safety temperature requirements",
      "Estimated $4.2M annual savings across implemented locations"
    ],
    testimonial: "The Culinary Sciences EVC system has transformed our kitchen operations. We're seeing significant improvements in food safety, quality, and energy efficiency.",
    testimonialAuthor: "Michael Chen, VP of Food Operations",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    id: "compass-group",
    name: "Compass Group",
    logo: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
    industry: "Food Service Management",
    location: "North America & Europe",
    challenge: "Streamlining food production across university campuses, hospitals, and corporate dining facilities.",
    solution: "Deployed EVC-3000 units in central production kitchens serving multiple locations.",
    results: [
      "35% reduction in food waste through improved shelf-life",
      "70% faster cooling cycles allowing for more efficient batch production",
      "22% increase in production capacity without facility expansion",
      "Significant improvement in product consistency and quality"
    ],
    testimonial: "The rapid chilling technology from Culinary Sciences has allowed us to completely rethink our production schedule and delivery model, resulting in fresher food and lower operational costs.",
    testimonialAuthor: "Sarah Johnson, Director of Operations",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f"
  },
  {
    id: "nestle",
    name: "Nestlé",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    industry: "Food Manufacturing",
    location: "Global",
    challenge: "Increasing production efficiency while maintaining product quality in prepared meal lines.",
    solution: "Integrated multiple EVC-5000 systems into production facilities worldwide.",
    results: [
      "75% reduction in cooling time for prepared meals",
      "40% energy savings compared to conventional cooling methods",
      "Improved texture and flavor retention in finished products",
      "Enhanced microbiological safety with rapid temperature reduction"
    ],
    testimonial: "Culinary Sciences' EVC technology has become a critical component in our quality control process. The rapid cooling capabilities have allowed us to innovate with new product lines that weren't previously possible.",
    testimonialAuthor: "Thomas Weber, Global Manufacturing Director",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];

const CompanyShowcase = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleCompanyClick = (id: string) => {
    setSelectedCompany(id);
    setOpen(true);
  };

  const selectedCompanyData = companyStudies.find(company => company.id === selectedCompany);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-balance">
            Discover how organizations across various sectors are achieving remarkable results with our technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyStudies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleCompanyClick(company.id)}
            >
              <div className="p-8 flex flex-col items-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-4 mb-6 shadow-md">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} logo`} 
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                <p className="text-primary font-medium mb-4">{company.industry}</p>
                <p className="text-muted-foreground text-center">
                  {`${company.results[0].split("%")[0]}%`} {company.results[0].split("%")[1]}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-full"
                >
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center">
                {selectedCompanyData?.name}
                <span className="ml-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {selectedCompanyData?.industry}
                </span>
              </DialogTitle>
              <DialogDescription>
                <div className="text-xs text-muted-foreground">{selectedCompanyData?.location}</div>
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2">
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                <img 
                  src={selectedCompanyData?.image} 
                  alt={`${selectedCompanyData?.name} facility`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Challenge</h4>
                  <p className="text-muted-foreground">{selectedCompanyData?.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Solution</h4>
                  <p className="text-muted-foreground">{selectedCompanyData?.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Results</h4>
                  <ul className="space-y-2">
                    {selectedCompanyData?.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-primary mt-1"></div>
                        </div>
                        <span className="ml-3 text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-6 rounded-lg">
                  <p className="italic text-muted-foreground mb-4">"{selectedCompanyData?.testimonial}"</p>
                  <p className="font-medium">— {selectedCompanyData?.testimonialAuthor}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CompanyShowcase;
