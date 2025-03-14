
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import ProductModelsSection from "@/components/home/ProductModelsSection";
import TestingResultsSection from "@/components/services/TestingResultsSection";

const ProductsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Products</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            Explore our revolutionary rapid chilling and food treatment technology solutions engineered to transform your culinary operations.
          </p>
        </div>
      </div>
      <ProductModelsSection />
      <TestingResultsSection />
    </Layout>
  );
};

export default ProductsPage;
