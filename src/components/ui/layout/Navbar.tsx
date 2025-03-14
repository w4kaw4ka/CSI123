import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Rapid-Chill", href: "/rapid-chill" },
  { name: "Food Treatment", href: "/food-treatment" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "FR", name: "Français" },
  { code: "IT", name: "Italiano" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white",
        isScrolled
          ? "shadow-sm border-gray-200/20"
          : "border-transparent"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between py-6">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="logo.png" 
              alt="Company Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-10 px-3 flex items-center">
                <Globe className="h-5 w-5 text-[#1e3a8a] mr-2" />
                <span className="text-[#1e3a8a] text-base font-medium">{currentLanguage.code}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setCurrentLanguage(lang)}
                >
                  <span className={cn(
                    "text-base",
                    currentLanguage.code === lang.code ? "font-medium text-[#1e3a8a]" : "text-gray-700"
                  )}>
                    {lang.name}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-[#4ade80]",
                pathname === item.href
                  ? "text-[#1e3a8a] font-semibold"
                  : "text-[#1e3a8a]/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#1e3a8a]" />
          ) : (
            <Menu className="h-6 w-6 text-[#1e3a8a]" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block py-2 text-base font-medium hover:text-[#4ade80]",
                  pathname === item.href
                    ? "text-[#1e3a8a] font-semibold"
                    : "text-[#1e3a8a]/80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
