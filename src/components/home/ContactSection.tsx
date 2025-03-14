
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title text-balance mb-4">
            Get in <span className="text-primary">Touch</span> With Us
          </h2>
          <p className="text-muted-foreground text-balance">
            Have questions about our rapid chilling technology? Our team is here to help you find the perfect solution for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card border border-border/50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    className="border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Your Company"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="How can we help you?"
                  className="border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your needs..."
                  className="border-border/50 focus:border-primary min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full rounded-full shadow-md">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="glass-card border border-border/50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold">Email</h4>
                    <p className="text-muted-foreground">info@culinarysciences.com</p>
                    <p className="text-muted-foreground">support@culinarysciences.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold">Phone</h4>
                    <p className="text-muted-foreground">+1 (800) 555-0123 (Sales)</p>
                    <p className="text-muted-foreground">+1 (800) 555-0124 (Support)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold">Headquarters</h4>
                    <p className="text-muted-foreground">
                      123 Culinary Drive, Suite 500<br />
                      Innovation Park, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border border-border/50 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday:</span>
                  <span className="text-sm font-medium">9:00 AM - 6:00 PM (EST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday:</span>
                  <span className="text-sm font-medium">10:00 AM - 2:00 PM (EST)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday:</span>
                  <span className="text-sm font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-center">
                  For urgent inquiries outside business hours,<br />
                  please email <span className="font-medium">support@culinarysciences.com</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
