import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-primary">
                Culinary Sciences
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Revolutionizing high-volume food preparation with cutting-edge 
              Rapid Chilling technology that's up to 5x faster than traditional methods.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm hover:text-primary transition-colors">Our Technology</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm hover:text-primary transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm hover:text-primary transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/whitepapers" className="text-sm hover:text-primary transition-colors">Whitepapers</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm hover:text-primary transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/news" className="text-sm hover:text-primary transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-primary transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mt-0.5 mr-3 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-0.5 mr-3 text-primary" />
                <span className="text-sm">contact@csitech.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-3 text-primary" />
                <span className="text-sm">
                  123 Innovation Drive, Suite 200<br />
                  Tech Valley, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Culinary Sciences. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
