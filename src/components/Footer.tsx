
import React from "react";
import { Mail, Instagram, Twitter, Linkedin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f2e8cb] py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src="/logo_affc.webp" alt="AFFC Logo" className="h-12" />
            </div>
            <p className="text-foreground/80 mb-6 max-w-md">
              Africa Female Founders Collective is dedicated to supporting and scaling 
              female-owned and led ventures across African markets.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-40 flex items-center justify-center text-[#9bbfe0] hover:bg-affc-blue hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-40 flex items-center justify-center text-[#9bbfe0] hover:bg-affc-blue hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-40 flex items-center justify-center text-[#9bbfe0] hover:bg-affc-blue hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-40 flex items-center justify-center text-[#9bbfe0] hover:bg-affc-blue hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#network" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Our Network
                </a>
              </li>
              <li>
                <a href="#events" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#resources" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-affc-blue transition-colors link-underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#9bbfe0]" />
                <a href="mailto:info@affc.org" className="text-foreground/80 hover:text-affc-blue transition-colors">
                   affc@elect-her.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={16} className="text-[#9bbfe0] mt-1" />
                <span className="text-foreground/80">
                  Pan-African with hubs in Nairobi, Lagos, and Cape Town
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-affc-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Africa Female Founders Collective. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-foreground/60 hover:text-affc-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-foreground/60 hover:text-affc-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
