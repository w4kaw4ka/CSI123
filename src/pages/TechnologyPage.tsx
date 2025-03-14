
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyPillars from "@/components/technology/TechnologyPillars";
import AIAlgorithms from "@/components/technology/AIAlgorithms";
import RDResults from "@/components/technology/RDResults";

const TechnologyPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Technology</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Discover our groundbreaking extreme vacuum cooling technology that revolutionizes food chilling and treatment.
          </p>
        </div>
      </div>
      <TechnologyHero />
      <TechnologyPillars />
      <AIAlgorithms />
      <RDResults />
    </Layout>
  );
};

export default TechnologyPage;
