
import React, { useEffect } from "react";
import Layout from "@/components/ui/layout/Layout";
import ContactSection from "@/components/home/ContactSection";

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
            We're here to answer any questions you might have about our rapid chilling technology and how it can benefit your operations.
          </p>
        </div>
      </div>
      <ContactSection />
    </Layout>
  );
};

export default ContactPage;
