
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import ClientsTestimonials from "@/components/home/ClientsTestimonials";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <TestimonialSection />
      <ClientsTestimonials />
      <SolutionsSection />
      <ProductsShowcase />
      <ContactSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
